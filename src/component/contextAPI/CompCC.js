import React, { useContext } from 'react';
import { Firstname } from '../../App';

const CompCC = (props) => {
    const fname=useContext(Firstname);
  return(
    <>
      <h4>this is component CC data</h4>
      <p>{fname}</p>
    </>  
  )
}

export default CompCC;