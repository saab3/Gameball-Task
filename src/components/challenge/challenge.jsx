import React from 'react'
import "./styles.modules.css"
import Diamond from "../../assets/svg/Diamond.svg"
import star from "../../assets/svg/star.svg"
import flag from "../../assets/svg/flag.svg"
import bookmark from "../../assets/svg/bookmark.svg"


function Challenge({
  active:active,
  title:title,
  date:date,
  time:time,
  image:image,
  description:description,
  diamonds:diamonds,
  stars:stars,
  milestones:milestones,
  tag:tag
}) {
  console.log(title)
  return (
    <div className='challenge'>
        <div className="activity">
          <p style={{color:`${active?"#3DDC97":"#A9ABB2"}`}}>{active? "ACTIVE":"INACTIVE"}</p>
          <span className="dot" style={{backgroundColor:active? "#3DDC97": "#A9ABB2" , boxShadow: active? "0px 3px 6px rgba(61, 220, 151, 0.5)":"none"}}></span>
        </div>
        <div className="challenge-body">
          <div className="head">
            <img src={image} alt="Challenge Image" width={"44px"} />
            <div className="info">
              <p className='challenge-title'>{title}</p>
              <p className='challenge-datetime'>{date} at {time}</p>
            </div>
          </div>
          <div className="description">
            <p>
              {description}
            </p>
          </div>
          <div className="row">
            <div className="powerup">
              <img src={Diamond} />
              <p>{diamonds} Frubies</p>
            </div>
            <div className="powerup">
              <img src={star} />
              <p>{stars} Points</p>
            </div>
          </div>
          <div className="row">
            <div className="powerup">
              <img src={flag} />
              <p>{milestones} Milestones</p>
            </div>
            <div className="powerup">
              <img src={bookmark} style={{width:"14px",marginLeft:"6px"}} />
              <p>{tag} The Big Thing</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Challenge