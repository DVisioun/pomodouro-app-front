import React from 'react'
import Checklist from '../../Atoms/Checklist/Checklist'

function Timer() {
  return (
    <div className="flex flex-col items-center justify-center bg-secondary shadow-custom px-7 py-7 rounded-lg gap-4">
      <div className="text-primary font-bungee text-6xl">
        <h1>05:00</h1>
      </div>
      <div className="flex items-center justify-center gap-7 w-full">
        <button className="w-6">
          <span className="material-icons text-primary">replay</span>
        </button>
        <button className="w-6">
          <span className="material-icons text-primary">pause</span>
        </button>
        <button className="w-6">
          <span className="material-icons text-primary">play_arrow</span>
        </button>
        <button className="w-6">
          <span className="material-icons text-primary">stop</span>
        </button>
      </div>
      <div className="font-sora">
        <div className="flex items-center gap-2">
          <select className="bg-primary pl-4 pr-16 py-1 rounded-md shadow-white text-secondary text-start">
            <option value="5">5 min</option>
            <option value="7">7 min</option>
          </select>
          <button className="bg-primary px-3 py-1 rounded-md shadow-white text-secondary">
            Ok
          </button>
        </div>
      </div>
      <Checklist center='justify-center' />
    </div>
  )
}

export default Timer
