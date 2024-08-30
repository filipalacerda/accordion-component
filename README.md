# Accordion component

## Requirements:

Create a reusable Accordion component that abstracts common elements and features from the provided list of example accordions. Focus on creating a component that is consistent, simple, and clean following best UX/UI practices.

1. Implement the component without relying on libraries like Tailwind or Material-UI for styling. Use basic CSS, CSS Modules, or styled-components.
1. The Accordion should be responsive and work across different browser sizes.
1. The Accordion must meet WCAG accessibility guidelines
1. Provide any workings, such as sketches, flowcharts, or notes, that you created to
   help with the abstraction process.

## Acessibility

1. The component has `aria` attributes that comply with a11y practices
2. The component has keyDown support for arrow keys and enter key
3. The component does not have heading levels. This is because it's meant to be used anywhere in a page, and bad nesting heading levels throw an a11y error

## Responsive Design

1. The component works on both Desktop and Mobile by using `flex`
2. The only difference between Desktop and Mobile is the alignment of the title text

## Commands

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
