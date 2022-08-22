import './App.css';
import {useState} from "react";

function App() {

  ;

  const authors = [
    "P.Picasso","M.Aurelius","Jesus"
  ]


  const quotes = [
    "Every child is an artist. The problem is how to remain an artist once he grows up.",
    "Life is what happens to you while you’re busy making other plans.",
    "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."
  ]
  
  
  const [currentQuote, setCurrentQuote] = useState(quotes[0])
  const [currentAuthor, setCurrentAuthor] = useState(authors[0])
  

  const color_list = [
    "tomato",
    "blueviolet",
    "cornflowerblue",
    "indianred",
    "MediumAquaMarine",
    "MediumPurple",
    "Rebeccapurple",
    "sandybrown",
    "seagreen",
    "palevioletred",
    "lightsteelblue",
    "Gold",
    "teal",
  ];

  const rand_clr = color_list[(Math.floor(Math.random()*color_list.length))]
  

  const fetchQuote=()=>{
    let idx = Math.floor(Math.random()*quotes.length);
    console.log(idx)
    setCurrentAuthor(authors[idx]);
    setCurrentQuote(quotes[idx]);
  }

  const link = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${currentQuote}"%20${currentAuthor}`

  return (
    <div className="App" style={{backgroundColor:rand_clr,color:rand_clr}}>
      <div id="quote-box" >
        
        <p id="text">"{currentQuote}</p>
        <p id="author">-{currentAuthor}</p>
        
        
        <div id="buttons">
        <a id="tweet-quote" target="_blank" href={link}>
        <img id="logo" src="https://cdn-icons.flaticon.com/png/512/3128/premium/3128212.png?token=exp=1661149786~hmac=5d1176f8dfa84e4abd052770d75db3f1"/>
        </a>
        <button id="new-quote" style={{backgroundColor:rand_clr}} onClick={fetchQuote}>New Quote</button>
        </div>
      
        </div>
    </div>
  );
}


export default App;
