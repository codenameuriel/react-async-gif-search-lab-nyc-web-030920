import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component
const giphyEndpoint = "https://api.giphy.com/v1/gifs/search?q="

// We only want the path to the actual image, which found at images.original.url

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer gifEndpoint={giphyEndpoint} />
    </div>
  )
}

export default App
