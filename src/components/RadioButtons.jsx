import PropTypes from "prop-types";

export default function RadioButtons({ name, options, legend }) {
  return (
    <div className="form__group radio">
      <h3>{legend}</h3>
      <ul>
        {options.map((opt) => {
          const id = `${name}-${opt.value}`;
          return (
            <li key={id}>
              <input id={id} type="radio" name={name} value={opt.value} />
              <label htmlFor={id}>{opt.label}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

RadioButtons.propTypes = {
  name: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};
