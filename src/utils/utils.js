import converter from "number-to-words";

export const saveToLocalStorage = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("WIDGETS", serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem("WIDGETS");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

export const numberToWords = (num) => {
  if (!num) return "";
  try {
    return converter.toWords(num);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

export const isNumberIsInteger = (value) => {
  const er = /^-?[0-9]+$/;
  try {
    return er.test(value);
  } catch (e) {
    console.warn(e);
    return false;
  }
};
