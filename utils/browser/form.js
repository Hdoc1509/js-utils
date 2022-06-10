/**
 * Retrieves data as an object from a HTMLFormElement
 * @param  {HTMLFormElement} form Form element
 * @return {{}}      Data returned as an object
 */
export const formInputs = (form) => Object.fromEntries(new FormData(form));
