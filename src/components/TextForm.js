import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleLoClick=()=>{
        //console.log("Uppercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");
    }
    const handleOnChange=(event)=>{
        //console.log("On Change");
        setText(event.target.value);
       // props.showAlert("Text Cleared!","success");
    }
    const handleClearClick=()=>{
        let newText= ' ';
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }
    const[text,setText]=useState('');
    const handleCopy = () =>{
        //console.log("copy");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!","success");
    }
    const handleSpaces = () =>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!","success");
    } 
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes read time</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter in TextBox to Preview"}</p>
        </div>
        </>
    )
}
