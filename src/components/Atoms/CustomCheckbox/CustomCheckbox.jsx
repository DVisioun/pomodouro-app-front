import React, { useState } from 'react'

function CustomCheckbox({ task, center = '' }) {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div
      className={`flex items-center ${center} gap-3 text-xs font-sora text-primary ${isChecked ? 'font-semibold' : ''}`}
    >
      <div className="relative">
        <div className="w-5 h-5 relative">
          <input
            type="checkbox"
            id="cbx-12"
            className="appearance-none cursor-pointer m-0 absolute w-5 h-5 border-2 border-primary rounded-full focus:outline-none"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="cbx-12"
            className={`w-5 h-5 bg-none rounded-full absolute top-0 left-0 transform pointer-events-none ${isChecked ? 'animate-splash-12' : ''}`}
          />
          {isChecked && (
            <svg
              fill="none"
              viewBox="0 0 14 15"
              height="10"
              width="12"
              className="absolute top-1.5 left-1 z-10 pointer-events-none"
            >
              <path
                d="M2 8.36364L6.23077 12L13 2"
                className="stroke-white stroke-3 stroke-linecap-round stroke-linejoin-round transition-all duration-300 delay-200 ease-linear"
              />
            </svg>
          )}
        </div>

        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[-130%] left-[-170%] w-[110px] pointer-events-none"
        >
          <defs>
            <filter id="goo-12">
              <feGaussianBlur
                result="blur"
                stdDeviation="4"
                in="SourceGraphic"
              />
              <feColorMatrix
                result="goo-12"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                mode="matrix"
                in="blur"
              />
              <feBlend in2="goo-12" in="SourceGraphic" />
            </filter>
          </defs>
        </svg>
      </div>
      <label className="overflow-hidden text-ellipsis whitespace-nowrap">
        {task}
      </label>
    </div>
  )
}

export default CustomCheckbox
