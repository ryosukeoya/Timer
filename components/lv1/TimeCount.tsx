import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

type Props = {
  setTimerChange: any;
  timerChange: boolean;
  selectTimer: number;
  countStart: boolean;
  slctSec: number | null;
  slctMin: number | null;
};

//無駄なreder減らすためにslctMin,slctSecとsec,min分けてる
const TimeCount: React.VFC<Props> = ({
  setTimerChange,
  timerChange,
  selectTimer,
  countStart,
  slctSec,
  slctMin,
}: Props) => {
  if (!countStart) {
    return null;
  }
  const [sec, setSec] = useState(slctSec);
  const [min, setMin] = useState(slctMin);
  const [seconds, setSeconds] = useState(selectTimer / 1000);
  const [timeoutID, setTimeoutID] = useState(null);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (sec === 0 && min === 0) {
        return;
      } else if (sec === 0) {
        setMin(min - 1);
        setSec(59);
      } else {
        setSec(sec - 1);
      }
      console.log(sec);
    }, 1000);
    setTimeoutID(timeoutID);
  }, [sec]);

  useEffect(() => {
    if (selectTimer < 60000) {
      setSec(selectTimer / 1000);
      setMin(0);
    } else {
      setSeconds(selectTimer / 1000);
      setMin(selectTimer / 60000);
      setSec(selectTimer % 60000);
    }

    //ここで前のタイマーを止めないといけない
    //これでいけた
    clearTimeout(timeoutID);
  }, [timerChange]);

  if (sec < 10 && min < 10) {
    return <Style>{`残り0${min}:0${sec}`}</Style>;
  } else if (sec < 10) {
    return <Style>{`残り${min}:0${sec}`}</Style>;
  } else if (min < 10) {
    return <Style>{`残り0${min}:${sec}`}</Style>;
  } else {
    return <Style>{`残り${min}:${sec}`}</Style>;
  }
};

export default TimeCount;

const Style = styled.div`
  color: #e5e5e5;
  font-size: 8rem;
`;
