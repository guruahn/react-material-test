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

let AppBar = mui.AppBar;
let TopBar = React.createClass({
    _onLeftIconButtonTouchTap: function(){
        this.props.onLeftIconButtonTouchTap();
    },
    _onRightIconButtonTouchTap: function() {
        this.props.onRightIconButtonTouchTap();
    },
    render: function(){
        
        return(
            <AppBar title="Some Day" iconClassNameRight="muidocs-icon-navigation-expand-more"  onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap} onRightIconButtonTouchTap={this._onRightIconButtonTouchTap} />
            
        ); 
        
    }
    
});


module.exports = TopBar;