import { createContext, useEffect, useRef, useState } from 'react'
import { songsData } from '../assets/assets'

// eslint-disable-next-line
export const PlayerContext = createContext()

const PlayerContextProvider = (props) => {
  const audioRef = useRef()
  const seekBar = useRef()
  const seekBg = useRef()

  const [track, setTrack] = useState(songsData[0])
  const [playStatus, setPlayStatus] = useState(false)
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0
    },
    totalTime: {
      second: 0,
      minute: 0
    }
  })

  const play = () => {
    audioRef.current.play()
    setPlayStatus(true)
  }

  const pause = () => {
    audioRef.current.pause()
    setPlayStatus(false)
  }

  const playWithId = async (id) => {
    await setTrack(songsData[id])
    await audioRef.current.play()
    setPlayStatus(true)
  }

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width = Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100) + '%'
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60)
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60)
          }
        })
      }
    }, 1000)
  }, [audioRef])

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId
  }

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider
