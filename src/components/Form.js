import React, {useState} from 'react'

export default function Form(props) {
    const upperCase = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Coverted to uppercase!', 'success');
    }

    const lowerCase = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Coverted to lowercase!', 'success');
    }

    const clearText = ()=> {
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (e)=> {
        setText(e.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}> 
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8" style={{backgroundColor: props.mode === 'dark'?'rgb(52, 52, 52)':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={upperCase}>Uppercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={lowerCase}>Lowercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
        </div>
        <div className="container my-5" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
