import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { incnumber,decnumber } from './service/action/Index';

const Redux = () => {
  const myval = useSelector((state) =>state.changeNumber);
  const dispatch = useDispatch();
  return(
      <>
        <div>
             <h2>welcome to redux</h2>
             <h4>Increment/decreemt action</h4>
             <div>
                 <button type="button" onClick={()=>dispatch(decnumber())} >-</button>
                 <input type="text"  value={myval}/>
                 <button type="button" onClick={()=>dispatch(incnumber())}>+</button>
             </div>
        </div>
      </>
  )
}

export default Redux;