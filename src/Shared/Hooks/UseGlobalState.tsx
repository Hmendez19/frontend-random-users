import { useContext } from "react";
import { GlobalStateContext } from "../Contexts/GlobalStateContext";

export const UseGlobalState = () => {
    const context = useContext(GlobalStateContext);
  
    if (!context) {
      throw new Error('useGlobalState debe utilizarse dentro de un GlobalStateProvider');
    }
  
    return context;
};