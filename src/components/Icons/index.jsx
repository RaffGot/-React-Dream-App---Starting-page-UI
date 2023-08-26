import PropTypes from "prop-types";

const SVGIcon = ({ icon,extention ="svg",...props }) => {
  return <img src={`/src/assets/${icon}.${extention}`} alt={`${icon} icon`} {...props} />;
};

SVGIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  extention: PropTypes.string,
};
export default SVGIcon;
