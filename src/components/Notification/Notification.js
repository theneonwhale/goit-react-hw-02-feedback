import PropTypes from 'prop-types';
import s from './Notification.module.css';

function Notification({ message }) {
  return <p> {message} </p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
