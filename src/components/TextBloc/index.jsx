import PropTypes from "prop-types";
import SVGIcon from "../Icons";

const TextBloc = ({ iconName, children, className }) => {
  return (
    <div
      className={`flex flex-row p-4 gap-x-2 items-center w-auto h-auto ${className}`}
    >
      <SVGIcon icon={iconName} className="w-14 h-14" />
      <div className="whitespace-normal text-xs font-semibold">{children}</div>
    </div>
  );
};

TextBloc.propTypes = {
  iconName: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TextBloc;
