import { useState } from "react";

function useInput() {
  const [input, setinput] = useState("");

  const onChange = (e) => {
    setinput(e.target.value);
  };
  return [input, onChange];
}

export default useInput;
