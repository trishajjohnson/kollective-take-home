# Getting Started with Create React App and Redux

## Summary

I got the opportunity to explore Redux toolkit, so I built this project with Create React App and Redux Toolkit. To start, once you've pulled the code down to your computer, run `npm install` to install dependencies, and then `npm start` to run app.  Browser should automatically open, running on http://localhost:3000.

## Features

Following the project guidelines, I created 3 routes: the homepage, catch a pokemon page and pokemon detail page. On the homepage, you'll find a list of all caught pokemon, stored in Redux state using redux toolkit and saved in localStorage. I provided a function to clear all pokemon from state and localStorage as well. When the 'Set Em Free' button is clicked, a modal will pop up asking the user if they'd like to confirm. They may confirm or cancel. Clicking on the individual pokemon cards will take you to the pokemon detail page, where you can see a card displaying the pokemon's given name (by user) and its statistics. On this page, there is also a feature to remove it from state and localStorage. If removed, user will be redirected to the homepage. 

The homepage also has a button to navigate the user to the catch a pokemon page. There, a random selection of 12 pokemon from the Pokeapi will be fetched and displayed on the page. By clicking on the '+' at the top right of each card corner, a user may select the card. Once selected, the card will display its types and abilities as well as a 'catch' button. If the 'catch' button is clicked, an input and 'save' button displays, giving the user the ability to custom name and save the pokemon to their caught pokemon. If a user wishes to cancel this action and deselect the card, they need only click the 'x' at the top right corner of the card and the card contents will change back to its image and species.

I did not use any CSS frameworks like bootstrap or MUI. I simply used basic CSS stylings. I did explore flexbox and added basic media queries for mobile responsiveness. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
