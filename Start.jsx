import React, { useContext } from 'react';
import { Maincontext } from '../Context';

const Start = () => {

    const {setStart} = useContext(Maincontext);
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <div className=' border px-8 py-3 border-black rounded bg-orange-500 text-white text-5xl' onClick={()=>{setStart(true)}}>
            Start
        </div> 
        </div>
    );
}

export default Start;
