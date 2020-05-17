import React from 'react'

export default class GifSearch extends React.Component {
  state = {
    search: ""
  }

  handleChange = event => {
    this.setState({
      search: event.target.value
    })
  } 

  render() {
    return (
      <form onSubmit={event => this.props.handleSubmit(event, this.state.search)}>
        <input onChange={this.handleChange} type="text" value={this.state.search}></input>
        <input type="submit"></input>
      </form>
    )
  }
}

// The <GifSearch /> component will render a form that receives the user input for the giphy search. The text input should be a controlled component that stores the value of the input in its component state and renders the DOM accordingly. The React component is always in charge of what the DOM looks like.

// <GifSearch /> should receive a callback prop from its parent. On a submit event, it should invoke that callback prop with the value of the text input. It is this callback function, defined in <GifListContainer />, that will actually query the API with the text the user has entered.

// When finished, submit your work using learn submit.
