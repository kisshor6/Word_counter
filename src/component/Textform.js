import React, { useState } from 'react'

export default function Textform(props) {



    const [text, setText] = useState('Enter from here');
    const handleToUpp = () => {
        let upper = text.toUpperCase();
        setText(upper);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleToLow = () => {
        let lower = text.toLowerCase();
        setText(lower);
        props.showAlert("Converted to Lowercase", "success");
    }
    const clear = () => {
        let clear = '';
        setText(clear);
        props.showAlert("Text has been cleared", "success");
    }
    const copy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");
    }
    const onHandleChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='mt-3'>Please Concern Your Problem</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#393c4a' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={onHandleChange} rows="10"></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-primary' onClick={handleToUpp}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className='my-2 mx-2 btn btn-primary' onClick={handleToLow}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className='my-2 mx-2 btn btn-primary' onClick={clear}>clear Text</button>
                <button disabled={text.length === 0} className='my-2 mx-2 btn btn-primary' onClick={copy}>Copy Text</button>
            </div>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview it"}</p>
            </div>
        </>
    )
}
