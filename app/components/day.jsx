let React = require('react');
let mui = require('material-ui');
let Paper = mui.Paper;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let Day = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    _loadDayFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                //console.log(data);
                
                this.setState({data: data});
                
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },
    componentDidMount: function() {
        this._loadDayFromServer();
    },
    componentWillMount: function() {
        ThemeManager.setPalette({
            accent1Color: Colors.deepOrange500
        });
    },

    render: function() {
        
        return(
            <DayList data={this.state.data} />
        ); 
        
    }
    
});

let DayList = React.createClass({
    render: function(){
        let listStyle = {
            padding: '5%',
            width: '90%'
        };
        let dayNodes = this.props.data.map(function (day) {
            let dayStyle = { padding: '5%',marginBottom: '10px'}
            return (
                <Paper id={day.id} className="day" style={dayStyle}>
                    {day.text}
                </Paper>
            );
        });
        return(
            <div className="dayList" style={listStyle}>
                {dayNodes}
            </div>
        );
    }
});

module.exports = Day;