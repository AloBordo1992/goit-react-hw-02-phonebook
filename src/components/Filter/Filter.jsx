import PropTypes from 'prop-types';

export function Filter(props) {
  return (
    <div>
      <label>
        Find contacts by name <br />
        <input
          type="text"
          name="name"
          value={props.value}
          onChange={event => props.onFilterChange(event.currentTarget.value)}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
