#!/usr/bin/env tsx

/**
 * Validate Skill - Validates code quality and standards
 * Usage: /validate [full|quick]
 * Runs ESLint, TypeScript compilation, accessibility audit, and performance checks
 */

import { execSync } from 'child_process';
import { existsSync, readFileSync } from 'fs';

type ValidationType = 'full' | 'quick' | 'lint' | 'typescript' | 'accessibility' | 'performance';

interface ValidationCheck {
  type: ValidationType;
  command?: string;
  description: string;
  critical: boolean;
  check: () => boolean;
}

const validationChecks: ValidationCheck[] = [
  {
    type: 'lint',
    command: 'npm run lint',
    description: 'ESLint validation',
    critical: true,
    check: () => {
      try {
        execSync('npm run lint', { stdio: 'pipe' });
        return true;
      } catch {
        return false;
      }
    }
  },
  {
    type: 'typescript',
    command: 'npx tsc --noEmit',
    description: 'TypeScript compilation check',
    critical: true,
    check: () => {
      try {
        execSync('npx tsc --noEmit', { stdio: 'pipe' });
        return true;
      } catch {
        return false;
      }
    }
  },
  {
    type: 'accessibility',
    description: 'Accessibility audit',
    critical: false,
    check: () => {
      // Check for common accessibility issues
      const files = [
        'src/app/layout.tsx',
        'src/components/navbar.tsx'
      ];

      for (const file of files) {
        if (existsSync(file)) {
          const content = readFileSync(file, 'utf-8');
          if (!content.includes('aria-') && !content.includes('alt=')) {
            console.log('⚠️  Consider adding accessibility attributes');
          }
        }
      }
      return true;
    }
  },
  {
    type: 'performance',
    description: 'Performance metrics',
    critical: false,
    check: () => {
      // Check for common performance issues
      const issues: string[] = [];

      // Check for large images without optimization
      const publicDir = 'public';
      if (existsSync(publicDir)) {
        const images = ['png', 'jpg', 'jpeg', 'gif', 'webp'];
        // Add logic to check image sizes if needed
      }

      // Check for missing React.memo where appropriate
      const componentFiles = execSync('find src -name "*.tsx" -type f', { encoding: 'utf-8' })
        .split('\n')
        .filter(Boolean);

      for (const file of componentFiles.slice(0, 5)) { // Check first 5 files as sample
        if (existsSync(file)) {
          const content = readFileSync(file, 'utf-8');
          if (content.includes('map(') && !content.includes('React.memo')) {
            issues.push(`Consider React.memo for ${file}`);
          }
        }
      }

      if (issues.length > 0) {
        console.log('\n📈 Performance suggestions:');
        issues.forEach(issue => console.log(`  - ${issue}`));
      }

      return true;
    }
  }
];

function runValidation(type: ValidationType = 'full') {
  const checks = type === 'quick'
    ? validationChecks.filter(check => check.critical)
    : validationChecks.filter(check => type === 'all' || check.type === type);

  console.log('\n🔍 Running validation checks...\n');

  let hasErrors = false;
  let hasWarnings = false;

  for (const check of checks) {
    console.log(`\n${check.description}:`);
    console.log('─'.repeat(50));

    try {
      if (check.command) {
        execSync(check.command, { stdio: 'inherit' });
      }

      const passed = check.check();
      if (passed) {
        console.log('✅ Passed');
      } else {
        console.log('❌ Failed');
        if (check.critical) {
          hasErrors = true;
        } else {
          hasWarnings = true;
        }
      }
    } catch (error) {
      console.log('❌ Failed');
      if (check.critical) {
        hasErrors = true;
      } else {
        hasWarnings = true;
      }
    }
  }

  console.log('\n' + '='.repeat(50));

  if (hasErrors) {
    console.log('\n❌ Validation failed with errors!');
    console.log('Please fix all critical issues before proceeding.');
    process.exit(1);
  } else if (hasWarnings) {
    console.log('\n⚠️  Validation passed with warnings');
    console.log('Consider addressing the warnings for better quality.');
  } else {
    console.log('\n✅ All validations passed successfully!');
  }

  // Additional checks for full validation
  if (type === 'full') {
    console.log('\n📋 Additional checks:');

    // Check if package.json has proper scripts
    const packageJson = JSON.parse(readFileSync('package.json', 'utf-8'));
    const requiredScripts = ['dev', 'build', 'lint'];
    const missingScripts = requiredScripts.filter(script => !packageJson.scripts[script]);

    if (missingScripts.length > 0) {
      console.log(`⚠️  Missing npm scripts: ${missingScripts.join(', ')}`);
    }

    // Check for .gitignore
    if (!existsSync('.gitignore')) {
      console.log('⚠️  No .gitignore file found');
    }

    // Check for README
    if (!existsSync('README.md')) {
      console.log('⚠️  No README.md file found');
    }
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const validationType = (args[0] || 'full') as ValidationType;

runValidation(validationType);