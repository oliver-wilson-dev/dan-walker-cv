# Dan Walker's Personal Website

A portfolio website for Dan Walker (add email here)

## Table of Contents

- [Documentation](#Documentation)
  - [Notion](#Notion)
  - [Further Reading](#Further-Reading)
- [Contributors](#Contributors)
- [Available Scripts](#available-scripts)
  - [npm run start](#npm-run-start)
  - [npm run test](#npm-run-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
  - [npm run analyze-bundle](#npm-run-analyze-bundle)
- [Project Development Setup](#project-development-setup)
   - [Code Splitting](#code-splitting)
   - [Advanced Configuration](#advanced-configuration)
   - [Deployment](#deployment)

## Documentation

### Notion

This project is managed via [this](https://www.notion.so/Dan-Walker-CV-Website-f7c8b17f640f40be90388baa05ce6617) notion page:

- [Project homepage](https://www.notion.so/Dan-Walker-CV-Website-f7c8b17f640f40be90388baa05ce6617)
- [Project board](https://www.notion.so/53e7b1f48eb344d7a241bb1bb5194ff4?v=a9706dcf9acd4328912eb1cc68b894d5)
- [Meeting Notes](https://www.notion.so/77614ea1af1b4e8f899b00e2ef5f0568?v=52ac780d24f9451ab41fb4f32e6faaa7)
- [Hosting information](https://www.notion.so/Hosting-84cdc4f6e6284c689517cc4de72e5c88)
- [Communication details](https://www.notion.so/Slack-ace9bb1a8db8487d9ee646166a05677d)

### Further Reading

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- [React documentation](https://reactjs.org/).

## Contributors

- **Dan Walker** (_insert@email.com_) - project manager
- **Oliver Wilson** (_contact@oliverwilson.dev_) - software engineer

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run analyze-bundle`

Runs `npm run build` and then uses [`source-map-explorer`](https://www.npmjs.com/package/source-map-explorer) to analyse the bundle produced.

## Project Development Setup

### Code Splitting

Instead of downloading the entire app before users can use it, code splitting allows you to split your code into small chunks which you can then load on demand.

This project setup supports code splitting via [dynamic `import()`](https://2ality.com/2017/01/import-operator.html#loading-code-on-demand). Its proposal is in stage 4. The `import()` function-like form takes the module name as an argument and returns a `Promise` which always resolves to the namespace object of the module.

Read more on this topic in the create-react-app documentation [here](https://facebook.github.io/create-react-app/docs/code-splitting)

### Advanced Configuration

Read more on this topic in the create-react-app documentation [here](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

Read more on this topic in the create-react-app documentation [here](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

Read more on this topic in the create-react-app documentation [here](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
