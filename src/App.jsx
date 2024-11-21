import { useEffect, useState, useLayoutEffect } from 'react'
import Player from "./components/player/playerMainFrame"
import PlayList from "./components/playList/playList"
import audio1 from "./audio/stylish-deep-electronic.mp3"
import audio2 from "./audio/y2mate.com - Refuse to Lose.mp3"
import audio3 from "./audio/y2mate.com - Wice  Planet City.mp3"
import VintageVinil from "./img/VintageVinil.jpg"
import Waves from "./img/BHFO.gif"
import gsap from 'gsap'
import './App.css'

const testPlayList = [
  {
    src: audio1,
    name: "Noname",
    title: "Stylish deep electronic",
    totalTime: "01:36"
  },
  {
    src: audio2,
    name: "Zombie Overdrive",
    title: "Refuse to lose",
    totalTime: "02:39"
  },
  {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }
  , {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City but for testing reasons",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }, {
    src: audio3,
    name: "Vice",
    title: "Planet City",
    totalTime: "04:56"
  }
]
function App() {
  const [togglePlayList, setTogglePlaylist] = useState(false)
  const [activeTrack, setActiveTrack] = useState(0)
  const [isPlaying, setPlaying] = useState(false)
  function selectTrack(value) {
    setActiveTrack(value)
  }
  function togglePL() {
    setTogglePlaylist(!togglePlayList)
  }
  useLayoutEffect(() => {
    if (isPlaying) {
      gsap.to(".vintageBGWaves", { opacity: 1, duration: 4 })
    } else {
      gsap.to(".vintageBGWaves", { opacity: 0, duration: 1 })
    }
  }, [isPlaying])
  return (
    < div className='vintageBG' style={{ backgroundImage: `url(${VintageVinil})` }}>
      <div className='vintageBGWaves' style={{ backgroundImage: `url(${Waves})` }}>
      </div>
      <div className='footer-player'>
        <PlayList togglePL={togglePlayList} playlist={testPlayList} setActiveTrack={selectTrack} selectedTrack={activeTrack} />
        <Player playlist={testPlayList} togglePL={togglePL} setActiveTrack={selectTrack} selectedTrack={activeTrack} trackPlaying={setPlaying} />
      </div>
    </div>
  )
}

export default App
