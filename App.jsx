import React, { useContext } from 'react';
import { Maincontext } from './Context';
import Quiz from './Components/Quiz';
import Start from './Components/Start';
import Result from './Components/Result';

const App = () => {
  const {start, exit, current} = useContext(Maincontext);
  return (
    <>
     {
      current === false ?
      
        (start === true ? 
        <Quiz/> 
        :
        <Start/>)
       :

      
     (   exit === true ?
       <Result/>
        :
        <Quiz/>)
      
     }
    </>
  );
}

export default App;
