import React from 'react';

const Arrow = ({direction, clickFunction}) => {
  return(
    <div style={{fontSize:"50px"}} onClick={ clickFunction }>
      <i className= {direction}/>
    </div>
  )
}

export default Arrow;
