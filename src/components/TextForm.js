// import React ,{useState} from 'react'
import React, { useState, useRef } from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
  const handleUpChange = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted into UpperCase","Success")
  }

  const handleDownChange = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted into LowerCase","Success")
  }
  const handleClearChange = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = " ";
    setText(newText)
    props.showAlert("Text has been Clear","Success")
  }
  const handleBoldChange = () =>{
    // console.log("Uppercase was clicked" + text);
    setIsBold(prevBold => !prevBold);
    props.showAlert("Converted into Bold","Success")
  }

  const handleCopyChange = () =>{
    textAreaRef.current.select();
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been Copied","Success")
  }

  const handleOnChange = (Event) =>{
    // console.log('On Change');
    setText(Event.target.value)
  }
  const[text, setText] = useState('');
  const[isBold, setIsBold] = useState(false);
  const textAreaRef = useRef(null);

  return (
    <>
    <div className="container" style={{
      color:props.mode==='light'?'black':'white'
    }}>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} ref={textAreaRef} onChange={handleOnChange} rows="7"
        style={{ fontWeight: isBold ? "bold" : "normal",
          backgroundColor:props.mode==='dark'?'#141719':'white',
          color:props.mode==='light'?'black':'white'
        }}></textarea>
        </div>

        <button className="btn-primary" onClick={handleUpChange}>Convert to UpperCase</button>

        <button className="btn-primary mx-2 my-2" onClick={handleDownChange}>Convert to LowerCase</button>

        <button className="btn-primary mx-2 my-2" onClick={handleClearChange}>Clear Text</button>

        <button className="btn-primary mx-2 my-2" onClick={handleBoldChange}>Bold</button>

        <button className="btn-primary" onClick={handleCopyChange}>Copy</button>
    </div>
    <div className="container my-3" style={{
      color:props.mode==='light'?'black':'white'
    }}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
