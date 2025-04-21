'use client';
import React from 'react';
import { quiz } from './data';
import { useEffect ,useState } from 'react';
import HomeButton from "../components/homeButton";
import RestartButton from '../components/restartButton';

const styles = {
  zone: {
    display: "flex",
    gap: "10px",
    padding: "10px",
    border: "2px dashed gray",
    minHeight: "50px",
    alignItems: "center",
    justifyContent: "center",
  },
  zoneRTL: {
    display: "flex",
    gap: "10px",
    padding: "10px",
    border: "2px dashed gray",
    minHeight: "50px",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  item: {
    padding: "5px 5px",
    background: "#007BFF",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px",
  }
};

 const page =() => {
  //const [checkedButton, setCheckedButton]=useState(false);
  const [activeQuestion,setActiveQuestion]=useState(0);
  const [selectedAnswer,setSelectedAnswer]=useState('');
  //const [checked, setChecked]= useState(false);
  //const [selectedAnswerIndex,setSelectedAnswerIndex]=useState(false);
  const [showResult, setShowResult]=useState(false);
  const [isClient, setIsClient] = useState(false);
  const [checkedAnswer, setCheckedAnswer] = useState(false);
  const [result, setResult]= useState({
    score:0,
    correctAnswers:0,
    wrongAnswers: 0
  }); 

  //const activeItem = quiz.questions[activeQuestion];
  
  const [questionsInarray ,setQuestionsInarray] = useState([...quiz.questions]);
  const {question, answers, correctBoard } = questionsInarray[activeQuestion];
  const [zone1Items, setZone1Items] = useState([...answers]);
    useEffect(() => {setZone1Items([...answers])},[activeQuestion]);
  const [zone2Items, setZone2Items] = useState([]);
    useEffect(() => {setZone2Items([])},[activeQuestion]);

  const checkAnswer = () => {
    setCheckedAnswer(true);
  };

 // Function to compare arrays
  /*function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false; // Check if lengths are different
  
    return arr1.every((item, index) => item.id === arr2[index]); // Compare IDs at each index
  }*/
  
  // Select and check answer
  const onAnswerSelected = () => {
    setCheckedAnswer(true);
    //setSelectedAnswerIndex(true);
    if ((arraysAreEqual(zone2Items, correctBoard))) {
      setSelectedAnswer(true);
      
      } else{
      setSelectedAnswer(false);
      //console.log('false');
      }
  };

    // Calculate score and increment to next question 

    const nextQuestion = () => {
        //setSelectedAnswer(null);
        //setSelectedAnswerIndex(false);
        setResult((prev) => 
        selectedAnswer 
          ? {
             ...prev,
            correctAnswers: prev.correctAnswers +1,
            }
          : {
             ...prev,
             wrongAnswers: prev.wrongAnswers +1,
    
            }
        );
        if (activeQuestion !== questionsInarray.length - 1) {
          setActiveQuestion((prev) => prev +1);
        } else{
          setActiveQuestion(0);
          setShowResult(true);
        }
        setCheckedAnswer(false);
      };

        //Function to create correct and wrong sounds
  
 const playCorrectSound = () => {
    const soundCorrect = new Audio('/correct_sound_effect.mp3');
    soundCorrect.play();
  
  };

  const playWrongSound = () => {
    const soundWrong = new Audio('/wrong_sound_effect.mp3');
    soundWrong.play();
    
  };

   // Function to render answer symbols
   const renderAnswerSymbol = () => {
    if (checkedAnswer) {
      if (arraysAreEqual(zone2Items, correctBoard)) {
        playCorrectSound();
        return <span className="text-4xl block mx-auto">✅</span>;
      } else {
        playWrongSound();
        return <span className="text-4xl block mx-auto">❌</span>;
      }
    }
    return null;
  };

   //correct and wrong symbols
   
   /*const renderAnswerSymbol = () => {
    if (checked) {
      if (selectedAnswer) {
        playCorrectSound();
        return (
          <span className="text-4xl block mx-auto">
            ✅
          </span>
          );
      
      } else {
        playWrongSound();
        return (
          <span className="text-4xl block mx-auto">
            ❌
          </span>
        );
      }
    }
    return null;
  };*/ 

  // Function to compare arrays
function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i].key !== arr2[i].key) {
        return false;
      }
    }
    return true;
  }

  // Function to handle item click
  /*const handleItemClick = (item, fromZone) => {
    if (fromZone === "zone1") {
      setZone1Items((prev) => prev.filter((i) => i.key !== item.key));
      setZone2Items((prev) => [...prev, item]);
    } else if (fromZone === "zone2") {
      setZone2Items((prev) => prev.filter((i) => i.key !== item.key));
      setZone1Items((prev) => [...prev, item]);
    }
  }; */

  // Function to handle item click
  const handleItemClick = (item, fromZone) => {
    if (fromZone === "zone1") {
      setZone1Items((prev) => prev.filter((i) => i.id !== item.id));
      setZone2Items((prev) => [...prev, item]);
    } else {
      setZone2Items((prev) => prev.filter((i) => i.id !== item.id));
      setZone1Items((prev) => [...prev, item]);
    }
  };

   // Select and check answer
   /* const onAnswerSelected = (answer ,id) => {
    setChecked(true);
    setSelectedAnswerIndex(true);
    if ((answer.id) === (correctAnswer.id)) {
      setSelectedAnswer(true);
      
      } else{
      setSelectedAnswer(false);
      console.log('false');
      }
  }; */

  return ( <div className=" p-0 border-0 rounded "> {!showResult ? (
   <div>
      <h3>Zone 1</h3>
      <div style={styles.zone}>
        {zone1Items.map((item) => (
          <div key={item.id} style={styles.item} onClick={() => handleItemClick(item, "zone1")}>
            {item.component}
          </div>
        ))}
      </div>

      <h3>Zone 2</h3>
      <div style={styles.zoneRTL}>
        {zone2Items.map((item) => (
          <div key={item.id} style={styles.item} onClick={() => handleItemClick(item, "zone2")}>
            {item.component}
          </div>
        ))}
      </div> 

      {/*<div>
      <h3>Zone 1</h3>
      <div style={styles.zone}>
        {zone1Items.map((item) => (
          <div key={item.id} style={styles.item} onClick={() => handleItemClick(item, "zone1")}>
            {item.component}
          </div>
        ))}
      </div>
  
      <h3>Zone 2</h3>
      <div style={styles.zoneRTL}>
        {zone2Items.map((item) => (
          <div key={item.id} style={styles.item} onClick={() => handleItemClick(item, "zone2")}>
            {item.component}
          </div>
        ))}
      </div> */}
    
  

      <div>
        <ul className="flex flex-wrap">
          <li>
            <RestartButton />
          </li>
          
          {checkedAnswer ? (
            <li>
            <div className="flex items-center justify-center h-24"> 
          <button onClick={nextQuestion} className="bg-blue-500 hover:bg-green-700 text-white font-bold py-4 px-10 rounded"> 
           {activeQuestion == questionsInarray.length - 1 ? 'Finish': 'Next'}
          </button>
         </div>
         </li>
        
        ):( <li>
            <button
              onClick={ () => {checkAnswer(); onAnswerSelected();}}
              className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-5 sm:py-4 sm:px-10 rounded"
            >
              Check
            </button>
          </li> )} 
          <li>
            <HomeButton />
          </li>
          <li>
            <div className="pr-64 pt-6">{renderAnswerSymbol()}</div>
          </li>
        </ul>
      </div>
    </div>
    ) : ( <div className='flex flex-wrap center justify-center items-center h-screen'>
  <p> 
    <span className="text-9xl inline-block ">
     ✅
    </span>    
    <span className='text-9xl ml-24'>
     {result.correctAnswers} 
    </span>
   </p> 
   <div className= 'basis-full h-0'> </div>
   <div className="flex flex-wrap justify-center gap-24">
     <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-4 px-10 rounded"
      onClick={() => window.location.reload()}>
        Restart
     </button>
     <div className="px-8">
         <HomeButton  />
      </div>
   </div>
</div> 


)}
</div>)

{/*const styles = {
  zone: {
    display: "flex",
    gap: "10px",
    padding: "10px",
    border: "2px dashed gray",
    minHeight: "50px",
    alignItems: "center",
    justifyContent: "center",
  },
  zoneRTL: {
    display: "flex",
    gap: "10px",
    padding: "10px",
    border: "2px dashed gray",
    minHeight: "50px",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  item: {
    padding: "5px 5px",
    background: "#007BFF",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px",
  }
};*/} }

export default page;





 
