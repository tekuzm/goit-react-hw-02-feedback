const FeedbackOptions = ({ options }) => (
  <div>
    {options.map(({ name }) => (
      <button key={name}>{name}</button>
    ))}
  </div>
);

export default FeedbackOptions;
