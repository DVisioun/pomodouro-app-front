import React from 'react'

function PauseTimer() {
  return (
    <div className="flex items-center justify-between bg-secondary shadow-custom px-3 py-5 rounded-lg">
      <div className="font-sora">
        <h4 className="flex flex-col justify-center text-primary font-bold text-xl">
          Pausa
        </h4>
        <div className="flex items-center gap-2">
          <select className="bg-primary px-5 py-1 rounded-md shadow-white text-secondary">
            <option value="5">5 min</option>
            <option value="7">7 min</option>
          </select>
          <button className="bg-primary px-3 py-1 rounded-md shadow-white text-secondary">
            Ok
          </button>
        </div>
      </div>
      <div className="text-primary font-bungee text-4xl">
        <h1>05:00</h1>
      </div>
    </div>
  )
}

export default PauseTimer
