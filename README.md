# react-tic-tac-toe
A simple tic-tac-toe game built in React for the demonstration of learning. This tutorial is heavily inspired by the [Learn React Tutioral](https://react.dev/learn/tutorial-tic-tac-toe)

# Prerequisites
If you are building this tutorial, before you get started make sure you have Node.js installed. you can verify this by running
`npm --version` in your terminal.

Next, create a folder you want the repository to be in. In the folder run the folllowing command:
`npm init`

You will then be prompted with a list of specifications. The only two that we modify are\
`entry point: (index.js) /src/index.js`\
`test command: react-scripts test--env=jsdom`\
The rest you can modify according to your own specification and desires.

### Warning
For some reason, the "homepage" field in the package.json file can cause you problems later when running React. Make sure to delete this field if it is there.

### Installing React
After that, we need to install react in our node.js project. To do this, we simply need to run the three following commands:\
`npm install react`\
`npm install react-dom`\
`npm install react-scripts`

Once that is done, edit the package.json and add the following values such that the scripts object looks like this:
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "eject": "react-scripts eject",
  "test": "react-scripts test --env=jsdom"
},
```

Now you should be ready to start coding!