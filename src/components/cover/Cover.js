import React from 'react'
import './Cover.css'
import coverVideo from '../../media/coverVideo.mp4'

const Cover = () => {
  return (
    <div className='cover-Container'>
   
      <video className="video" src={coverVideo} autoPlay loop muted></video>

    </div>
  )
}

export default Cover