import { createContext } from 'react';

export const modalContext = createContext({
  hasShow: false,
  setShow: () => {},
  hasSignModelShow: true,
  setSignModel: () => {}
});
