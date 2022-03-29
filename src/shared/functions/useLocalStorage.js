import { useState, useEffect } from "react";
import store from "store2";

export const useLocalStorage = (key, initialValue) => {
  const item = store.get(key);
  const [value, setValue] = useState(item || initialValue);

  useEffect(() => {
    store.set(key, value);
  }, [value, key]);
  return [value, setValue];
};
