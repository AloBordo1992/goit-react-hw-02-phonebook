import PropTypes from 'prop-types';

export function ContactItem(props) {
  return (
    <li>
      <p>
        {props.name}: {props.number}
      </p>
      <button type="button" onClick={() => props.OnBtnDelClick(props.id)}>
        X
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  OnBtnDelClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
