import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({

  render () {
    return (
      div(null,
        MyTitleFactory({title: 'props are the best', color: 'tomato'}),
        MyTitleFactory({title: 'semicolons are the worst', color: 'peru'}),
        MyTitleFactory({title: 'jklol its ok if you like semicolons', color: 'mediumaquamarine'}),
        MyTitleFactory({title: 'im out of ideas', color: 'blanchedalmond'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
