import axios from "axios";
import { useRef, useState } from "react";


const baseURL = "https://api.kanye.rest"


const Kanye = () => {
    
    const [quote, setQuote] = useState("")
    
    const getQuote = () => {
       axios.get(baseURL)
       .then(res => {
        console.log(res.data.quote)
        setQuote(res.data.quote)
       }).catch(err => {
        console.log(err)
       })
    }

    return ( 

        <div className="kanye">
            <button onClick={getQuote}> YE QUOTE</button>
            {quote && <p>{quote}</p>}
        </div>
     );
}
 
export default Kanye;