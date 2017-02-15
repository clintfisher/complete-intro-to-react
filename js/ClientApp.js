var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
    render: function () {
        return(
            div(null,
                h1(null, 'check out this component!')
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
*/
var MyTitleFactory = React.createFactory(MyTitle)

// left initial React.createElement(MyTitle) in as how we did it first pass

var MyFirstComponent = React.createClass({
    render() {
        return(
            div(null,
                React.createElement(MyTitle),
                MyTitleFactory(null),
                MyTitleFactory(null),
                MyTitleFactory(null)
            )
        )
    }
});

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))