import { useState, useEffect } from 'react';
import styles from "index.module.css"

const CountdownDisplay = () => {
  const [countdownValue, setCountdownValue] = useState<number>(-3);

  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const fetchCountdownValue = async () => {
      try {
        const response = await fetch('/api/hoge'); 
        const data = await response.json();
        setCountdownValue(data.value); 
      } catch (error) {
        console.error('Error fetching countdown value:', error);
      }
    };

    fetchCountdownValue();
  }, []);

  useEffect(() => {
    let text = '';
    switch (countdownValue !== null) {
      case -3:
        text = '3';
        break;
      case -2:
        text = '2';
        break;
      case -1:
        text = '1';
        break;
      case 0:
        text = 'スタート!';
        break;
      default:
        text = '';
    }
    setDisplayText(text);
  }, [countdownValue]);

  return (
    <div className={styles.container}>
    <h1 className={styles.text}>{displayText}</h1>
  </div>
  );
};

export default CountdownDisplay;
