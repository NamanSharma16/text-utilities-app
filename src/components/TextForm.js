import React, { useState } from 'react'

function TextForm(props) {
    

    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLoClick = () => {
        let loText = text.toLowerCase();
        setText(loText);
        props.showAlert("Converted to lowercase", "success");

    }

    const handleOnChange = (event) => {
        setText(event.target.value);

    }

    const clearBox = () => {
        setText("");
        props.showAlert("Text cleared", "success");

    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard", "success");

    }
    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");

    }

    const [text, setText] = useState('');
    
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'grey'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} placeholder = "Enter text here" id="myBox" rows="8"></textarea>
                </div> 
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={clearBox}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
             </div>
             <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                 <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview here"}</p>
             </div>
        </>
    );
}

export default TextForm;
     