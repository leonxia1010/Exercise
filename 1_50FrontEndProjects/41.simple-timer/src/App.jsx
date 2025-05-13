import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [isPause, setIsPause] = useState(false);
  const [countDown, setCountDown] = useState(60);
  const [isStart, setIsStart] = useState(false);

  const minutes = Math.floor(countDown / 60);
  const seconds = countDown - minutes * 60;

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  useEffect(() => {
    let timer;
    const startTime = Date.now();
    if (isStart && !isPause && countDown === 60) {
      setCountDown((prev) => prev - 1);
    }

    if (isStart && !isPause && countDown > 0) {
      timer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const newCount = 60 - elapsed;
        setCountDown(newCount);
      }, 250);
    }

    if (countDown === 0) {
      reset();
    }

    return () => {
      clearInterval(timer);
    };
  }, [isStart, isPause]);

  const reset = () => {
    setCountDown(60);
    setIsPause(false);
    setIsStart(false);
  };

  return (
    <div className='container'>
      <h3>Timer</h3>
      <div className='timer'>
        <div className='clock'>
          <svg width='210' height='210'>
            <circle className='bg' cx='105' cy='105' r='100' fill='#314155' />
            <circle
              className='progress'
              cx='105'
              cy='105'
              r='100'
              strokeWidth='4'
              stroke='#fff'
              fill='none'
              style={{
                strokeDasharray: `${2 * Math.PI * 100}`,
                transition:
                  isStart && !isPause ? 'stroke-dashoffset 0.5s ease' : '',
                strokeDashoffset: `${-scale(
                  countDown,
                  0,
                  60,
                  2 * Math.PI * 100,
                  0
                )}`,
              }}
            />
            <circle
              className='dot'
              cx='105'
              cy='5'
              r='4'
              fill='#fff'
              style={{
                transform: `rotate(${-scale(countDown, 0, 60, 0, 360)}deg)`,
                transition: isStart && !isPause ? 'transform 0.5s ease' : '',
              }}
            />
          </svg>
          <p id='time'>
            <span id='minute'>{minutes.toString().padStart(2, '0')}</span>
            <span>:</span>
            <span id='second'>{seconds.toString().padStart(2, '0')}</span>
          </p>
        </div>
      </div>
      <div className='buttons'>
        <button className='button' id='reset' onClick={reset}>
          <i className='fa-solid fa-repeat'></i>
        </button>
        <button
          className='button'
          id='start'
          onClick={() => {
            !isStart ? setIsStart(true) : setIsPause(!isPause);
          }}
        >
          <i
            className={`${
              isPause || !isStart ? 'fa-solid fa-play' : 'fa-solid fa-pause'
            }`}
          ></i>
        </button>
      </div>
    </div>
  );
};
