import React, { useState } from 'react';
import Header from '../components/secondPage/Header';
import Main from '../components/secondPage/Main';
import Pdf from '../components/secondPage/Pdf';
import ProcessModal from '../components/secondPage/ProcessModal';
import SignModel from '../components/secondPage/SignModel';

import { modalContext } from '../utils/modalContext';
import { useSearchParams } from 'react-router-dom';
export default function SecondPage() {
  const [hasShow, setShow] = useState(false);
  const [hasSignModelShow, setSignModel] = useState(true);
  const [searchParams, setSignModelShow] = useSearchParams();

  let hasMethods = searchParams.get('methods') === 'sign';

  return (
    <div className="h-[100vh] overflow-hidden">
      <Header></Header>
      <modalContext.Provider value={{ hasShow, setShow, hasSignModelShow, setSignModel }}>
        {!hasMethods && <Main></Main>}
        {hasMethods && <Pdf></Pdf>}
        <ProcessModal></ProcessModal>
        <SignModel></SignModel>
      </modalContext.Provider>
    </div>
  );
}
