import React from 'react'
import PauseTimer from '../../Molecule/PauseTimer/PauseTimer'
import Timer from '../../Molecule/Timer/Timer'
import Notebook from '../../Molecule/Notebook/Notebook'
import Spotify from '../../Molecule/Spotify/Spotify'

function Tab1() {
  return (
    <div className="space-y-4">
      <PauseTimer />
      <Timer />
      <Notebook height={150} />
      <Spotify />
    </div>
  )
}

export default Tab1
