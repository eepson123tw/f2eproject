import React from 'react';
import { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const comp = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.box', { rotation: '+=360' });
      // ScrollTrigger.create({ trigger: '#my-id' });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="App">
      <div className="div" ref={comp}>
        <h1 className="box  flex h-20 w-[200px] flex-1 bg-red-100">123123123123123123123</h1>
      </div>
    </div>
  );
}

export default App;
