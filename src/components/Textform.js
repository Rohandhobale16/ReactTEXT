import React, { useState, useEffect } from 'react';

export default function Textform(props) {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('Enter The text');
    const [wordCount, setWordCount] = useState(0);
    const [readingTime, setReadingTime] = useState(0);
   

    const handleUppercase = () => {
        setText(text.toUpperCase());
    };

    const handleLowercase = () => {
        setText(text.toLowerCase());
    };

    const handleCapitalizeFirstLetter = () => {
        setText(text.charAt(0).toUpperCase() + text.slice(1));
    };

    const handleRemoveExtraSpaces = () => {
        setText(text.replace(/\s+/g, ' ').trim());
    };
    useEffect(() => {
        const words = text.trim().split(/\s+/);
        const wordsPerMinute = 30; // Adjust this value as needed
        const totalMinutes = words.length / wordsPerMinute;
        const minutes = Math.floor(totalMinutes);
        const seconds = Math.round((totalMinutes - minutes) * 60);
        setReadingTime({minutes, seconds});
        setWordCount(words.length);
    }, [text]);

  const handleTextChange = (e) => {
      setText(e.target.value);
  };

    return (
      <div className="container">
            <center><h1>{props.heading}</h1></center>
            <textarea className="form-control mb-3" name="r" value={text} onChange={handleTextChange} />
            <div class="btn-group mb-3" role="group" aria-label="Text Actions">
    <div class="row">
        <div class="col-12 col-md-6 mb-2">
            <button class="btn btn-primary btn-block" onClick={handleUppercase}>Convert to Uppercase</button>
        </div>
        <div class="col-12 col-md-6 mb-2">
            <button class="btn btn-primary btn-block" onClick={handleLowercase}>Convert to Lowercase</button>
        </div>
        <div class="col-12 col-md-6 mb-2">
            <button class="btn btn-primary btn-block" onClick={handleCapitalizeFirstLetter}>Capitalize First Letter</button>
        </div>
        <div class="col-12 col-md-6 mb-2">
            <button class="btn btn-primary btn-block" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>
    </div>
</div>

            <div>
                <p>Number of words: {wordCount}</p>
                <p>Estimated reading time: {readingTime.minutes} minute(s) {readingTime.seconds} second(s)</p>
            </div>

            <p>You clicked {count} times</p>
            <button className="btn btn-primary mb-3" onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
