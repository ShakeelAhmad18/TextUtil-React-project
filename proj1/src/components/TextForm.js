import React,{useState} from "react";

export default function TextForm(props) {
    const [text,settext]=useState("")
    const handleClick=()=>{
        let answer=text.toUpperCase()
        settext(answer);
        props.showalert('Coverted into UpperCase!','success')
    }
    const handleChange=(event)=> {
        settext(event.target.value)
    }
    const hnadleloclick=()=>{
        let lower=text.toLowerCase()
        settext(lower);
        props.showalert('Coverted into lowercase!','success')

    }
    const handleclear=()=>{
        settext(" ");
        props.showalert('Text Clearned!','success')
    }
    const handleCopy=()=>{
        console.log('it copy')
        var Text=document.getElementById('exampleFormControlTextarea1');
        Text.select();
        navigator.clipboard.writeText(Text.value);
        props.showalert('Text Copied!','success')
    }
    const removeextraspaces=()=>{
        let newText=text.split(/[ ]+/)
        settext(newText.join(" "))
        props.showalert('Extra Spaces removed!','success')
    }
    return(
        <div className="mb-3">
            <div className="mb-5">
                <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>{props.heading}</h2>
                </div>
                <textarea value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                <div className="container mt-2">
                <button className="btn btn-primary" onClick={handleClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={hnadleloclick}>Convert Lower Case</button>
                <button className="btn btn-primary" onClick={handleclear}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={removeextraspaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container mt-1" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>Charactor: {text.length},Words: {text.split(' ').length-1}</p>
                <p>Minutes Read: {0.008*text.split(' ').length}</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in above TEXTBOX to preview it"}</p>
            </div>
        </div>
    )
}
