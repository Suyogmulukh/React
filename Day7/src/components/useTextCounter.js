import { useState, useEffect } from "react";

function useTextCounter(text) {
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);

  useEffect(() => {
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    setWordCount(words.length);

    const letters = text.replace(/\s/g, "").length;
    setLetterCount(letters);
  }, [text]);

  return { wordCount, letterCount };
}

export default useTextCounter;
