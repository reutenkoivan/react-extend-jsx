### Setup
1. Install [Bun](https://bun.sh/)
2. Run `bun i`

### Structure
- `src/types` - Internal types
- `src/utils` - Internal utilities
- `src/<Component Name>` - Component root directory
- `src/<Component Name>/<Component Name>.stories.tsx` - Storybook stories. The only place where you can use component inside the repository

### Scripts

#### Build
```bash
bun app:build
```

#### Lint
```bash
bun lint
```

#### Format
```bash
bun format
```

#### Start Storybook
```bash
bun storybook
```

#### Build Storybook
```bash
bun storybook:build
```
