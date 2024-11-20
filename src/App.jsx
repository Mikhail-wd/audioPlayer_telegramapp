import { useState } from 'react'
import Player from "./components/player/playerMainFrame"
import audio1 from "./audio/stylish-deep-electronic.mp3"
import audio2 from "./audio/y2mate.com - Refuse to Lose.mp3"
import audio3 from "./audio/y2mate.com - Wice  Planet City.mp3"
import './App.css'


const testPlayList = [
  {
    src: audio1,
    name: "Noname",
    title: "Stylish deep electronic"
  },
  {
    src: audio2,
    name: "Zombie Overdrive",
    title: "Refuse to lose"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City"
  }
]


function App() {
  return (
    <>
      <div className='regular-block'>
        <h1>Player</h1>
        <Player playlist={testPlayList} />
      </div>
    </>
  )
}

export default App
