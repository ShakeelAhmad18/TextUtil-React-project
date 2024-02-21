import React,{useState} from "react";

export default function TextForm(props) {
    const [text,settext]=useState("")
    const handleClick=()=>{
        let answer=text.toUpperCase()
        settext(answer)
    }
    const handleChange=(event)=> {
        settext(event.target.value)
    }
    const hnadleloclick=()=>{
        let lower=text.toLowerCase()
        settext(lower)
    }
    return (
        <div className="mb-3">
            <div classname="mb-5">
                <h2>{props.heading}</h2>
                <textarea value={text} onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                <div className="container mt-2">
                <button className="btn btn-primary" onClick={handleClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={hnadleloclick}>Convert Lower Case</button>
                </div>
            </div>
            <div className="container mt-4">
                <p>Words: {text.length}</p>
            </div>
        </div>
    )
}
