const React = require("react")
const App = require("./src/components/app").default

exports.wrapPageElement = ({ element }) => {
  return <App>{element}</App>
}