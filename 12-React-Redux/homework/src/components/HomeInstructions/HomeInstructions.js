import React from 'react'
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import './HomeInstructions.css'


function HomeInstructions() {
  return (
    <div className="home-instructions">
        <ScreenSearchDesktopIcon fontSize="large"/>
        <h5>Search a movie with the search bar above..</h5>
    </div>
  )
}

export default HomeInstructions