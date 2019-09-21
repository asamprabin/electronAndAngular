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




# ElectronAngularFaceAttendance

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
