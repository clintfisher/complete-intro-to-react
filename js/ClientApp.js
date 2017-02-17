import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({

  render () {
    return (
      <div>
        <MyTitle title='props are the best' color='rebeccapurple' />
        <MyTitle title='semicolons are the worst' color='mediumaquamarine' />
        <MyTitle title='jklol its ok if you like semicolons' color='peru' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
