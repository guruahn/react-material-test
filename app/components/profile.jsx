let React = require('react');
let injectTapEventPlugin = require('react-tap-event-plugin');
  
  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

let mui = require('material-ui');
let Avatar = mui.Avatar;
let FontIcon = mui.FontIcon;
let Profile = React.createClass({

    render: function(){
        let profileBoxStyle = {
          padding: '10px',
          backgroundColor: '#00bcd4'
        };
        return(
            <div style={profileBoxStyle}>
            <Avatar src="/thumbnail.jpg"/> 
            </div>
        ); 
        
    }
    
});


module.exports = Profile;