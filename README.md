# Adding Elctron to Angular

Step 1:
In index.html change the base ref from "/" to "./" in front
<base href="./">

Step 2:
Install electron in developement environment
npm install electron --save-dev

Step 3:
add main.js in the root directory for backend logic of electron

Step 4:
Create custom command in package.json to compile application with AOT and run electron

1. "main": "main.js"
2. "scripts": {
    "electron" : "electron .",
    "electron-build": "ng build --prod",
    "electron-build-mac": "electron-packager . --platform=darwin",
    "electron-build-windows": "electron-packager . --platform=win32"
}

Step 5:
Build and start electron
npm run electron-build

# Package application for installation

Step 1:
Install elecron-packager
npm install electron-packager --save-dev
npm install electron-packager -g

Step 2:
For windows package
npm run electron-build-windows

For Mac package
npm run electron-build-mac
