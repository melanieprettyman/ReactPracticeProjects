import quotes from "./utils/quotes";
import {useEffect, useState} from "react";
import colorPairs from "./utils/colorMatching";

const QuoteBox : React.FC= ()=>{
  const [randomQuote, setRandomQuote] = useState({ quote: 'Click the button to generate a random quote', author: 'Melanie Prettyman' });
  const [currentColors, setCurrentColors] = useState(colorPairs[0]);

   //index into a random number in quotes array and update quote to be the new quote
     const generateNewQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[randomIndex]);

        const randomColorIndex = Math.floor(Math.random() * colorPairs.length);
        setCurrentColors(colorPairs[randomColorIndex]);
     };

     //When color is updated the background color will be updated
     useEffect(() => {
        document.body.style.backgroundColor = currentColors.background;
    }, [currentColors]);


    return (
        <>
            <div className='quoteBox'>
                <p className='quotation'>"</p>
                {randomQuote.quote}
                <p className='quotation'>"</p>
                <p className='author'>-{randomQuote.author}</p>
            </div>
            <button
                className='button'
                onClick={generateNewQuote}
                style={{ background: currentColors.button }}
            >
                New Quote!
            </button>
        </>
    )
};


export default QuoteBox;