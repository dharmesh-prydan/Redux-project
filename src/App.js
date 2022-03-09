import React, { createContext } from 'react';
import CompA from './component/prop-drilling/CompA';
import CompAA from './component/contextAPI/CompAA';

const Firstname = createContext();
const App = () => {
    return(
       <> 
         <h4>pass data through props(Parent to lastChild)</h4>
         <CompA />
          <hr style={{border:"1px solid red"}}/>

         <h4>pass data through props(Context API)</h4>
          <h4>direct CompAA  to  CompCC</h4>
         <Firstname.Provider value={"Dharmesh Kanetiya"}>
         <CompAA />
         </Firstname.Provider>
         <hr style={{border:"1px solid red"}}/>
       </>
    )
}

export default App;
export { Firstname };