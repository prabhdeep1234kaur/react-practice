import React, { useEffect, useState } from "react";

/**
 * Debounce the text : or delay the text when displayed
 *1. create custom hook : useDeBounce
 2. create a state within the hook that will hold the text
 *
 */
const useDebounce = (text, delay) => {
  const [deb, setDeb] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeb(text);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [text, delay]);
  return deb;
};
const Debounce = () => {
  const [text, setDebounceText] = useState("");
  const debouncedText = useDebounce(text, 1000);
  const handleTextChange = (e) => {
    setDebounceText(e.target.value);
    console.log(debouncedText);
  };

  return (
    <>
      <div>
        <h1>Debound Hook</h1>
      </div>
      <div>
        <input
          type="text"
          value={text}
          name="d"
          placeholder="enter text here.."
          onChange={handleTextChange}
        />
      </div>
      <div>Here is the Text : {debouncedText}</div>
    </>
  );
};

export default Debounce;
