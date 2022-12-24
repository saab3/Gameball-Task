import { useState,useEffect } from 'react'
import './App.css'
import logoImage from  './assets/logo-image.png'
import logoText from  './assets/logo-text.png'
import avatar from './assets/avatar-placeholder.png'
import downArrow from './assets/down-arrow.png'
import TabBar from './components/tab-bar/tab-bar'
import SearchBar from './components/search-bar/search-bar'
import add from '../src/assets/svg/add.svg'
import mushroom from '../src/assets/svg/mushroom.svg'
import Challenge from './components/challenge/challenge'
import {motion} from "framer-motion"

function App() {

  
  const challenges=[
    {active:true,
    title:"Click & Collect",
    date:"12/12/2018",
    time:"13:00",
    description:"It is a long established fact that a reader will be distracted by the readable eye",
    diamonds:5000,
    stars:2500,
    milestones:3,
    tag: true,
    image:mushroom
    },
    {active:true,
      title:"Click & Collect",
      date:"12/12/2018",
      time:"13:00",
      description:"It is a long established fact that a reader will be distracted by the readable eye",
      diamonds:5000,
      stars:2500,
      milestones:3,
      tag: true,
      image:mushroom
      },
      {active:true,
        title:"Click & Collect",
        date:"12/12/2018",
        time:"13:00",
        description:"It is a long established fact that a reader will be distracted by the readable eye",
        diamonds:5000,
        stars:2500,
        milestones:3,
        tag: true,
        image:mushroom
        },
        {active:true,
          title:"Click & Collect",
          date:"12/12/2018",
          time:"13:00",
          description:"It is a long established fact that a reader will be distracted by the readable eye",
          diamonds:5000,
          stars:2500,
          milestones:3,
          tag: true,
          image:mushroom
          },
        {active:true,
          title:"Click & Collect",
          date:"12/12/2018",
          time:"13:00",
          description:"It is a long established fact that a reader will be distracted by the readable eye",
          diamonds:5000,
          stars:2500,
          milestones:3,
          tag: true,
          image:mushroom
          },
        {active:false,
          title:"Click & Collect",
          date:"12/12/2018",
          time:"13:00",
          description:"It is a long established fact that a reader will be distracted by the readable eye",
          diamonds:5000,
          stars:2500,
          milestones:3,
          tag: true,
          image:mushroom
          },
  ]

  return (
    <div className="App"> 
      <div className="side-bar">
        <div className="logo">
          <img src={logoImage} alt="Gameball" className="logo-image" style={{width:"34px",height:"34px"}} />
          <img src={logoText}  alt="Gameball" className="logo-text" style={{width: "89.69px",height: "14.42px"}} />
        </div>
        {/* Navigation menu */}
        <ul>
          <li>
            <span className="selection-wedge"></span>
            <div className="element">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.248 22.776h3.505a.57.57 0 0 0 .584-.556.57.57 0 0 0-.584-.557h-3.505a.57.57 0 0 0-.585.557.57.57 0 0 0 .585.556Z" fill="#424242"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.583 15a.57.57 0 0 1-.583-.556.57.57 0 0 1 .583-.555.57.57 0 0 1 .584.555.57.57 0 0 1-.584.556ZM15 23.889c-2.862 0-5.51-1.23-7.276-3.333h14.552C20.51 22.66 17.862 23.889 15 23.889Zm-8.167-9.445a.57.57 0 0 1 .584-.555.57.57 0 0 1 .583.555.57.57 0 0 1-.583.556.57.57 0 0 1-.584-.556Zm2.334 3.334a.57.57 0 0 1-.584.555.57.57 0 0 1-.583-.555.57.57 0 0 1 .583-.556.57.57 0 0 1 .584.556Zm-.584-7.222a.57.57 0 0 1 .584.555.57.57 0 0 1-.584.556A.57.57 0 0 1 8 11.11a.57.57 0 0 1 .583-.555Zm2.334-2.223a.57.57 0 0 1 .583.556.57.57 0 0 1-.583.555.57.57 0 0 1-.584-.555.57.57 0 0 1 .584-.556Zm2.77 4.832a.556.556 0 0 0 .243-.35l.498-2.368A.579.579 0 0 1 15 10a.58.58 0 0 1 .572.447l.498 2.368c.03.143.117.268.242.35A2.194 2.194 0 0 1 17.334 15c0 1.225-1.047 2.222-2.333 2.222-1.286 0-2.333-.997-2.333-2.222 0-.733.381-1.42 1.02-1.835ZM15 7.222a.57.57 0 0 1 .583.556.57.57 0 0 1-.583.555.57.57 0 0 1-.583-.555.57.57 0 0 1 .583-.556Zm4.083 1.111a.57.57 0 0 1 .584.556.57.57 0 0 1-.584.555.57.57 0 0 1-.583-.555.57.57 0 0 1 .583-.556Zm2.334 8.89a.57.57 0 0 1 .583.555.57.57 0 0 1-.583.555.57.57 0 0 1-.584-.555.57.57 0 0 1 .584-.556Zm0-6.667a.57.57 0 0 1 .583.555.57.57 0 0 1-.583.556.57.57 0 0 1-.584-.556.57.57 0 0 1 .584-.555Zm2.747-.424C22.366 7.074 18.934 5 15 5c-3.933 0-7.362 2.072-9.161 5.128C2.897 11.382 1 14.143 1 17.222 1 21.51 4.664 25 9.167 25c.945 0 1.867-.158 2.746-.457.987.288 2.02.457 3.087.457a10.97 10.97 0 0 0 3.088-.458c.88.3 1.802.458 2.745.458C25.336 25 29 21.51 29 17.222c0-3.082-1.895-5.836-4.836-7.09Z" fill="#424242"/></svg>
          <p className="path">Dashboard</p>
            </div>
          </li>
          <li className="selected">
            <span className="selection-wedge"></span>
            <div className="element">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.993 1.673a.583.583 0 0 0-.76-.643c-.035.011-3.54 1.137-11.483 1.137-6.876 0-15.003-1.149-15.084-1.16a.582.582 0 0 0-.635.764c.011.033 1.136 3.42 1.136 7.98 0 .27.185.504.448.567 1.14.27 3.052 1.088 3.052 3.515 0 2.21-.944 3.323-2.968 3.502a.583.583 0 0 0-.532.581c0 6.248-1.133 10.3-1.145 10.34a.583.583 0 0 0 .666.734c.063-.011 6.404-1.157 9.812-1.157 5.16 0 16.742 1.152 16.858 1.164l.059.003a.582.582 0 0 0 .575-.68c-.012-.069-1.159-7.031-1.159-13.903 0-5.144 1.149-12.67 1.16-12.744Z" fill="#303C42"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 26.67c-2.77 0-7.242.702-9.135 1.021.332-1.488.926-4.761.969-9.26 2.294-.393 3.5-1.973 3.5-4.596 0-2.181-1.299-3.847-3.502-4.53-.047-3.19-.6-5.747-.936-7.024 2.319.298 8.74 1.053 14.353 1.053 5.955 0 9.448-.61 10.959-.96-.304 2.162-1.046 7.862-1.046 12.044 0 5.644.763 11.346 1.06 13.348-2.668-.256-11.776-1.097-16.222-1.097Z" fill="#FFE082"/><path opacity=".15" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 26.67c-2.77 0-7.242.702-9.135 1.021.332-1.488.926-4.761.969-9.26 2.294-.393 3.5-1.973 3.5-4.596 0-2.181-1.299-3.847-3.502-4.53-.047-3.19-.6-5.747-.936-7.024 2.319.298 8.74 1.053 14.353 1.053 5.955 0 9.448-.61 10.959-.96-.304 2.162-1.046 7.862-1.046 12.044 0 5.644.763 11.346 1.06 13.348-2.668-.256-11.776-1.097-16.222-1.097Z" fill="#8D6E63"/><path opacity=".2" fill-rule="evenodd" clip-rule="evenodd" d="m11.92 26.663-.106.003c.932.007 2.036.047 3.233.108a56.833 56.833 0 0 0-3.127-.111Z" fill="#fff"/><path opacity=".1" fill-rule="evenodd" clip-rule="evenodd" d="M26.176 2.678c-.286 2.347-.886 7.737-.886 11.742 0 5.523.644 11.092.916 13.204.61.056 1.134.105 1.515.142-.296-2.002-1.06-7.703-1.06-13.346 0-4.182.743-9.881 1.047-12.042-.381.088-.89.192-1.532.3Z" fill="#000"/><path opacity=".2" fill-rule="evenodd" clip-rule="evenodd" d="M15.049 3.311c.504.016 1.006.027 1.5.027l.073-.001a60.968 60.968 0 0 1-1.573-.026ZM3.334 18.428c-.043 4.498-.637 7.77-.969 9.259.405-.069.945-.156 1.543-.249.298-1.579.772-4.73.808-9.01 2.024-.393 3.089-1.972 3.089-4.595 0-2.181-1.147-3.846-3.09-4.529a33.749 33.749 0 0 0-.784-6.835 136.39 136.39 0 0 1-1.535-.188c.337 1.277.889 3.834.937 7.023 2.203.683 3.503 2.348 3.503 4.529 0 2.623-1.208 4.202-3.502 4.595Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.663 23.167A2.334 2.334 0 0 1 22 20.835a2.334 2.334 0 0 1 2.337 2.332A2.334 2.334 0 0 1 22 25.498a2.334 2.334 0 0 1-2.337-2.331Z" fill="#303C42"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.837 23.167c0-.645.52-1.168 1.163-1.168.642 0 1.163.523 1.163 1.168 0 .645-.52 1.168-1.163 1.168a1.166 1.166 0 0 1-1.163-1.168Z" fill="#EF5350"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.926 20.249a.586.586 0 0 0-1.173 0c0 .435.086.9.247 1.345a.587.587 0 0 0 1.102-.398 2.82 2.82 0 0 1-.176-.947Zm3.419-12.054c.125 0 .252-.04.359-.123.467-.366 1.062-.655 1.77-.86a.584.584 0 0 0-.321-1.123c-.853.245-1.582.602-2.167 1.06a.587.587 0 0 0 .36 1.046Zm-.505 14.973a2.78 2.78 0 0 1-1.646-.509.583.583 0 1 0-.675.953c.675.48 1.456.724 2.415.724.322 0 .537-.26.537-.584 0-.323-.308-.584-.63-.584ZM10.675 12.09h.001a.59.59 0 0 0 .584-.59c0-.733.11-1.383.328-1.932A.585.585 0 0 0 10.5 9.14c-.267.673-.404 1.452-.406 2.374h-.003c0 .321.262.575.585.575Zm2.293 2.488c-.638-.307-1.062-.69-1.332-1.205a.585.585 0 0 0-1.037.541c.388.738.997 1.298 1.86 1.713a.585.585 0 0 0 .782-.271.582.582 0 0 0-.273-.778Zm3.562-7.707c.643-.044 1.392-.09 2.015.06a.581.581 0 1 0 .273-1.128c-.746-.181-1.616-.143-2.37-.09a.58.58 0 0 0-.54.62c.023.32.295.566.623.538Zm.629 9.462c-.635-.555-1.461-.84-2.186-1.063a.58.58 0 1 0-.344 1.111c.61.189 1.298.423 1.76.827a.583.583 0 0 0 .77-.875Zm.457 1.797a.582.582 0 0 0-.535.626c.008.105.012.213.012.327 0 .603-.08 1.145-.241 1.61a.583.583 0 0 0 .548.774.58.58 0 0 0 .548-.392c.202-.588.305-1.258.305-1.992 0-.144-.005-.282-.015-.416a.583.583 0 0 0-.622-.537Zm-1.84 4.05c-.461.354-1.059.615-1.775.777a.585.585 0 0 0 .255 1.141c.881-.2 1.63-.531 2.225-.986a.587.587 0 0 0 .11-.82.58.58 0 0 0-.815-.112Zm4.837-13.424a.583.583 0 0 0 1.114-.348 3.94 3.94 0 0 0-.677-1.194.584.584 0 0 0-.908.73c.34.422.47.811.471.812Z" fill="#303C42"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.782 15.028c.103.13.257.208.423.217l.033.002a.583.583 0 0 0 .412-.171l.515-.515a.581.581 0 0 0-.047-.868l-2.008-1.606 2.008-1.605a.585.585 0 0 0 .047-.869L23.65 9.1a.584.584 0 0 0-.868.048l-1.606 2.006-1.605-2.007a.583.583 0 0 0-.424-.217.623.623 0 0 0-.444.17l-.516.514a.58.58 0 0 0 .048.869l2.007 1.605-2.007 1.606a.584.584 0 0 0-.048.868l.516.515a.583.583 0 0 0 .868-.048l1.605-2.007 1.606 2.007Z" fill="#303C42"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.993 1.673a.583.583 0 0 0-.76-.643c-.035.011-3.54 1.137-11.483 1.137-6.876 0-15.003-1.149-15.084-1.16a.582.582 0 0 0-.635.764c.011.033 1.136 3.42 1.136 7.98 0 .27.185.504.448.567 1.14.27 3.052 1.088 3.052 3.515 0 2.21-.944 3.323-2.968 3.502a.583.583 0 0 0-.532.581c0 6.248-1.133 10.3-1.145 10.34a.583.583 0 0 0 .666.734c.063-.011 6.404-1.157 9.812-1.157 5.16 0 16.742 1.152 16.858 1.164l.059.003a.582.582 0 0 0 .575-.68c-.012-.069-1.159-7.031-1.159-13.903 0-5.144 1.149-12.67 1.16-12.744Z" fill="url(#a)"/><defs><linearGradient id="a" x1="-1.315" y1="36.84" x2=".245" y2="36.11" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".2"/><stop offset="1" stop-color="#fff" stop-opacity=".01"/></linearGradient></defs></svg>
              <p className="path">Game plan</p>
            </div>
          </li>
          <li>
          <span className="selection-wedge"></span>
            <div className="element">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2496 7.99976C19.2849 7.99976 18.5 8.78492 18.5 9.75025C18.5 10.7149 19.2849 11.4998 20.2496 11.4998C21.2149 11.4998 22.0001 10.7149 22.0001 9.75025C22.0001 8.78492 21.2149 7.99976 20.2496 7.99976ZM6.03406 23.1907L6.03413 23.1917C5.12517 23.259 4.23821 23.7273 3.53663 24.5103C2.76804 25.3677 2.30308 26.5081 2.19203 27.8076C3.49136 27.6965 4.63214 27.2319 5.48996 26.4631C6.27265 25.762 6.74079 24.8752 6.80813 23.9666L6.03413 23.1917L6.03406 23.1907ZM12.0803 29.0002C11.9577 29.0002 11.8397 28.9624 11.7392 28.8904C11.5876 28.7803 11.4971 28.6033 11.4971 28.417V23.989L10.9166 23.4084L8.99603 25.3291C8.88481 25.4394 8.73842 25.5002 8.58383 25.5002C8.42866 25.5002 8.28196 25.4394 8.17073 25.3291L7.79633 24.9548C7.46767 26.0486 6.7231 27.0488 5.70147 27.7705C4.56319 28.5749 3.13927 29.0002 1.58363 29.0002C1.26205 29.0002 1.00043 28.7383 1.00043 28.4163C1.00043 26.8606 1.42547 25.4368 2.2296 24.2988C2.95182 23.2764 3.95169 22.5322 5.04503 22.2034L4.67063 21.8291C4.44351 21.602 4.44351 21.2317 4.67063 21.0037L6.59213 19.0832L6.00893 18.5H1.58363C1.39666 18.5 1.21969 18.4094 1.11023 18.2578C1.00063 18.1059 0.970681 17.9094 1.03013 17.7322C2.29446 13.9402 4.31737 11.5757 10.4864 11.5041C13.3063 8.05687 15.6824 5.781 18.1901 4.12475C21.3728 2.02221 24.7178 1.00024 28.4162 1.00024C28.7383 1.00024 29.0003 1.26196 29.0003 1.58349C29.0003 5.28271 27.978 8.62841 25.8748 11.8113C24.2178 14.3193 21.9411 16.6956 18.4928 19.5161C18.4206 25.6846 16.0562 27.7065 12.2648 28.9697C12.2053 28.99 12.1433 29.0002 12.0803 29.0002V29.0002Z" fill="#424242"/>
          </svg>
          <p className="path">Levels</p>          
            </div>
          </li>
        </ul>
      </div>
      <div className="container ">
        <div className="top-bar">
          <p className='page-title'>Game Plan</p>
          <div className='account-settings-button'>
            <img src={avatar} alt="avatar" style={{width:"1.83rem",height:"1.83rem"}}/>
            <div>
              <p>Account Switcher</p>
              <h3>Category 99</h3>
            </div>
            <div>
              <img src={downArrow} style={{width:"14px",height:"7px" }}/>
            </div>
          </div>
        </div>
        <div className="inner-container">
          <TabBar tabs={['Levels','Challenges','Quests']}/>
          <SearchBar/>
          <div className="challenges-control">
            <p style={{color:"#A9ABB2",fontSize:"12px"}}>4 Challenges</p>
            <div className="create-challenge">
              <button className="create-challenge-button">Create New Challenge</button>
              <img src={add} alt="add button" width={"20px"} />
            </div>
          </div>
          <motion.div animate={{y:[200,0]}} className="challenges">
            {challenges.map((challenge) => (
            <Challenge 
              active      ={challenge.active} 
              title       ={challenge.title}
              date        ={challenge.date}
              time        ={challenge.time}
              description ={challenge.description}
              diamonds    ={challenge.diamonds}
              stars       ={challenge.stars}
              milestones  ={challenge.milestones}
              tag         ={challenge.tag}
              image       ={challenge.image}
              />
            ))}
          </motion.div>
        </div>
     </div>
    </div>
  )
}

export default App
