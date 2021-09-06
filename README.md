# writings-website

* I’d like to whip up a website for our written content and loved Paradigm’s simple website (https://paradigm.xyz) so asked them for the source code. Sadly it’s a Wordpress thingy they can’t easily share but offered to share the source code of https://research.paradigm.xyz/. Ideally I’d like to use the Paradigm website (the first link) and have something like this: https://www.figma.com/file/CcKdo1C3ohGCmgTyWOWzVN/flashbots-writings-website?node-id=0%3A1

* where I’d want to make sure
  * we have LaTex support (important for research posts)
  * it’s easy for people within the Flashbots team to add content to it to streamline the publishing process.

---
**Purpose:**
- better discoverability, aka be a second landing page aside from /pm to what flashbots is
- aggregation of written content that's currently in several places

**Want:**
- research posts (to port from HackMD)
- LaTex support
- a filter button for different tags

**Dont't Want**
- to repeat stuff that's in other places
- to add material that's in docs
- to overlap with material that's in GH

**Not Sure**
- videos of talks? ==> for now no, let's keep it minimal and add gradually
- epheph tutorials? ==> feels like it fits better under docs

**nice-to-have (in the future):**
- the website is hosted on IPFS/some decentralized storage platform, and generally as crypto native as possible in the services used


# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

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
