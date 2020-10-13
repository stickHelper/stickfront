# STICKFRONT

> This repository is monorepo for create library using lerna

## Used folder structure

```bash
.
├── packages
│   ├── ...
├── lerna.json
├── package.json
└── README.md

```

## How to use
```bash
# clone repository
# with ssh
$ git clone git@github.com:stickHelper/stickfront.git
# or with https
$ git clone https://github.com/stickHelper/stickfront.git

# move to stickfront directory
$ cd stickfront

# you can create your package in packages directory.

```

### front-components
> This for frontend components who use VUE.js

```bash
.
├── packages
│   ├── front-component
│   │   ├── ...
│   │   ├── src
│   │   │   ├── components
│   │   │   ├── styles
│   │   │   │   └── components
│   │   │   ├── library-plugin.js
│   │   │   └── ...
│   │   └── ...
│   └── ...
└── ...

```

```bash
# 1. You can create component on components directory
# 2. and add styling on styles/components directory
# 3. and the you can import your component to library-plugin.js
```

## Publish
```bash
# 1. Move to root directory
$ yarn build
$ lerna publish
```
