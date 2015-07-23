/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let mui = require('material-ui');
let TopBar = require('./top_bar.jsx');
let Profile = require('./profile.jsx');

let RaisedButton = mui.RaisedButton;
let Dialog = mui.Dialog;
let LeftNav = mui.LeftNav;
let MenuItem = mui.MenuItem;
let IconButton = mui.IconButton;
let FlatButton = mui.FlatButton;
let Paper = mui.Paper;
let TextField = mui.TextField;

let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let Main = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    componentWillMount() {
        ThemeManager.setPalette({
            accent1Color: Colors.deepOrange500
        });
    },

    render() {

        let containerStyle = {
          textAlign: 'center',
          paddingTop: '0',
          width: '750px',
          margin: '0 auto',
          backgroundColor: '#fff'
        };

        let standardActions = [
          { text: 'Okay' }
        ];

        return (
          <div style={containerStyle}>
            <Dialog
              title="Please record today"
              actions={standardActions}
              ref="superSecretPasswordDialog">
              <TextField floatingLabelText="Write down something in here." fullWidth={true} />
            </Dialog>
            <TopBar onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap} onRightIconButtonTouchTap={this._onRightIconButtonTouchTap}/>
            <div id="content"></div>
            <RaisedButton label="Super Secret Password" primary={true}  />
            
            
            <LeftNav ref="leftNav" docked={false} menuItems={menuItems} header={<Profile />} />

          </div>
        );

    },

    _onLeftIconButtonTouchTap(){
        this.refs.leftNav.toggle();
    },
    _onRightIconButtonTouchTap(){
      this.refs.superSecretPasswordDialog.show();  
    }

});


let menuItems = [

    { route: 'get-started', text: 'Get Started' },
    { route: 'customization', text: 'Customization' },
    { route: 'components', text: 'Components' },
    { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
    { 
        type: MenuItem.Types.LINK, 
        payload: 'https://github.com/callemall/material-ui', 
        text: 'GitHub' 
    },
    { 
        text: 'Disabled', 
        disabled: true 
    },
    { 
        type: MenuItem.Types.LINK, 
        payload: 'https://www.google.com', 
        text: 'Disabled Link', 
        disabled: true 
    }
];


module.exports = Main;
