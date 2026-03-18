import React, { useState } from 'react';
import "./App.css";

const TextUtility = () => {
  const [text, setText] = useState("");

  const handleUpClick = () => setText(text.toUpperCase());
  const handleLoClick = () => setText(text.toLowerCase());
  const handleClear = () => setText("");
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!"); 
  };
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" ").trim());
  };

  const wordCount = text.split(/\s+/).filter((element) => element.length !== 0).length;
  const readingTime = (0.008 * wordCount).toFixed(2);

  return (
    <div className="container">
      <h1 className="title">Text Utility App</h1>
      
      <textarea 
        className="text-area" 
        placeholder="Type or paste here..." 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        rows="8"
      />

<div className="button-group">
  <button className="btn btn-primary" onClick={handleUpClick}>
     UPPERCASE
  </button>
  
  <button className="btn btn-primary" onClick={handleLoClick}>
    lowercase
  </button>

  <button className="btn btn-success" onClick={handleExtraSpaces}>
    ✨ Clean Spaces
  </button>

  <button className="btn btn-outline" onClick={handleCopy}>
    📋 Copy Text
  </button>

  <button className="btn btn-danger" onClick={handleClear}>
    🗑️ Clear
  </button>
</div>

      <div className="summary-box">
        <div className="stat-card">
          <h3>Words</h3>
          <p>{wordCount}</p>
        </div>
        <div className="stat-card">
          <h3>Characters</h3>
          <p>{text.length}</p>
        </div>
        <div className="stat-card">
          <h3>Reading Time</h3>
          <p>{readingTime}m</p>
        </div>
      </div>

      <div className="preview-section">
        <h3>Preview</h3>
        <p className="preview-text">
          {text.length > 0 ? text : "Nothing to preview yet..."}
        </p>
      </div>
    </div>
  );
};

export default TextUtility;