(function () {
  let React = require('react/addons');
  let injectTapEventPlugin = require('react-tap-event-plugin');
  let Main = require('./components/main.jsx'); // Our custom react component
  let Day = require('./components/day.jsx');
  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  // Render the main app react component into the document body.
  // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
  React.render(<Main />, document.body);
  React.render(<Day url="http://localhost:3000/day.json" />, document.getElementById('content'));
})();
