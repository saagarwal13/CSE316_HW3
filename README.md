This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

 
 //Querying all logos  

{
  logos 
  {
    _id
    text
    fontSize
    color
    backgroundColor
    borderWidth
    padding
    margin
    lastUpdate
    borderRadius  
  }
}

 //adding a logo

mutation AddLogo
        {
        addLogo(
            text: "HELLO",
            color: "#000000",
            fontSize: 12
        backgroundColor:"#FF0000" ,
            borderRadius: 12,
            borderWidth: 13,
            borderColor: "#FF0000",
            padding: 8,
            margin: 9) {
            _id
        }
    }

 //removing a logo

  mutation {
  removeLogo (id: "5e8dd394d97ff23c1801180b") {
    _id
  }
}

 //updating a logo

mutation {
  updateLogo (
    id: "5e8331b197c9ff377081ee7b",
    text: "My Dumb Company",
    color: "#ffeedd",
    fontSize: 32
    backgroundColor:"#FF0000" ,
            borderRadius: 12,
            borderWidth: 13,
            borderColor: "#FF0000",
            padding: 8,
            margin: 9
  ) {
    lastUpdate
  }
}
 

 //Querying a logo with a specific id 

{
  logo(id: "5e9480fc9c624a4bd4932146") 
  {
    _id
    text
    fontSize
    backgroundColor
    borderWidth
    borderColor
    borderRadius
    padding
    margin
    lastUpdate
  }
}