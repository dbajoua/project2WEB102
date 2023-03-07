import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  //Note: do not pass in variable that will change state
  //inside return body bc causing rendering issues

  //array holding all 8 cards 
  var arrayOfCards = {  "Welcome" : "Use Below Button for Next Card, or Tap to Flip",
                        "Where is area 51 located?" : "Neveda",
                        "What is the nickname of CA?" : "The Golden State",
                        "Where is Death Valley located?" : "California",
                        "Where is lake Okeechobee located?" : "Florida",
                        "What is the smallest US state?" : "Rhode Island",
                        "Which state hosts Indy 500?" : "Indiana",
                        "Which state is the home of the cereal bowl of America?" : "Michigan"
                      }
   

  
  //front of first card in the array 
  var firstCard = Object.keys(arrayOfCards)[0];
 

  // how to access back of first card in the array
  var firstCardback = Object.values(arrayOfCards)[0];
 
  //STATE: starting state of card will be the front of the first flash card in array
  const [cardMessage, setCardMessage] = useState(firstCard);

   //STATE: In the starting state, we are looking at the front of the card
   const [frontview, setFrontView] = useState(true);

  //STATE: starting state of card index will be 0;
  const [cardIndex, setCardIndex] = useState(0);

  
  //function to pick random integer between 0 and max value
  const randomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  //function to display the front of a random choosen flash card next
  const goNextCard = () => {
    var i = randomInt(8); //will pick random integer between 0 - 7
    setCardMessage(Object.keys(arrayOfCards)[i]);
    setFrontView(true);
    setCardIndex(i);

  }

 
  //function to flip flashcard
  const flipCardView = () => {
    if (frontview == true) {
      setCardMessage(Object.values(arrayOfCards)[cardIndex]);
      setFrontView(false);
      
    }
    else {
      setCardMessage(Object.keys(arrayOfCards)[cardIndex]);
      setFrontView(true);
    }

  }

 

  return (
    <div className="App">

       
      <div className="header">
        <h1>🇺🇸 United States Trivia - fun facts 😆 </h1>
        <h3> What fun facts do you know about the various states?
          Test your knowledge with this flashcard game!!
        </h3>
        <h4> Total Cards in Set: 8</h4>
      </div>

      <div className="flashcard">

        <div className="whiteCard">
          <h5>{cardMessage}</h5>
          <img src="https://infinitelyteaching.files.wordpress.com/2017/02/flashcard-template.jpg" onClick={flipCardView}/>
        </div>
        
      </div>

      <div className="Container">
        
        <div className="flip">
         

        </div>
      
        <div className='next'>
    
          <button onClick={goNextCard}> Next Card</button>
          
        </div>

      </div>

     
    </div>
  )
}

export default App
