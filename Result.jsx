import React, { useContext } from 'react';
import { Maincontext } from '../Context';

const Result = () => {
    const {setStart, setCurrent, score, setScore} =  useContext(Maincontext);

    const PlayAgain = ()=> {
        setCurrent(false);
        setStart(false);
        setScore(0);
    }
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
         <div className=''>
<div className='text-3xl font-bold ps-7 my-5 '>
    Score  : {score}
</div>
 <div>
    <button className=' border px-8 py-3 border-black rounded bg-orange-500 text-white text-3xl' onClick={PlayAgain}>Play Again</button>
 </div>
         </div>
        </div>
    );
}

export default Result;
