import React, { useState } from "react";
import Noun from "./Noun.jsx";
import Pronoun from "./Pronoun.jsx";
import Verb from "./Verb.jsx";
import Tenses from "./Tenses.jsx";
import Preposition from "./Preposition.jsx";
import Determiners from "./Determiners.jsx";
import Conjunction from "./Conjunction.jsx";
import Inrerjection from "./Interjection.jsx";
import Punctuation from "./Punctuation.jsx";
import ReportedSpeech from "./ReportedSpeech.jsx";
import Home from "../../components/Home.jsx";
import {
  ActivePassive,
  Adjective,
  Adverb,
} from "../../components/notes";// mover all the other components to /components/notes folder, export and import like i do

const Notes = () => {
  const [selectedPart, setSelectedPart] = useState(<Home />);
  const handlePartClick = (part) => {
    setSelectedPart(part);
  };

  const content = [
    { name: "Noun", component: <Noun /> },
    { name: "Pronoun", component: <Pronoun /> },
    { name: "Adjective", component: <Adjective /> },
    { name: "Determiners", component: <Determiners /> },
    { name: "Verb", component: <Verb /> },
    { name: "Tenses", component: <Tenses /> },
    { name: "Adverb", component: <Adverb /> },
    { name: "Preposition", component: <Preposition /> },
    { name: "Conjunction", component: <Conjunction /> },
    { name: "Interjection", component: <Inrerjection /> }, // Correct spelling from 'Inrerjection' to 'Interjection' if it's a typo
    { name: "Punctuation", component: <Punctuation /> },
    { name: "ActivePassive", component: <ActivePassive /> },
    { name: "ReportedSpeech", component: <ReportedSpeech /> },
  ];


  return (
    <>
      <div className="left-side-nav">
        <h1 className="notes">Notes</h1>
        {content.map((item, index) => (
          <button
            className={`inner-left-side-nav ${selectedPart === item ? "active" : ""
              }`}
            key={index}
            onClick={() => handlePartClick(item)}>
            {item.name}
          </button>
        ))}
      </div>
      <div className="container">
        <h2>{selectedPart.name}</h2>
        <div> {selectedPart.component} </div>
      </div>
    </>
  );
};

export default Notes;
