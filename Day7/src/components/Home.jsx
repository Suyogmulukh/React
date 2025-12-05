import React, { useState } from "react";
import ActionButton from "./ActionButton";
import CircleIndicator from "./CircleIndicator";
import TextInput from "./textInput";
import LargeTextArea from "./LargeTextArea";
import OutputDisplay from "./OutputDisplay";
import useTextCounter from "./useTextCounter";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const { wordCount, letterCount } = useTextCounter(inputText);

  const handleCountWords = () => {
    setOutputText(`Total words: ${wordCount}`);
  };

  const handleCountLetters = () => {
    setOutputText(`Total letters: ${letterCount}`);
  };

  const handleToUppercase = () => {
    setOutputText(inputText.toUpperCase());
  };

  const handleToLowercase = () => {
    setOutputText(inputText.toLowerCase());
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-8">
      <div className="flex items-start gap-4">
        <TextInput
          value={inputText}
          onChange={setInputText}
          placeholder="Enter text here..."
        />
        <CircleIndicator />
      </div>
      <LargeTextArea
        value={inputText}
        onChange={setInputText}
        placeholder="Type or paste your text here..."
      />
      <div className="flex gap-4 flex-wrap">
        <ActionButton onClick={handleCountWords} bordered>
          Count Words
        </ActionButton>
        <ActionButton onClick={handleCountLetters}>Count Letters</ActionButton>
        <ActionButton onClick={handleToUppercase}>To Uppercase</ActionButton>
        <ActionButton onClick={handleToLowercase}>To Lowercase</ActionButton>
      </div>
      <OutputDisplay text={outputText} />
    </div>
  );
};

export default Home;
