import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here...");

  const handleOnchange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('String has been converted in uppercase' , 'success')
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('String has been converted in lowercase' , 'success')
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert('Textarea has been cleared' , 'success')
  };


  const handleCopy= () => {
   let textBox = document.getElementById('textBox');
   textBox.select();
   console.log(navigator);
   
   navigator.clipboard.writeText(textBox.value)
   props.showAlert('Copied to clipboard' , 'success')
  };

  return (
    <>
      <div className="container">
        <div className="form-group my-5">
          <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
          <label htmlFor="textBox"></label>
          <textarea style={props.textareaStyle}
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="textBox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary mt-3 mx-2" onClick={handleOnClick}>
            Convert to uppercase
          </button>

          <button className="btn btn-primary mt-3 mx-2" onClick={handleLoClick}>
            Convert to Lowercase
          </button>

          <button className="btn btn-primary mt-3 mx-2" onClick={handleClearClick}>
            Clear Text
          </button>

          <button className="btn btn-primary mt-3 mx-2" onClick={handleCopy}>
            Copy Text
          </button>



        </div>
      </div>
      <div className="container">
        <h5 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your Text Summary</h5>
        <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h2>
        <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text}</p>
      </div>
    </>
  );
}
