import React from 'react'

const Button = () => {
  return (
    <div>
      <button
          className={`p-2 text-xs px-4 text-white rounded-full border border-black ${Disabled ? 'hover:text-white' : 'hover:text-black'} ${Disabled ? '' : 'hover:bg-indigo-400'} ${Disabled ? 'bg-gray-400' : 'bg-gray-700'}`}
          onClick={() => handleClick()}
          disabled={Disabled}
        >
          Reset Array
        </button>
    </div>
  )
}

export default Button
