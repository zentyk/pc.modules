# pc.examples
pc.examples is a repo with examples for playcanvas projects.
 

# Playcanvas-Online Engine
The code inside `/src` is an ES6 module example to be uploaded to a
playcanvas online project.

run the `build` command, this will save an output file at `/dist`
folder.

1. Upload the file to your playcanvas project.
2. Disable the `preload` checkbox.
3. Follow the code at: [this project](https://playcanvas.com/project/798379)
4. Import the module as indicates `load_module.js` this script will expose
the module to a global `jsmod` variable. Doesn't matter if you use this inside
a playcanvas script component or without it as `module_use.js` indicates.

# Playcanvas Offline Modules
The code inside ```/dist/offline``` is an ES6 module example inside a
playcanvas engine-only project. It's the same process as loading a ES6 module
in a web project.

# Build and Test
* run ```npm i``` to install esbuild
* run ```npm run build-dev``` to export the module with a map.js debug file
* run ```npm run build-prod``` to export a minified module.

output files are saved to `/dist`