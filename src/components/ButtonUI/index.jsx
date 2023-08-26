import PropTypes from "prop-types";

const ButtonUI = ({ className, children, ...props }) => {
  return (
    <div>
      <button
        className={`bg-primary rounded-lg w-auto h-auto flex items-center py-2 px-4 drop-shadow-xl hover:bg-secondary ${className} text-white `}
        {...props}
      >
        <div>{children}</div>
      </button>
    </div>
  );
};

ButtonUI.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ButtonUI;
