import React, {useState} from 'react';


export default function TextForm(){
    const handleUpperCaseClick = () =>{
        setText(text.toUpperCase());
    }
    const handleLowerCaseClick = () =>{
        setText(text.toLowerCase());
    }
    const handleChange = (event) =>{
        // console.log(text);
        setText(event.target.value);
    }
    const [text, setText] = useState('this is just a test');
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label my-3">Example label</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" value={text} onChange={handleChange} placeholder="Example input placeholder"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
                </div>
                <button className="btn btn-primary" onClick={handleUpperCaseClick}>Upper Case</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerCaseClick}>Lower Case</button>
            </div>
            <div className='container'>
                <h2>Input Data</h2>
                <p>{text} {text.length}</p>
                <p>{text.split(' ').length}</p>
            </div>
        </>

    );
}