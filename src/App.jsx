import { sumIpAdress } from "./utils/helper/dataHelper";
import { useFetchData } from "./utils/hooks/useFetchData";
import Details from "./components/Details";
import Forms from "./components/Forms";
import "./App.css";
import NavBar from "./components/NavBar";
import { Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  intention: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("Le nom et le prenom est exigé"),
  intention: Yup.string().required("l'intention est exigé"),
});

function App() {
  const { data, loading, error } = useFetchData();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log("data", data);

  const sumOfNumbers = sumIpAdress(data?.ipAddress);
  console.log("sumOfNumbers : ", sumOfNumbers);

  return (
    <div className="relative">
      <NavBar />
      <div className="background-div">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            if (sumIpAdress(data.ipAddress) > 100) {
              console.log("Data", { formsData: values, endPintData: data });
              alert("OK");
            } else {
              alert("KO");
            }
          }}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <div className="flex flex-col  md:flex-row justify-center items-center  md:h-screen w-screen">
              <Forms formikProps={{ values, errors, handleChange }} />
              <Details formikHandleSubmit={handleSubmit} />
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
