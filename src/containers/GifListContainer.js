import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const apiKey = "&api_key=Tq5AS4LN9c8hEFTF7hYQP77Jhynu1cgX&rating=g"

export default class GifListContainer extends React.Component {
  state = {
    gifs: []
  }
  
  // componentDidMount() {
  //   fetch(this.props.gifEndpoint)
  //   .then(resp => resp.json())
  //   .then(data => this.setState(
  //     previousState => {
  //       return {
  //         gifs: previousState.gifs.concat(data.data.splice(0, 3))
  //       }
  //   }))
  // }

  // <GifSearch /> should receive a callback prop from its parent. On a submit event, it should invoke that callback prop with the value of the text input. It is this callback function, defined in <GifListContainer />, that will actually query the API with the text the user has entered.
  handleSubmit = (event, search) => {
    event.preventDefault()
    fetch(`${this.props.gifEndpoint}${search}${apiKey}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      gifs: data.data.splice(0, 3)
    }))
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}


// <GifListContainer /> should be a container that does data fetching and then renders its corresponding sub-component. 

// container components contain components known as presentational components - what is seen 

/* In our app, the <GifListContainer /> will be responsible for fetching the data from the giphy API, storing the first 3 gifs from the response in its component state, and passing that data down to its child, the <GifList> component, as a prop.

It will also render a <GifSearch /> component that renders the form. <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop. */
