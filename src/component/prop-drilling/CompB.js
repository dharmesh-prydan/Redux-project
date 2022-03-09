import React from 'react';
import CompC from './CompC';
const CompB = (props) => {
  return(
      <>
      <CompC name={props.name}/>
      </>
  )
}

export default CompB;