import React,{useState} from 'react'

export default function TextForm(props) {
    const handleonclick=()=>{
        let newtext=text.toUpperCase();
        settext(newtext)
   
       }
    const handleonchange=(event)=>{
        settext(event.target.value)
    }
    const [text,settext]=useState('Enter Text Here');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="htmlFor" value={text} onChange={handleonchange} id="textbox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleonclick}>Convert into UpperCase</button>
        </div>
    )
}
