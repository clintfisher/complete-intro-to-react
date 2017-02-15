var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
    render: function () {
        return(
            div(null,
                h1({style: {color: this.props.color, fontWeight: '500'} }, this.props.title)
            )
        )
    }
});

/*
    make a factory method that is the same as the div method
    the div method is a convenience, helper method, instead of having
    to do React.createElement('div')
    this makes a factory method for whatever components you've created.
    so we've passed it the MyTitle component and it gives us back a
    factory method so we can call it, its a convenience method.
    - left initial React.createElement(MyTitle) in as how we did it first pass
*/
var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
    render() {
        return(
            div(null,
                MyTitleFactory({title: 'props are the best', color: 'tomato'}),
                MyTitleFactory({title: 'semicolons are the worst', color: 'peru'}),
                MyTitleFactory({title: 'jklol its ok if you like semicolons', color: 'mediumaquamarine'}),
                MyTitleFactory({title: 'im out of ideas', color: 'blanchedalmond'})
            )
        )
    }
});

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))