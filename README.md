# TDD-Counter

From [_React TDD in 30 Minutes_](https://www.youtube.com/watch?v=-bmdf1oATQo) - Sample counter application and tests built with Jest and Enzyme.

## Usage

-   `npm start`
-   `npm test`

## Technologies

-   [React](https://reactjs.org/docs/create-a-new-react-app.html)
-   [Jest](https://jestjs.io/)
-   [Enzyme](https://enzymejs.github.io/enzyme/)

### Known Issues:

-   Enzyme method `mount()` does not work Application is running React 17. The latest version of Enzyme (3.11.0, at the time of this README) is not compatible with React 17. https://github.com/enzymejs/enzyme/issues/2462
