import React, { useState } from "react";

const dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores component data." },
  { word: "Props", meaning: "Inputs passed to React components." }
];

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const term = searchTerm.trim();

    if (!term) {
      setResult("");
      setSearched(true);
      return;
    }

    const found = dictionary.find(
      (item) => item.word.toLowerCase() === term.toLowerCase()
    );

    if (found) {
      setResult(found.meaning);
    } else {
      setResult("Word not found");
    }

    setSearched(true);
  };

  return (
    <div>
      <h1>Dictionary App</h1>

      <input
        type="text"
        placeholder="Search for a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {searched && (
        <div>
          <h3>Meaning:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
