import React, { useState } from "react";

export default function Dictionary(){

    const [inputText, setInputText] = useState("");
    const [suggestText, setSuggestText] = useState("");

    const XDict = 
[
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
]

const handleDictionary =()=>{
    if(!inputText){
        setSuggestText("");
        return;
    }

    const foundWord = XDict.find((item)=>
        item.word.toLowerCase() === inputText.toLowerCase()
    );
    if(foundWord){
        setSuggestText(foundWord.meaning);
      
    }else{
        setSuggestText("Word not found in the dictionary");
        
    }
}

return(
    <div>
        <h1>
            Dictionary App
        </h1>
        <input type="text" value={inputText} placeholder="Search for a word" onChange={(e)=>setInputText(e.target.value)}/>
        <button onClick={handleDictionary}>Search</button>
       <p>Definition:</p>
       <p>{suggestText}</p>
       
    </div>
)
}