# vue-storybook

## Publish components in your storybook

1. Set up your private npm proxy with [Verdaccio](https://verdaccio.org/)

2. Add your private npm proxy address to [modularize.js](#modularize.js)

```Javascript
const REGISTRY = 'https://xxx.xxx.xxx';
```

3. Switch to the directory of your component. E.g. src/components/cTable/

```bash
$npm publish cTable
```
