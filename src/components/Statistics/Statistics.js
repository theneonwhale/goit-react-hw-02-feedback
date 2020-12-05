import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}

export default Statistics;
