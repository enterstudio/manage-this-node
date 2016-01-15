# manage-this-node

NodeJS version of [Muximux](https://github.com/mescon/Muximux/) and [Managethis](https://github.com/Tenzinn3/Managethis)

Getting Started
---------------

## Prerequisites
- [Node.js](http://nodejs.org) v4.2.x
- [Git](https://git-scm.com/downloads) (optional)

## Installation

```bash
# Clone the repository
git clone https://github.com/onedr0p/manage-this-node
```

```bash
# Install dependencies
cd manage-this-node
npm install
```

```bash
# Copy config.json.template to config.json
cp config.json.template config.json
```

In `config.json` fill in the URL values for each service you want to use.
Change `default` to `true` for the one service you want to show when the page is loaded.

```bash
# Start the app
npm start
```
**Important note**: Restart the app after making any changes to the `config.json` file.

Goto `localhost:3000` to see the app.

Differences from [Muximux](https://github.com/mescon/Muximux/) and [Managethis](https://github.com/Tenzinn3/Managethis)
- NodeJS is used for a webserver
- Config doesn't have enabled or landing page options
  - Enabled is determined if the URL is filled out
  - Landing Page is left out becuase it seems to load fast enough with the 7 services I use.
