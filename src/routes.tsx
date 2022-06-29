import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/main/main";

export const RoutesList = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};
