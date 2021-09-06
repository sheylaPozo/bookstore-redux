import PropTypes from 'prop-types';

const Button = ({
  name, clickHandler, btnType,
}) => {
  const handleClick = () => {
    clickHandler();
  };

  return (
    // eslint-disable-next-line react/button-has-type
    <button onClick={clickHandler ? handleClick : null} type={btnType}>{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
  btnType: PropTypes.string,
};

Button.defaultProps = {
  name: '',
  clickHandler: null,
  btnType: 'button',
};

export default Button;
