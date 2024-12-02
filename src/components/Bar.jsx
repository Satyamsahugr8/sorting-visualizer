import React from 'react'

const Bar = ({values}) => {

    // const {arrayValue, color} = values;
    // console.log(values.bars.arrayValue, values.bars.color);
  return (
    <div className={`array-bar ${values.bars.color} m-0.5 flex items-center w-8`} style={{ height: `${values.bars.arrayValue}px`}} ></div>
    // <div>Bar</div>
  )
}

export default Bar
