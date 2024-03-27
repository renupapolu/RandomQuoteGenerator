import React from 'react';
import './RandomQuote.css'
import { useState } from 'react';
import reload_icon from '../Assets/download.png'
const RandomQuote = () => {
    let quotes=[];
    async function loadQuotes(){
      const response=await fetch("https://type.fit/api/quotes");
      quotes=await response.json();
    }
    const [quote,setQuote]=useState({
        text:"Difficulties increase with the nearer we get to the goal.",
        author:"Johann Wolfgang Von Goethe",
      });
    const random=()=>{
      const select=quotes[Math.floor(Math.random()*quotes.length)];
      setQuote(select);
    }
    loadQuotes();
  return (
    <div className='container'>
      <h4>Quotes</h4>
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">- {quote.author}</div>
        <hr />
        <div className='icons'>
            <img  onClick={()=>{random()}}src={reload_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default RandomQuote
