import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

const Maincontext = createContext();
const Context = (props) => {
   

const [start, setStart] = useState(false);
const [exit, setExit] = useState(false);
const [current, setCurrent] = useState(false);
const [score, setScore] = useState(0);


const [ans, setAns] = useState("");



useEffect(
  ()=>{
setAns("")
  },[]
)


const quizzes =    [
    {
      "question": "What is the most recent major scientific breakthrough?",
      "a": "Successful COVID-19 vaccine for children under 5",
      "b": "Discovery of a new exoplanet capable of supporting life",
      "c": "Development of a carbon capture technology to combat climate change",
      "d": "Breakthrough in quantum computing achieving quantum supremacy",
      "correct": "a"
    },
    {
      "question": "Which country recently announced a significant increase in renewable energy investment?",
      "a": "United States",
      "b": "China",
      "c": "India",
      "d": "European Union",
      "correct": "d"
    },
    {
      "question": "What is the latest development in global efforts to address the refugee crisis?",
      "a": "Implementation of new policies to improve refugee integration",
      "b": "Formation of international alliances to provide aid to refugees",
      "c": "Adoption of agreements to increase refugee resettlement quotas",
      "d": "Launch of initiatives to address root causes of displacement",
      "correct": "c"
    },
    {
      "question": "Which company recently made headlines for achieving a record valuation in the stock market?",
      "a": "Tesla",
      "b": "Apple",
      "c": "Amazon",
      "d": "Meta Platforms (formerly Facebook)",
      "correct": "d"
    },
    {
      "question": "What is the latest development in the field of renewable energy technology?",
      "a": "Breakthrough in solar panel efficiency",
      "b": "Advancement in wind turbine design for increased energy output",
      "c": "Development of new battery technology for energy storage",
      "d": "Invention of a novel method for harnessing tidal energy",
      "correct": "c"
    },
    {
      "question": "Which country recently announced ambitious plans to combat deforestation?",
      "a": "Brazil",
      "b": "Indonesia",
      "c": "Australia",
      "d": "Canada",
      "correct": "a"
    },
    {
      "question": "What is the latest development in the field of space exploration?",
      "a": "Successful deployment of a new satellite network for global internet coverage",
      "b": "Discovery of evidence indicating the presence of liquid water on Mars",
      "c": "Launch of a spacecraft to study Jupiter's moon Europa for signs of life",
      "d": "Completion of the first-ever manned mission to the International Space Station from a private company",
      "correct": "d"
    },
    {
      "question": "Which country recently announced a major initiative to address plastic pollution?",
      "a": "United States",
      "b": "China",
      "c": "India",
      "d": "European Union",
      "correct": "d"
    },
    {
      "question": "What is the latest development in the field of medical research?",
      "a": "Identification of a potential cure for Alzheimer's disease",
      "b": "Discovery of a new strain of antibiotic-resistant bacteria",
      "c": "Development of a promising treatment for certain types of cancer",
      "d": "Breakthrough in gene editing technology for genetic disorders",
      "correct": "c"
    },
    {
      "question": "Which global event recently garnered attention for its impact on international diplomacy?",
      "a": "COP26 Climate Summit",
      "b": "G20 Summit",
      "c": "UN General Assembly",
      "d": "Olympic Games",
      "correct": "a"
    }
  ]

//   console.log(quizzes[0]);

    
    return (
        <div>
            <Maincontext.Provider value={ {start, setStart, exit , setExit , current,setCurrent , quizzes, ans, setAns, score, setScore}}>
                 {props.children}
            </Maincontext.Provider>
        </div>
    );
}
export {Maincontext};
export default Context;
