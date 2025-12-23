# Claude Code Guide for akpandeya.com

## Project Overview
Personal portfolio and blog built with Astro, TypeScript, and Tailwind CSS following strict TDD and DDD principles.

## Tech Stack
- **Framework:** Astro 5.16.6 (Static Site Generation)
- **Language:** TypeScript 5.0
- **Styling:** Tailwind CSS 4.1.18
- **Testing:** Vitest 4.0
- **CI/CD:** GitHub Actions
- **Deployment:** Oracle Cloud VM via rsync

## Development Workflow (Strict TDD)

### Test-Driven Development Cycle

1. **RED:** Use `/test_writer_ts` agent to create failing tests
2. **GREEN:** Use `/code_writer_ts` agent to implement minimal code
3. **REFACTOR:** Improve code quality while keeping tests green
4. **VERIFY:** Use `/test_runner` to confirm all tests pass

### Available Agents

```bash
/test_writer_ts  # Generate comprehensive Vitest tests (TypeScript)
/code_writer_ts  # Implement TypeScript code following TDD and DDD patterns
/test_runner     # Execute tests and display coverage reports
/ddd_architect   # Domain modeling and architecture guidance
```

## Testing

### Running Tests

```bash
npm run test              # Watch mode (recommended for TDD)
npm run test:ui           # Open Vitest UI in browser
npm run test:coverage     # Generate coverage report
npm run test:run          # Run once (CI mode)
```

### Coverage Requirements

- **Minimum:** 80% for all metrics
  - Lines: 80%
  - Branches: 80%
  - Functions: 80%
  - Statements: 80%

- **Exclusions:**
  - Configuration files (*.config.*)
  - Test files (*.test.*, *.spec.*)
  - Type definitions (*.d.ts)

### Test Organization

```
src/
├── components/
│   ├── BlogCard.astro
│   └── __tests__/
│       └── BlogCard.test.ts
├── layouts/
│   ├── BaseLayout.astro
│   └── __tests__/
│       └── BaseLayout.test.ts
└── test/
    ├── setup.ts          # Vitest global setup
    └── utils/            # Test utilities and helpers
```

## Domain-Driven Design

### Bounded Contexts

1. **Blog Context**
   - Article management
   - Content collections
   - Tag system
   - Publishing workflow

2. **Portfolio Context**
   - Project showcases
   - Experience timeline
   - Tech badges
   - Skills matrix

3. **Analytics Context** (future)
   - Visitor tracking
   - Engagement metrics
   - Performance monitoring

### Key Domain Entities

**BlogPost (Aggregate Root)**
- Identity: Unique slug
- Value Objects: Title, Content, PublishDate
- Entities: Tags, Comments (future)
- Business Rules: Draft/published status, SEO requirements

**Project (Aggregate Root)**
- Identity: Project ID
- Value Objects: Title, Description, TechStack, ProjectURL
- Business Rules: Active/archived status

**TimelineEntry (Entity)**
- Identity: Entry ID
- Parent: Experience aggregate
- Value Objects: DateRange, Company, Role

### Value Objects

- **DateRange:** Start and end dates for experiences
- **TechStack:** Collection of technologies with categories
- **ContactInfo:** Email, social links (immutable)
- **SEOMetadata:** Title, description, og:image

## Code Guidelines

### Self-Documenting Code

Write code that explains itself. Avoid comments except for business logic.

**GOOD - Self-documenting:**
```typescript
function calculateReadingTimeInMinutes(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}
```

**BAD - Needs comments:**
```typescript
function calc(c: string): number {
  return Math.ceil(c.split(/\s+/).length / 200); // reading time
}
```

**Comment for business rules:**
```typescript
function canPublishPost(author: User, post: BlogPost): boolean {
  // Business rule: Only authors with verified email can publish
  // Prevents spam and ensures author accountability
  return author.emailVerified && post.status === 'ready';
}
```

### Naming Conventions

- Functions: Verb phrases (`getUserProfile`, `calculateTotalPrice`)
- Classes: Nouns (`BlogPost`, `UserRepository`)
- Booleans: Questions (`isPublished`, `hasComments`)
- Constants: UPPER_SNAKE_CASE (`MAX_TITLE_LENGTH`)

## CI/CD Pipeline

### Workflow: `.github/workflows/deploy.yml`

**On every push:**
1. **Lint:** TypeScript type checking with `astro check`
2. **Test:** Run Vitest with coverage
3. **Coverage:** Enforce 80% minimum threshold
4. **Build:** Generate static site
5. **Deploy:** Rsync to Oracle Cloud (main branch only)

### Status Checks

All checks must pass before deployment:
- Type checking
- Tests passing
- Coverage threshold met
- Build successful

## Common Tasks

### Adding a New Blog Post

```bash
# 1. Create test first
/test_writer_ts "Test blog post rendering with title, date, and excerpt"

# 2. Add markdown file
echo "---
title: My New Post
description: Post description
pubDate: 2024-01-15
tags: [astro, typescript]
---

Content here..." > src/content/blog/my-new-post.md

# 3. Run tests
npm run test

# 4. Verify
npm run build
```

### Adding a New Component

```bash
# 1. Write tests first (strict TDD)
/test_writer_ts "Create tests for ProjectCard component"

# 2. Implement component
/code_writer_ts "Implement ProjectCard based on failing tests"

# 3. Run tests
npm run test:run

# 4. Refactor if needed (tests must stay green)
```

## Project Structure

```
akpandeya.com/
├── src/
│   ├── content/              # Markdown blog posts
│   │   ├── blog/
│   │   └── config.ts        # Zod schemas for content validation
│   ├── components/          # Reusable Astro components
│   │   └── __tests__/
│   ├── layouts/             # Page layouts
│   │   └── __tests__/
│   ├── pages/               # Route pages
│   │   ├── index.astro
│   │   └── blog/
│   ├── styles/
│   │   └── global.css
│   └── test/
│       ├── setup.ts
│       └── utils/
├── .claude/
│   └── skills/              # Symlinked to claude-tdd-skills
├── claude.md                # This file
├── vitest.config.ts
└── package.json
```

## Best Practices

1. **Never skip tests** - All code requires tests first
2. **Watch mode for TDD** - Use `npm run test` during development
3. **Descriptive test names** - Tests document expected behavior
4. **Self-documenting code** - Clear names over comments
5. **Domain language** - Use ubiquitous language from domain model
6. **Small commits** - One feature/fix per commit
7. **Green builds** - Fix failures immediately

## Troubleshooting

### Tests failing
```bash
# Run specific test
npm run test -- -t "test name"

# See detailed output
npm run test:run

# Check coverage gaps
npm run test:coverage
open coverage/index.html
```

### Build errors
```bash
# Type check
npm run astro check

# Clear cache
rm -rf node_modules/.vite .astro
npm install
```

### Dark mode issues
See previous fixes for Tailwind v4 dark mode configuration using `@custom-variant`.

## Resources

- **Skills Documentation:** `/Users/dipukumari/Documents/akpandeya/claude-tdd-skills/`
- **Astro Docs:** https://docs.astro.build
- **Vitest Docs:** https://vitest.dev
- **Tailwind v4:** https://tailwindcss.com

## Notes

- This project uses Tailwind v4 with CSS-first configuration
- Dark mode uses `@custom-variant dark (&:where(.dark, .dark *))`
- All changes trigger CI pipeline
- Only passing builds deploy to production
