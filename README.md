<img src="https://angular.io/assets/images/logos/angular/angular.svg" width="256">

Table of contents
=================

**[Demo applications](#demo-applications)**<br>
**[Screenshots](#screenshots)**<br>
**[CLI commands](#cli-commands)**<br>
**[Software](#software)**<br>

Demo applications
=================

**[Edit Brewery (deployed on GitHub)](https://crainch.github.io/Angular/angular-playground/)**<br>
**[Breweries (deployed on GitHub)](https://crainch.github.io/Angular/angular-playground/list/)**<br>

Screenshots
===========

**Desktop version**<br>
<img src="https://github.com/CrainCH/Angular/blob/master/angular-playground/screenshots/HomeComponent.png">

**Mobile version**<br>
<img src="https://github.com/CrainCH/Angular/blob/master/angular-playground/screenshots/HomeComponentMobile.png" width="512">

**Desktop version**<br>
<img src="https://github.com/CrainCH/Angular/blob/master/angular-playground/screenshots/ListComponent.png">

**Mobile version**<br>
<img src="https://github.com/CrainCH/Angular/blob/master/angular-playground/screenshots/ListComponentMobile.png" width="512">

CLI commands
============

#### Start Visual Studio Code
```
cd PATH
code .
```

#### Start server
```
ng serve -o
```

#### Deploy to GitHub

Install ghpages dependency
```
npm i -g angular-cli-ghpages
```

Deploy to GitHub<br>
**Warning: fix repository and project name**
```
ng build --prod --base-href https://CrainCH.github.io/Angular/angular-playground
ngh --dir dist/angular-playground
```

Software
========

* [Git](https://git-scm.com/download/)
* [Git Extensions](https://sourceforge.net/projects/gitextensions/)
* [Helix Visual Merge Tool](https://www.perforce.com/downloads/visual-merge-tool)
* [Visual Studio Code](https://code.visualstudio.com/Download)
* [Node.js](https://nodejs.org/en/)
