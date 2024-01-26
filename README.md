# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

The live version is hosted at https://writings.flashbots.net

### Getting started

It's recommended to install the Node.js packages from within a Docker container (installing npm packages can compromise your machine because it can execute arbitrary scripts). You can start the Docker container like this:

```
docker run -p 3000:3000 --rm -it -w /mnt -v $(pwd):/mnt node:16 /bin/bash
```

Install the dependencies:

```
$ yarn
```

Build the source:

First create a copy of `.env.dev` at the root of the project and name it `.env`
Linux: `cp .env.dev .env`
Windows: `copy .env.dev .env`

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server. You can view it now at:

http://localhost:3000

To serve a finally built version (i.e. to double-check the meta tags before publishing):

```
$ yarn build
$ yarn serve
```

### Deployment

Create a pull-request to the main branch. All changes to the `main` branch are automatically published via Vercel.

### Steps to publish a new post

1. Clone the repository https://github.com/flashbots/flashbots-writings-website and switch to a new branch
2. If the author has not published on Writings before, add their information in /content/authors.yml
3. Create a new .mdx-file under `/content/` and include the publishing date in the filename.
4. Copy the header rows from a previous posts (for instance, [this post](https://raw.githubusercontent.com/flashbots/flashbots-writings-website/main/content/2023-07-24-open-sourcing-flashbots-mev-share-node.mdx))
5. Edit the content on the header (also called 'front-matter').
6. Edit the content of the Writings-post. (If you are embedding Dune Dashboards, please follow the instructions [here](https://github.com/flashbots/flashbots-writings-website/pull/138).
7. Add a `<!--truncate-->` tag around after the first paragraph. All content before that tag will be visible as a preview on https://writings.flashbots.net
8. Create a new topic on the [forum](https://collective.flashbots.net/) with a summary of the post + CTA, open questions, and discussion topics to encourage conversations. Add the link in the "forum_link:"
9. To preview, install the dependencies as described above and run `yarn start`
10. Make sure the meta tags and front-matter is in order, and that the post has a nice description and image:
   * For SEO and previews/sharing, it is recommended to add an image. You can get free images from [https://unsplash.com](unsplash.com) and other pages, but also consider generating an image with [Dall-E](https://labs.openai.com/) and [Stable Diffusion](https://beta.dreamstudio.ai/dream).
   * The image should be 1200x630px and less than 400kb.
   * Run images through [ImageOptim](https://imageoptim.com/), as it can significantly decrease filesize, thus speeding up page load time.
   * Think about a good introduction paragraph, as it will be used in social previews. It will either use the first part of the post, or you can manually set it with the `description: ...` front matter.
11. Once satisfied, create a PR. Once the PR is merged, the [Github CI system](https://github.com/flashbots/flashbots-writings-website/actions) will automatically deploy it.
12. Check the sharing meta tags using https://www.opengraph.xyz, and update the content meta tags as needed.
