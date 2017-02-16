import React from 'react'

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({

  propTypes: {
    title: React.PropTypes.string,
    color: React.PropTypes.string
  },

  render () {
    return (
      div(null, h1({style: {color: this.props.color, fontWeight: '500'}}, this.props.title))
    )
  }
})

export default MyTitle
