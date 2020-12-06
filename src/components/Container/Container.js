import PropTypes from 'prop-types';
import s from './Container.module.css';

function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

Notification.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
