import { Route, Routes } from "react-router-dom";

import Header from "components/Header";
import Main from "pages/Main";
import { SignIn, SignUp } from "pages/Sign";
import Footer from "components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
