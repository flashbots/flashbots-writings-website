# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.


### Installation

Install the node packages from within a Docker container (strongly recommended not only for security, but because installing all the packages manually is a huge waste of time), then you can start it like this:

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

1. Clone the repository https://github.com/flashbots/flashbots-writings-website and switch to a new branch
2. Copy one of the files in `/content/` with the date and your title (for instance, [start with this post](https://raw.githubusercontent.com/flashbots/flashbots-writings-website/main/content/2022-06-07-why-run-mevboost.mdx))
3. Edit the content on the header (also called 'front-matter').
4. Edit the content of the post.
5. Place the `<!--truncate-->` tag around after the first paragraph. All content before that tag will be visible on https://writings.flashbots.net
6. To preview, install the dependencies as described above and run `yarn start`
7. Make sure the meta tags and front-matter is in order, and that the post has a nice description and image:
  * For SEO and previews/sharing, it is recommended to add an image. You can get free images from [https://unsplash.com](unsplash.com) and other pages, but also consider generating an image with [Dall-E](https://labs.openai.com/) and [Stable Diffusion](https://beta.dreamstudio.ai/dream). Try to make the image less than 200kb.
  * Think about a good introduction paragraph, as it will be used in social previews. It will either use the first part of the post, or you can manually set it with the `description: ...` front matter.
7. Once satisfied, create a PR. once merged CI auto deploys it (edited)
8. Check the sharing meta tags using https://www.opengraph.xyz, and update the content meta tags as needed