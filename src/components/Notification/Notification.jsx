import PropTypes from 'prop-types';

const Notification = ({ message }) => <p>{message}</p>;

Notification.ptopTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
