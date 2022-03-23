# wp-block-directory-template

Template to use with [`@wordpress/create-block`](https://www.npmjs.com/package/@wordpress/create-block) for scaffolding WordPress plugin optimized for usage with [Block Directory](https://wordpress.org/plugins/browse/block/). This is a **customized** version of the block template presented in the official [WordPress Tutorial](https://developer.wordpress.org/block-editor/handbook/tutorials/create-block/) for the block editor.

## Usage

This block template can be used by running the following command:

```bash
npx @wordpress/create-block --template wp-block-directory-template
```

## Using with Buddy

After creating a new project based on this template you'll get access to pipelines below:

- **Build and Release** - it's responsible for testing, building and creating a zip file
- **Lint** - it will constantly test your code