import React from 'react'
import './UnderLine.scss'
const UnderLine = ({children}) => {
   return (
      <div className = 'undeline-container'>
         {children}
      </div>
   )
}

export default UnderLine
