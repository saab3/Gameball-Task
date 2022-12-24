import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
function Quote() {
    // var quotes
    const [quote, setQuote] = useState([])
    
    // useEffect(() => {
    //     quotes = quote
    //     console.log('quote',quote)
    //     console.log('quotes',quotes)
    // })

    function getQuote(){
        axios.get('https://api.quotable.io/random')
        .then(res => {
            setQuote([...quote,res.data.content])
            // console.log(quote)
        }
        ).catch(err => {
            console.log(err)
        })
    }

  return (
    <div>
        <button onClick={getQuote}>get Quote</button>
        <div>
            {quote.map((q,i)=>{
                return <p key={i}> {q} </p>
            })}
        </div>
    </div>
  )
}

export default Quote