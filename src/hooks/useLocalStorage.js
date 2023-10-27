import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem(key));
    if (storedValue) {
      return storedValue;
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const changeHandler = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setData(newValue);
  };

  return [data, changeHandler];
};
