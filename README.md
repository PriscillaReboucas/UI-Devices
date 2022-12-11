# Ubiquiti | Devices - Frontend Project

## Goal
The objective of this project was to build a frontend application that will allow Ubiquiti employees to explore, find, look up and share information about all the Ubiquiti devices.
To create the project, I followed the design that was shared with the Ubiquiti standards.

## Tools
- Typescript
- React
- Tests: Jest and React testing library
- Netlify: deploy available https://ubiquiti-devices.netlify.app/

## Project
The application contains two pages:

- Home -> In this page You will find a list with products and each one of them has an image, product name and product line. You can search for a product name using the input and it is possible to filter by product line using the filter button. There are two icons available to change the view of the lists, by default it will start with the list view, but you can change to have the grid view. If you want to see specifications about one product, you can click in an image or product name/line.
- Device -> Here you can find the properties about an individual product.

## Challenges
- The products contain different properties, so during the construction of the Device page, I was extra careful with the code, to check each one of them.
- Take care about the small details provided by the Figma file. To help me with it, I decided to create the icons (grid and list view) and the Ubiquiti logo (the last one using the vector) using only css to apply the design specifications. 
- I learnt new approaches to change the elements, for example, the caret-color to change the text input cursor color. 
- Creating a filter with multiple selections with no select/option html tags. 
- Provide one list with the search and filter working at the same time.

## Future implementation
- It would be interesting to have one page to display the product lines available with an image and property name and they could be clickable to redirect the user to a page with the devices related with the product line.

## Available Scripts

To have access to the project, you need to clone and it is important to run the command `npm i`.
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
