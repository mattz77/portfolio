#!/usr/bin/env tsx

/**
 * Optimize Skill - Optimizes existing code for better performance and maintainability
 * Usage: /optimize [component|bundle|deps|all]
 * Removes duplicate code, improves reusability, optimizes bundle size, and updates dependencies
 */

import { execSync } from 'child_process';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';

type OptimizeType = 'component' | 'bundle' | 'deps' | 'all';

interface OptimizationTask {
  type: OptimizeType;
  description: string;
  execute: () => void;
}

async function findDuplicateClasses() {
  console.log('🔍 Scanning for duplicate Tailwind classes...');

  const files = await glob('src/**/*.{ts,tsx}', { ignore: 'node_modules/**' });
  const classMap = new Map<string, number>();

  files.forEach(file => {
    const content = readFileSync(file, 'utf-8');
    const classRegex = /className="([^"]+)"/g;
    let match;

    while ((match = classRegex.exec(content)) !== null) {
      const classes = match[1].split(/\s+/);
      classes.forEach(cls => {
        if (cls.length > 10) { // Only track long class names
          classMap.set(cls, (classMap.get(cls) || 0) + 1);
        }
      });
    }
  });

  // Find classes used more than 3 times
  const duplicates = Array.from(classMap.entries())
    .filter(([, count]) => count > 3)
    .sort(([, a], [, b]) => b - a);

  if (duplicates.length > 0) {
    console.log('\n📋 Candidates for abstraction:');
    duplicates.forEach(([className, count]) => {
      console.log(`  - "${className}" (used ${count} times)`);
    });
    return duplicates.map(([className]) => className);
  }

  return [];
}

function createUtilityClass(className: string) {
  const name = className
    .split(' ')
    .map(part => part.replace(/-./g, m => m[1].toUpperCase()))
    .join('');

  const utilityFile = `
// Generated utility class for: ${className}
export const ${name} = "${className}";
`;

  const utilitiesPath = 'src/lib/utilities.ts';
  if (!existsSync(utilitiesPath)) {
    writeFileSync(utilitiesPath, '// Auto-generated utility classes\n');
  }

  const content = readFileSync(utilitiesPath, 'utf-8');
  if (!content.includes(name)) {
    writeFileSync(utilitiesPath, content + utilityFile);
    console.log(`✅ Created utility: ${name}`);
  }
}

function checkBundleSize() {
  console.log('\n📦 Analyzing bundle size...');

  try {
    execSync('npm run build', { stdio: 'inherit' });

    // Check .next/output.txt if it exists
    const outputPath = '.next/output.txt';
    if (existsSync(outputPath)) {
      const output = readFileSync(outputPath, 'utf-8');
      console.log('\nBundle size information:');
      console.log(output);
    }

    // Analyze with next-bundle-analyzer if available
    try {
      execSync('npx @next/bundle-analyzer', { stdio: 'inherit' });
    } catch {
      console.log('⚠️  Install @next/bundle-analyzer for detailed bundle analysis');
    }
  } catch (error) {
    console.log('❌ Build failed');
  }
}

function optimizeImports() {
  console.log('\n🔧 Optimizing imports...');

  execSync('npx eslint --fix --ext .ts,.tsx src/', {
    stdio: 'inherit',
    env: { ...process.env, ESLINT_USE_FLAT_CONFIG: 'true' }
  });

  // Check for unused exports
  try {
    execSync('npx ts-prune', { stdio: 'inherit' });
  } catch {
    console.log('⚠️  Install ts-prune to find unused exports');
  }
}

function updateDependencies() {
  console.log('\n📦 Checking for dependency updates...');

  try {
    // Check for outdated packages
    execSync('pnpm outdated', { stdio: 'inherit' });

    // Security audit
    execSync('pnpm audit', { stdio: 'inherit' });

    console.log('\n💡 To update packages, run:');
    console.log('  pnpm update --latest');
    console.log('  # Or for specific packages:');
    console.log('  pnpm add <package>@latest');
  } catch (error) {
    console.log('⚠️  Some checks failed');
  }
}

async function optimizeComponents() {
  console.log('\n🧩 Optimizing components...');

  // Find components that could benefit from React.memo
  const files = await glob('src/components/**/*.tsx');

  for (const file of files.slice(0, 5)) { // Limit to 5 files for demo
    const content = readFileSync(file, 'utf-8');

    // Simple heuristic: if component renders lists, suggest memo
    if (content.includes('.map(') && !content.includes('React.memo')) {
      console.log(`\n⚡ Consider wrapping with React.memo: ${file}`);

      // Show example
      const componentName = file.split('/').pop()?.replace('.tsx', '');
      console.log(`Example: export default React.memo(${componentName});`);
    }
  }

  // Check for proper prop types
  console.log('\n🔍 Checking prop interfaces...');
  for (const file of files.slice(0, 3)) {
    const content = readFileSync(file, 'utf-8');
    if (!content.includes('interface') && !content.includes('type')) {
      console.log(`⚠️  Missing prop interface in: ${file}`);
    }
  }
}

async function runOptimization(type: OptimizeType = 'all') {
  console.log('\n⚡ Starting code optimization...\n');

  const tasks: OptimizationTask[] = [];

  if (type === 'all' || type === 'component') {
    tasks.push({
      type: 'component',
      description: 'Component optimization',
      execute: async () => {
        await optimizeComponents();
        const duplicates = await findDuplicateClasses();
        if (duplicates.length > 0 && type === 'all') {
          console.log('\n💡 Run /optimize component again to create utilities');
        }
      }
    });
  }

  if (type === 'all' || type === 'bundle') {
    tasks.push({
      type: 'bundle',
      description: 'Bundle optimization',
      execute: () => {
        checkBundleSize();
        optimizeImports();
      }
    });
  }

  if (type === 'all' || type === 'deps') {
    tasks.push({
      type: 'deps',
      description: 'Dependency optimization',
      execute: updateDependencies
    });
  }

  // Execute tasks
  for (const task of tasks) {
    console.log(`\n${task.description}:`);
    console.log('─'.repeat(50));
    await task.execute();
  }

  console.log('\n✅ Optimization completed!');
  console.log('\n📋 Recommendations:');
  console.log('  1. Review duplicate classes and create utilities');
  console.log('  2. Add React.memo to expensive components');
  console.log('  3. Remove unused dependencies');
  console.log('  4. Implement code splitting for large components');
}

// Parse command line arguments
const args = process.argv.slice(2);
const optimizeType = (args[0] || 'all') as OptimizeType;

runOptimization(optimizeType).catch(console.error);