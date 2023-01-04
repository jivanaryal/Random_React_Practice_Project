import { useContext } from "react";
import Tours1 from "./Tours1";
import { PersonContext } from "./Tour";

export const Tours = () => {
  const MDdata = useContext(PersonContext);
  return (
    <>
      {MDdata.people.map((props) => {
        return <Tours1 key={props.id} {...props} />;
      })}
    </>
  );
};

export default Tours;
