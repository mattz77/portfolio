#!/usr/bin/env tsx

/**
 * Test Skill - Runs comprehensive test suite
 * Usage: /test [component|all|coverage]
 * Runs unit tests, component tests, E2E tests, and generates coverage report
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';

type TestType = 'unit' | 'component' | 'e2e' | 'all' | 'coverage';

interface TestCommand {
  type: TestType;
  command: string;
  description: string;
}

const testCommands: TestCommand[] = [
  {
    type: 'unit',
    command: 'npm test -- --testPathPattern="\\.(test|spec)\\.(ts|tsx)$" --passWithNoTests',
    description: 'Running unit tests for utilities and hooks'
  },
  {
    type: 'component',
    command: 'npm test -- --testPathPattern="components" --passWithNoTests',
    description: 'Running component tests'
  },
  {
    type: 'e2e',
    command: 'npx playwright test',
    description: 'Running E2E tests'
  },
  {
    type: 'all',
    command: 'npm test -- --coverage --passWithNoTests',
    description: 'Running all tests with coverage'
  },
  {
    type: 'coverage',
    command: 'npm test -- --coverage --coverageReporters=text-lcov | npx coveralls',
    description: 'Generating coverage report'
  }
];

function runTests(testType?: TestType, specificPath?: string) {
  try {
    console.log('\n🧪 Starting test suite...\n');

    if (specificPath) {
      const command = `npm test -- --testPathPattern="${specificPath}" --passWithNoTests`;
      console.log(`📋 Testing specific path: ${specificPath}`);
      execSync(command, { stdio: 'inherit' });
    } else {
      const commands = testType
        ? testCommands.filter(cmd => cmd.type === testType || cmd.type === 'all')
        : testCommands.filter(cmd => cmd.type === 'all');

      for (const test of commands) {
        console.log(`\n${test.description}`);
        console.log('─'.repeat(50));

        if (test.type === 'e2e' && !existsSync('playwright.config.ts')) {
          console.log('⏭️  Skipping E2E tests (not configured)');
          continue;
        }

        execSync(test.command, {
          stdio: 'inherit',
          env: { ...process.env, CI: 'true' }
        });
      }
    }

    console.log('\n✅ All tests completed successfully!');

    // Check coverage threshold
    if (testType === 'all' || testType === 'coverage') {
      console.log('\n📊 Coverage Summary:');
      console.log('─'.repeat(50));
      execSync('npm test -- --coverage --coverageReporters=text-summary --passWithNoTests', {
        stdio: 'inherit'
      });
    }

  } catch (error) {
    console.error('\n❌ Test suite failed!');
    console.error('\nPlease fix the failing tests before proceeding.');
    process.exit(1);
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const testType = args[0] as TestType;
const specificPath = args.find(arg => arg.includes('/') || arg.includes('\\'));

if (specificPath) {
  runTests(undefined, specificPath);
} else {
  runTests(testType);
}