import { useEffect, useState } from "react";
// Context
import GeneralContext from "./";
// dummyData
import dummyData from "../../dummyData/pizzas.json"

const GeneralContextProvider = ({ children }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    if(dummyData){
      setData(dummyData)
    }
  }, []);
  
  return <GeneralContext.Provider value={{ data }}>{children}</GeneralContext.Provider>;
};

export default GeneralContextProvider;
