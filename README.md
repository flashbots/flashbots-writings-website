# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.


### Installation

If you want to install the node packages from within a Docker container, then you can start it like this:
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

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
