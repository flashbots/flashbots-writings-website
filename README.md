# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.


### Installation

If you want to install the node packages from within a Docker container (recommended for security), then you can start it like this:

```
docker run -p 3000:3000 --rm -it -w /mnt -v $(pwd):/mnt node:16 /bin/bash
```

Install the dependencies:

```
$ yarn
```

### Local Development

Build the source:

```
$ source .env.dev
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server. You can view it now at:

http://localhost:3000

### Deployment

Changed to the `main` branch are automatically deployed by CI.

### Steps to publish a new post

1. clone the repository https://github.com/flashbots/flashbots-writings-website and switch to a new branch
2. copy one of the files in `/writings/` with the date and your title (for instance, [start with this post](https://raw.githubusercontent.com/flashbots/flashbots-writings-website/main/writings/2022-06-07-why-run-mevboost.mdx))
3. edit the content on the header. for SEO and previews/sharing, it is recommended to add an image. You can get free images from [https://unsplash.com](unsplash.com) and other pages, but also consider generating an image with [Dall-E](https://labs.openai.com/) and [Stable Diffusion](https://beta.dreamstudio.ai/dream). Try to make the image less than 200kb.
4. edit the content of the post. To preview, install the dependencies as described above and run `yarn start`
5. once satisfied, create a PR. once merged CI auto deploys it (edited)