![Angular logo](https://fewclicks.io/wp-content/uploads/2017/08/tool-logo-angular.png)

Table of contents
=================

**[Demo applications](#demo-applications)**<br>
**[CLI commands](#cli-commands)**<br>
**[Software](#software)**<br>

Demo applications
=================

**[Angular Playground (deployed on GitHub)](https://crainch.github.io/Angular/angular-playground/list)**<br>

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
