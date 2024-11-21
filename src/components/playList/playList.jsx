import { useRef, useState, useEffect, useLayoutEffect } from "react"
import gsap from "gsap"
import { Draggable } from "gsap-trial/all";
import "./playList.css"

gsap.registerPlugin(Draggable)

export default function PlayList({ togglePL, playlist = [], setActiveTrack, selectedTrack }) {

    const playListElem = useRef()

    useLayoutEffect(() => {
        if (togglePL) {
            gsap.to(playListElem.current, {
                height: "calc(100dvh - 100px)",
            })
            gsap.to(".innerList", {
                opacity: 1,
                delay: 0.4
            })
            gsap.to(".innerList-rightScroller", {
                opacity: 1,
                delay: 0.5
            })
        } else {
            gsap.to(".innerList-rightScroller", {
                opacity: 0
            })
            gsap.to(".innerList", {
                opacity: 0,
                delay: 0.5
            })
            gsap.to(playListElem.current, {
                delay: 0.5,
                height: 0
            })
        }

    })
    useLayoutEffect(() => {
        Draggable.create(".slider-block", {
            type: "y",
            bounds: ".innerList",
            onDrag: (e) => {
                let realList = gsap.getProperty(".innerListSlide", "height")
                let visiblList = gsap.getProperty(".innerList", "height")
                let pixel = realList / visiblList
                let positionY = (gsap.getProperty(".slider-block", "y"))
                gsap.to(".innerListSlide", { y: (pixel * positionY) * -1 })
            }
        })
    }, [])
    return (
        <div className="playList" ref={playListElem}>
            <div className="innerList">
                <div className="innerListSlide">
                    {playlist.length > 0 ? playlist.map((element, index) => {
                        return <p key={index} onClick={() => setActiveTrack(index)}
                            className={selectedTrack === index ? "playlist-element active" : "playlist-element"} ><span className="hideMahName">{index + 1}. {element.name} / {element.title} </span><span>{element?.totalTime}</span></p>
                    }) : null}
                </div>
            </div>
            <div className="innerList-rightScroller">
                <div className="slider-block">
                </div>
            </div>
        </div>
    )
}