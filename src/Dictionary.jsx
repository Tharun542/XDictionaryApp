import React, { useState } from "react";

export default function Dictionary(){

    const [inputText, setInputText] = useState("");
    const [suggestText, setSuggestText] = useState("");
    const [searched, setSearched] = useState(false);

    const XDict = 
[
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
]

const handleDictionary =()=>{
    if(!inputText){
        setSuggestText("");
        setSearched(false);
        return;
    }

    const foundWord = XDict.find((item)=>
        item.word.toLowerCase() === inputText.toLowerCase()
    );
      setSearched(true);
    if(foundWord){
        setSuggestText(foundWord.meaning);
      
    }else{
        setSuggestText("");
        
    }
}

return(
    <div>
        <h1>
            Dictionary App
        </h1>
        <input type="text" value={inputText} placeholder="Search for a word" onChange={(e)=>setInputText(e.target.value)}/>
        <button onClick={handleDictionary}>Search</button>
       {searched && suggestText ? (<p>Definition: {suggestText}</p>) : (searched && !suggestText && (<p>word is not in the dictionary</p>))}
       {}
    </div>
)
}