import React from 'react'
import "./styles.modules.css"

function TabBar({tabs:tabs}) {
  console.log(tabs)
  return (
    <div className='tab-bar'>
      <ul className="tabs">
        {tabs.map((tab)=>
           <li>{tab}</li>
        )}
      </ul>
    </div>
  )
}

export default TabBar