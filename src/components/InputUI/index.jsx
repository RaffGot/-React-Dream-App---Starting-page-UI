import PropTypes from "prop-types";

const InputUI = ({ title, subTitle, ...props }) => {
  return (
    <div className="flex flex-col w-auto p-4 gap-y-6 ">
      <div className="flex flex-col gap-y-4">
        <div className="text-white text-2xl font-medium ">{title}</div>
        {subTitle && (
          <div className="text-white text-lg font-thin">{subTitle}</div>
        )}
      </div>
      <input
        className="border-x-0 border-t-0 border-b-4 border-b-white bg-transparent text-3xl pb-7 text-white font-medium focus:outline-none"
        {...props}
      />
    </div>
  );
};
InputUI.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export default InputUI;
