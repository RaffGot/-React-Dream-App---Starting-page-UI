import ButtonUI from "../ButtonUI";
import GroupDetails from "../GroupDetails";

const Details = ({ formikHandleSubmit }) => {
  return (
    <div className="md:w-1/2 w-screen  md:h-screen flex flex-col items-center justify-center  p-11 gap-y-2 md:gap-y-6">
      <div className="text-black font-bold text-3xl text-left  self-start ">
        {" Votre Sheynlei c'est.."}
      </div>
      <div className="text-black font-normal text-base text-left  self-start ">
        {
          "7 étapes, 2 files pour prendre note des rencontres, 1 page pour éclairer le sens, 3 interpretations pour vous aider.."
        }
      </div>
      <GroupDetails />
      <ButtonUI type="submit" onClick={formikHandleSubmit}>
        {"Exprimer mes reve >"}
      </ButtonUI>
    </div>
  );
};

export default Details;
