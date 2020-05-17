import React from 'react'

export default class GifList extends React.Component {
  
  renderGifList = () => {
    // console.log(this.props.gifs)
    return this.props.gifs.map((gif, index) => <li key={index}><img src={gif.images.original.url} alt="dolphin gif" /></li>)
  }

  render() {
    return (
      <ul>
        {this.renderGifList()}
      </ul>
    )
  }
}

{/* <GifList />
<GifList /> is a presentational component. It receives data from its props and renders html given the input data. It can render a top level <ul> with each gif as an <li>.

<GifSearch /> */}
