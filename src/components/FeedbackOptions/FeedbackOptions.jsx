import PropTypes from 'prop-types';

import capitalize from 'components/capitalize';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {capitalize(option)}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
