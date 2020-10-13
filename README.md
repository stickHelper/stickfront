# STICKFRONT

> This repository is monorepo for create library using lerna

## Used folder structure
---

```bash
.
├── packages
│   ├── ...
├── lerna.json
├── package.json
└── README.md

```

## How to use
---
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
---
```bash
# 1. Move to root directory
$ yarn build
$ lerna publish
```

> **Note**:
> 1. Before publish please login to npm on your terminal, check your npm account with  *`npm whoami`* 
> 2. Please read documentation lerna if your confused.

## Team Reminder
- Think about what you actually want (and why you want it)
- We all have something to teach. We all have something to learn
- Try not to leave work angry. Work it out if you can
- Take care of yourself! Eat well. Stay home when you’re sick. Pace yourself
- Whenever possible, show don’t tell. Specificity beats platitudes
- Respect each other’s time, and respect each other’s energy
- If we’re not proud of our work, something is wrong. Speak up!
- Discipline, responsibility, and accountability are part of the craft. Make sure these words don’t get abused and polluted
- Before thinking "more process" check for trust
- Laugh and have fun. We’re making stuff! How cool is that?
- HAPPY CODING !