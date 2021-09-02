import { useContext } from "react";
import SettingsContext from "../context/Settings";

export default () => {
  const context = useContext(SettingsContext);
  return context;
};
