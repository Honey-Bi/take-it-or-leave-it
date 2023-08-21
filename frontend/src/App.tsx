import { Route, Routes } from "react-router-dom";

import Header from "components/Header";
import Main from "pages/Main";
import { SignIn, SignUp } from "pages/Sign";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
