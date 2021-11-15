// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  title,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div className="field">
      <div className="field-label">{placeholder}</div>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
        title={title}
      />

    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  type: 'text',
  title: '',
};

// == Export
export default Field;
