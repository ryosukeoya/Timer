import React from 'react';
import { useState } from 'react';
import Button from '../lv1/Button';
import Log from '../lv1/Log';

const Timer: React.VFC = () => {
  const [word, setWord] = useState('');
  const log = () => {
    console.log('a');
    setWord('３秒経過しました');
    function sound(type, sec) {
      console.log('soundが鳴りました');
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.connect(ctx.destination);
      osc.start();
      osc.stop(sec);
    }

    sound('sign', 0.3);
  };
  const click: VoidFunction = () => {
    console.log(click);
    setTimeout(log, 3000);
  };

  return (
    <>
      <Button click={click} />
      <Log word={word} />
    </>
  );
};

export default Timer;