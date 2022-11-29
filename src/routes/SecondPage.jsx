import React, { useState } from 'react';
import Header from '../components/secondPage/Header';
import Main from '../components/secondPage/Main';
import ProcessModal from '../components/secondPage/ProcessModal';

import { modalContext } from '../utils/modalContext';
export default function SecondPage() {
  const [hasShow, setShow] = useState(false);
  return (
    <div className="h-[100vh] overflow-hidden">
      <Header></Header>
      <Main></Main>
      <modalContext.Provider value={{ hasShow, setShow }}>
        <ProcessModal></ProcessModal>
      </modalContext.Provider>
    </div>
  );
}
