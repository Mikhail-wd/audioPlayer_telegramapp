import "./playerMainFrame.css"
import { useLayoutEffect, useEffect, useState, useRef } from "react"
import VinilDisk from '../../img/Vinil.png'
import Stick from "../../img/stick-alter.png"
import BackPlate from "../../img/backplate.png"
import BTNback from "../../img/buttonBG.png"
import Backward from "../../img/backward.png"
import List from "../../img/list.png"
import Stop from "../../img/stop.png"
import Play from "../../img/Play.png"
import Forward from "../../img/forward.png"
import Sound from "../../img/sound.png"
import gsap from 'gsap'
import RedArch from "../../img/red-arch.svg"
import BlackArch from "../../img/black-arch.svg"
import { useGSAP } from '@gsap/react';
import { Draggable } from "gsap-trial/all";
import audio from "../../audio/stylish-deep-electronic.mp3"

gsap.registerPlugin(Draggable)

export default function Player({ playlist = [] }) {
  const settedVolume = useRef();
  settedVolume.current = 0.5
  const [compState, setCompState] = useState({
    playing: false,
    data: playlist,
    activeTrack: 0
  })
  const [startDuration, setStartDuration] = useState(0)
  const [totalDuration, setDuration] = useState(0)
  const [startVolume, setVolume] = useState(prev => prev === undefined ? 0.5 : prev)
  const [startRotate, setRotate] = useState(0)
  const container = useRef();
  const tlVinil = useRef();
  const tlStick = useRef();
  const tlVolume = useRef()
  const audioPlayer = useRef()

  function totalTime(value) {
    let hours = Math.floor((value % (60 * 60 * 24)) / (60 * 60)) < 10 ? "0" + Math.floor((value % (60 * 60 * 24)) / (60 * 60)) : Math.floor((value % (60 * 60 * 24)) / (60 * 60))
    let minutes = Math.floor((value % (60 * 60)) / (60)) < 10 ? "0" + Math.floor((value % (60 * 60)) / (60)) : Math.floor((value % (60 * 60)) / (60));
    let seconds = Math.floor((value % (60))) < 10 ? "0" + Math.floor((value % (60))) : Math.floor((value % (60)))
    if (hours <= 0) {
      return minutes + ":" + seconds
    } else if (hours <= 0 && minutes <= 0) {
      return "00:" + seconds
    } else if (isNaN(value)) {
      return "00:00"
    } else {
      return hours + ":" + minutes + ":" + seconds
    }
  }
  function nextTrack() {
    setStartDuration(0)
    // gsap.to(".arch-red", { rotate: 90 })
    // setVolume(settedVolume.current)
    if (compState.activeTrack === compState.data.length - 1) {
      setCompState({ ...compState, activeTrack: 0 })
    } else {
      setCompState({ ...compState, activeTrack: compState.activeTrack + 1 })
    }
  }
  function prevTrack() {
    setStartDuration(0)
    // setVolume(settedVolume.current)
    if (compState.activeTrack === 0) {
      setCompState({ ...compState, activeTrack: compState.data.length - 1 })
    } else {
      setCompState({ ...compState, activeTrack: compState.activeTrack - 1 })
    }
  }
  function endedTrack() {
    setCompState({ ...compState, playing: false })
    setStartDuration(audioPlayer.current.duration)
  }

  function TogglePlay() {
    if (startDuration >= totalDuration) {
      setStartDuration(0)
    } else if (startDuration <= totalDuration) {
      setStartDuration(audioPlayer.current.currentTime)
    }
    setCompState({ ...compState, playing: !compState.playing })
  }

  function updateRotation(value, event) {
    audioPlayer.current.volume = 1 - (Math.ceil(gsap.getProperty(value, "rotation")) / 175)
    setVolume(1 - (Math.ceil(gsap.getProperty(value, "rotation")) / 178))
  }
  useEffect(() => {
    tlVinil.current = gsap.timeline({ paused: true })
    tlStick.current = gsap.timeline({ paused: true })
    tlVolume.current = gsap.timeline({ paused: true })
    tlVinil.current.to(".vinil-disk", { rotation: 360, ease: "none", duration: 10, repeatDelay: 0, repeat: -1 })
    tlStick.current.to(".stick", { rotation: -50, duration: 1, ease: "elastic" })

    Draggable.create(".arch-red", {
      type: "rotation",
      bounds: { maxX: 14.5, minX: 175 },
      onDrag: (e) => {
        updateRotation(".arch-red", e)
        tlVolume.current.to(".sound", {
          rotation: gsap.utils.clamp(11.5, 175, Math.ceil(gsap.getProperty(".arch-red", "rotation")))
        })
      }
    })
  }, [])

  useEffect(() => {
    const playerTimer = setInterval(() => {
      setStartDuration(prev => prev + 1)
    }, 1000)

    if (compState.playing) {
      audioPlayer.current.play()
      tlVinil.current.play().then(tlStick.current.play())
      playerTimer
    } else {
      audioPlayer.current.pause()
      tlVinil.current.pause().then(tlStick.current.reverse())
      clearInterval(playerTimer)
    }
    return () => clearInterval(playerTimer)
  }, [compState])

  useEffect(() => {
    audioPlayer.current.volume = startVolume
    setDuration(audioPlayer.current.duration)
  }, [audioPlayer.current?.duration])
  return (
    <>
      <div className="player" ref={container}>
        <div class="left-col-vinil">
          <div className="backborder-disk">
            <img src={VinilDisk} alt="audio" className="vinil-disk" />
          </div>
          <img src={Stick} alt="audio" className="stick" />
          <img src={BackPlate} alt="audio" className="backplate" />
        </div>
        <audio
          className="audio-player"
          ref={audioPlayer}
          src={compState.data.length > 0 ? compState.data[compState.activeTrack].src : null}
          preload="auto"
          volume
          onEnded={() => endedTrack()}
        ></audio>
        <div class="right-col-controll" >
          <h1>{compState.data[compState.activeTrack].name} / {compState.data[compState.activeTrack].title}</h1>
          <div className="controll-button">
            <div className="controll-back">
              <div style={{ backgroundImage: `url(${BTNback})` }} className="buttonBG" onClick={() => prevTrack()}>
                <div style={{ backgroundImage: `url(${Backward})` }} className="button-backward"></div>
              </div>
            </div>
            <div className="controll-playorpayse">
              <div style={{ backgroundImage: `url(${BTNback})` }} className="buttonBG" onClick={() => TogglePlay()}>
                {compState.playing ?
                  <>
                    <div style={{ backgroundImage: `url(${Play})` }} className="button-play" ></div>
                  </>
                  :
                  <>
                    <div style={{ backgroundImage: `url(${Stop})` }} className="button-stop "></div>
                  </>
                }
              </div>
            </div>
            <div className="controll-forward">
              <div style={{ backgroundImage: `url(${BTNback})` }} className="buttonBG" onClick={() => nextTrack()}>
                <div style={{ backgroundImage: `url(${Forward})` }} className="button-forward"></div>
              </div>
            </div>
            <div className="controll-playlist">
              <div style={{ backgroundImage: `url(${BTNback})` }} className="buttonBG">
                <div style={{ backgroundImage: `url(${List})` }} className="button-list"></div>
              </div>
            </div>
          </div>
          <div className="duration">
            {audioPlayer.current?.duration !== 0 || audioPlayer.current?.duration !== NaN ?
              <p>Duration {totalTime(startDuration)} / {totalTime(totalDuration)}</p> :
              <p>Duration : 00:00 / 00:00</p>
            }
          </div>
        </div>
        <div className="audio-controll">
          <div className="arch-red">
            <img src={RedArch} alt="arch" draggable={"none"} />
            <div className="sound">
            </div>
            {/* <img src={Sound} alt="img" className="sound" /> */}
          </div>
          <img src={BlackArch} alt="arch" draggable={"none"} className="arch-black" />
        </div>
      </div>
    </>
  )
}
