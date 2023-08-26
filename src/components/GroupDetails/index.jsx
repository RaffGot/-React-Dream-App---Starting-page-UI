import { blocTextData } from "../../utils/staticData/constants";
import TextBloc from "../TextBloc";

const GroupDetails = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 md:mt-4">
      {blocTextData.map((item, index) => (
        <TextBloc key={index} iconName={item.svgName}>{`${index + 1}- ${
          item.text
        }`}</TextBloc>
      ))}
    </div>
  );
};

export default GroupDetails;
