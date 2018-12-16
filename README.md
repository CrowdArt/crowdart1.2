This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Creating a Reusable, Configurable Component
#### A component is a Function or Class that produces HTML to show the user (using JSX) and handles feedback from the user (using event handlers).
* Identify the JSX that appears to be duplicated.
* What is the purpose of that block of JSX? Think of a descriptive name of what it does.
* Create a new file to house this component - it should have the same name as the component.
* Create a new component in the new file, paste the JSX into it.
* Make the component configurable by using React's 'props' system.
### Functional Components
* Good for simple content.

### Class Components
* Good for all content

#### Geolocation API Component
* JS file loaded by browser
* App component gets created
* We call geolocation service
* App returns JSX, gets rendered to page as HTML
* We get result of geolocating
* Tell the component to rerender itself with this new information

#### Rules of Class Components
* Must be a Javascript class
* Must extend (subclass) React.Component
* Must define a 'render' method that returns some amount of JSX
## Deployment
* [Deployment - Create React App](https://facebook.github.io/create-react-app/docs/deployment#firebase-https-firebasegooglecom)

## Props
* Systems for passing data from a parent component to a child component.
* Goal is to customize or configure child component.
### Providing Props from Parent to Child
Structure:
* <CommentDetail author(Name of the prop) = "Sam"(value of the prop) />

#### Rules of State:
* Only usable with class components
* 'State' is a JS object that contains data relevant to a component
* Updating 'State' on a component causes the component to (almost) instantly rerender
* State must be initialized when a component is created.
* State can only be updated using the function 'setState'

## React-Router
* [React-Router](https://reacttraining.com/react-router/web/example/basic)

## State

## super()
* To make sure that the parents React.Components constructor function gets called we call super() 
* super() is a reference to parents constructor function

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## CSS
* [semantic-ui cdn](https://cdnjs.com/libraries/semantic-ui)
* [semantic-ui](https://semantic-ui.com/)

## Dialogflow
```javascript
<iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/50dac474-17b9-4ee4-a46f-603e671b87d0">
</iframe>
```

## Google Cloud
* [Quickstart for Node.js in the App Engine Standard Environment](https://cloud.google.com/appengine/docs/standard/nodejs/quickstart?authuser=1)
* [GCP Console](https://console.cloud.google.com/appengine?project=reactapp&authuser=1&organizationId=935263147482)

## Javascript
* [A re-introduction to JavaScript (JS tutorial)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

## MongoDB
* [MongoDB Manual](https://docs.mongodb.com/manual/reference/mongo-shell/)
