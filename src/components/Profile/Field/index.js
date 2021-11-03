// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './styles.scss';

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  minLength,
  pattern,
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
        minLength={minLength}
        pattern={pattern}
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
  minLength: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  type: 'text',
  minLength: '',
  // eslint-disable-next-line no-useless-escape
  pattern: '',
  title: '',
};

// == Export
export default Field;
