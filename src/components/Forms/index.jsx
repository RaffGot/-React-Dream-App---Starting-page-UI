import InputUI from "../InputUI";

const Forms = ({ formikProps }) => {
  const { values, errors, handleChange } = formikProps;
  return (
    <div className="md:w-1/2 bg-primary md:bg-transparent w-screen md:h-screen  md:flex flex-col  md:items-center md:justify-center   pl-6 md:pl-20 pr-6 md:pr-32 bg-cover">
      <div className="p-4 text-white font-bold text-3xl text-left  self-start ">
        {"Pour commencer.."}
      </div>
      <div className="p-4 text-white font-normal text-base text-left  self-start md:w-2/3 w-11/12">
        {
          "Faire votre Sheynlei,jouer avec, c'est l'occasion d'ecouter vos reves, de les partager et de prendre confiance dans votre richesse. "
        }
      </div>
      <div className="flex flex-col w-full self-start">
        <div>
          <div className="p-4 text-red-600"> {errors.name}</div>
          <InputUI
            type="text"
            name="name"
            id="name"
            title={"Nom et Prénom : "}
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="p-4 text-red-600"> {errors.intention}</div>
          <InputUI
            type="text"
            name="intention"
            id="intention"
            title={"Mon intention "}
            value={values.intention}
            onChange={handleChange}
            subTitle={"l'intention, l'objectif de ce Shynlei : "}
          />
        </div>
      </div>
    </div>
  );
};

export default Forms;
