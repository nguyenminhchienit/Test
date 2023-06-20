import {useState,useEffect} from 'react'

function Countdown(){
    const [countdown,setCountdown] = useState(180);
    console.log("re-render")
    useEffect(() => {
        const idTimer = setInterval(() => {
            setCountdown(prev => prev-1);
        },1000);
        console.log("effect")
        return () => {
            clearInterval(idTimer);
        }
    },[])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Countdown;