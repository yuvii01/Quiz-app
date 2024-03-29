import React, { useContext, useEffect, useState } from 'react';
import { Maincontext } from '../Context';
import Result from './Result';


const Quiz = () => {

    
    const {quizzes} = useContext(Maincontext);

    // let Score = 0;
    
    
    return (
        <div>
            <Box />
        </div>
    );
}

const Box = () => {



    const [index, setIndex] = useState(0);
    const {setExit, setStart , setCurrent , quizzes , ans, setAns, score, setScore } = useContext(Maincontext);

    const Exit = () =>{
setExit(true);
setCurrent(true);

    }

    // useEffect(
    //     ()=>{
    //     setScore(score);
    //     console.log(score);
    //     },
    //     [score]
    // )

    const Next = (e) =>{

        if(ans === ""){
            return
        }
        if(index == quizzes.length -1 ){
           setCurrent(true);
           setExit(true);
            
            return

        }
        
if(quizzes[index].correct === ans){
 
    setScore(score + 4 );
   
}
else{
    
    setScore(score - 0);
   
}
        

        setIndex(index+1);
        setAns("");

    }

//     useEffect(
//         ()=>{
// console.log(ans);
//         },[ans]
//     )

    const Prev = (e) =>{
        if(index == 0){
            
            return

        }
        setIndex(index-1);

    }
    
    return(
        <div className='h-screen w-screen flex justify-center items-center'>
<div className='py-5  px-5  w-[600px] border border-black ' >
<div className='text-2xl '>
    {quizzes[index].question}
</div>
<div className='w-full h-full grid grid-cols-2 mt-5 gap-3'>
<div onClick={()=>{setAns( "a")}}   className={`  ${ans=== "a" ? 'bg-blue-400 text-white': ''} w-full py-4 px-2  duration-200 border border-black  hover:bg-blue-400 hover:text-white  text-center   text-lg   `}> {quizzes[index].a}</div>
<div onClick={()=>{setAns( "b")}} className={`  ${ans=== "b" ? 'bg-blue-400 text-white': ''} w-full py-4 px-2 duration-200 border border-black  hover:bg-blue-400 hover:text-white  text-center   text-lg   `}>{quizzes[index].b}</div>
<div onClick={()=>{setAns( "c")}} className={`  ${ans=== "c" ? 'bg-blue-400 text-white': ''} w-full py-4 px-2 duration-200 border border-black  hover:bg-blue-400 hover:text-white  text-center  text-lg   `}>{quizzes[index].c}</div>
<div onClick={()=>{setAns( "d")}} className={`  ${ans=== "d" ? 'bg-blue-400 text-white': ''} w-full py-4 px-2 duration-200 border border-black  hover:bg-blue-400 hover:text-white  text-center   text-lg   `} >{quizzes[index].d}</div>
</div>

<div className='flex justify-between mt-4'>
<button onClick={Prev} className='border hover:bg-blue-700 rounded px-5 py-2 bg-blue-400 text-white'>Prev</button>
<button  className='border hover:bg-blue-700 rounded px-5 py-2 bg-blue-400 text-white' onClick={Exit}> Finish </button>
<button onClick={Next} className='border hover:bg-blue-700 rounded px-5 py-2 bg-blue-400 text-white'>Save & Next</button>
</div>
</div>
        </div>
    )
}



export default Quiz;
