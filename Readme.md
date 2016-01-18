# manage-this-node

NodeJS version of [Muximux](https://github.com/mescon/Muximux/) and [Managethis](https://github.com/Tenzinn3/Managethis)

Getting Started
---------------

## Prerequisites
- [Node.js](http://nodejs.org) v4.2.x
- [Git](https://git-scm.com/downloads) (optional)

## Installation

```bash
# Clone the repository or download the ZIP and extract it
git clone https://github.com/onedr0p/manage-this-node
```

```bash
# Install dependencies
cd manage-this-node
npm install
```

## Configuration

```bash
# Copy config.json.template to config.json
cp config.json.template config.json
```

In `config.json` fill in the `port` you want to use if you don't want to use port `3000`.

Everything else can be handled when the app is running via the settings menu.

**Important note**: Restart the app after making any changes to the `config.json` file.

## Start the app

```bash
# Start the app
npm start
```

Open `localhost:3000` in your browser to see the app.

## Running forever
To have the app run forever in the background

```bash
# Install forever
npm install forever -g

# Run
forever start ./bin/www

# Stop
forever stop ./bin/www
```

Goto `localhost:3000` to see the app.

App Specific Workarounds
---------------
**Emby**  
By Default Emby sends a header that prevents loading in an iframe.   

Windows: 
* Edit `C:\Users\<username>\AppData\Roaming\MediaBrowser-Server\config\system.xml`  
* Look for `<DenyIFrameEmbedding>true</DenyIFrameEmbedding>` replace `true` with `false`  
* Should look like `<DenyIFrameEmbedding>false</DenyIFrameEmbedding>`  
* Save the file and restart Emby  

## Differences from [Muximux](https://github.com/mescon/Muximux/) and [Managethis](https://github.com/Tenzinn3/Managethis)
- Written in NodeJS, which comes with it's own webserver.
- In App configuration

## Known Issues
- Problem: Nothing is displaying, Solution: Disable Adblock/uBlock and Ghostery/Privacy Badger for the website.
