import PropTypes from "prop-types";

export default function Checkboxes({ name, options, legend }) {
  return (
    <div className="form__group">
      <h3>{legend}</h3>
      <ul>
        {options.map((opt) => (
          <li key={opt.value}>
            <label>
              <input name={name} type="checkbox" value={opt.value} />
              {opt.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

Checkboxes.propTypes = {
  name: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};
