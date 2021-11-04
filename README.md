# ts-lib-starter-kit

Example of library/package based on Typescript.

## How does it works?

All files from `src` folder are imported into the root `index.ts`. When you runs `build` script Babel will transpile your code using `babel.config` and tsc will generate `.d.ts` types. All this will be moved to the `dist` folder. Now you can publish your library.

## How to use it?

1. Add your files to the `src` folder.
2. Run `build` script from package.json or via command line with your package manager:
npm run build
yarn build
pnpm build

Inspect compiled types declarations in the dist folder.

## How to publish to the registry?

I added files for npm registry. You can safely delete it or replace.

1) Login:

```bash
npm login
```

2) Publish:

```bash
npm publish --access public
```

_NOTE:_ Sometimes you need to provide login token or something similar. Remember to delete it from your project.

## Scripts

Build
```bash
npm run build
```

Test
```bash
npm test
```
or using watch mode
```bash
npm run test:watch
```

Collect coverage
```bash
npm run test:cov
```

Lint
```bash
npm run lint
```

Format
```bash
npm run format
```





