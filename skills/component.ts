#!/usr/bin/env tsx

/**
 * Component Skill - Creates new reusable components with proper structure
 * Usage: /component Button
 * Creates a component with TypeScript interfaces, CVA variants, and unit test template
 */

import { execSync } from 'child_process';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

interface SkillOptions {
  componentName: string;
  variant?: boolean;
  test?: boolean;
  story?: boolean;
}

const template = {
  component: (name: string, hasVariants: boolean) => `import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

${hasVariants ? `const ${name}Variants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "default-classes",
        secondary: "secondary-classes",
      },
      size: {
        sm: "size-classes",
        md: "size-classes",
        lg: "size-classes",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);` : ''}

export interface ${name}Props
  extends React.HTMLAttributes<HTMLDivElement>${hasVariants ? `,
    VariantProps<typeof ${name}Variants>` : ''} {}

const ${name} = React.forwardRef<HTMLDivElement, ${name}Props>(
  ({ className, ${hasVariants ? 'variant, size, ' : ''}...props }, ref) => {
    return (
      <div
        className={cn(${hasVariants ? `${name}Variants({ variant, size, ` : ''}className${hasVariants ? '})' : ''})}
        ref={ref}
        {...props}
      />
    );
  }
);
${name}.displayName = "${name}";

export { ${name}${hasVariants ? `, ${name}Variants` : '' } };
`,

  test: (name: string) => `import { render, screen } from "@testing-library/react";
import { ${name} } from "./${name}";

describe("${name}", () => {
  it("renders correctly", () => {
    render(<${name}>Test content</${name}>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<${name} className="custom-class">Test</${name}>);
    const element = screen.getByText("Test");
    expect(element).toHaveClass("custom-class");
  });
});
`,

  index: (name: string) => `export { ${name} } from "./${name}";
`,
};

function createComponent(options: SkillOptions) {
  const { componentName, variant = true, test = true } = options;

  // Convert to PascalCase if needed
  const name = componentName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  const componentDir = join('src/components/ui', componentName.toLowerCase());

  // Create directory
  if (!existsSync(componentDir)) {
    mkdirSync(componentDir, { recursive: true });
  }

  // Write component file
  writeFileSync(
    join(componentDir, `${name}.tsx`),
    template.component(name, variant)
  );

  // Write test file
  if (test) {
    writeFileSync(
      join(componentDir, `${name}.test.tsx`),
      template.test(name)
    );
  }

  // Write index file
  writeFileSync(
    join(componentDir, 'index.ts'),
    template.index(name)
  );

  // Update main index if needed
  const mainIndexPath = 'src/components/ui/index.ts';
  if (existsSync(mainIndexPath)) {
    const currentContent = require('fs').readFileSync(mainIndexPath, 'utf-8');
    if (!currentContent.includes(`export * from "./${componentName.toLowerCase()}"`)) {
      require('fs').appendFileSync(
        mainIndexPath,
        `export * from "./${componentName.toLowerCase()}";\n`
      );
    }
  }

  console.log(`✅ Component ${name} created successfully!`);
  console.log(`📁 Location: ${componentDir}`);
}

// Parse command line arguments
const args = process.argv.slice(2);
const componentName = args[0];

if (!componentName) {
  console.error('❌ Error: Component name is required');
  console.log('Usage: /component <component-name>');
  process.exit(1);
}

createComponent({
  componentName,
  variant: true,
  test: true,
});