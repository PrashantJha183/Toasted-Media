// import React, { useState } from "react";
// import GoogleLoginButton from "./Components/Google/GoogleLoginButton";
// import GoogleLogoutButton from "./Components/Google/GoogleLogoutButton";
// import GoogleProfile from "./Components/Google/GoogleProfile";
// import getAccessToken from "./Components/Microsoft/Auth";
// import MicrosoftLoginButton from "./Components/Microsoft/MicrosoftLoginButton";
// import MicrosoftLogoutButton from "./Components/Microsoft/MicrosoftLogoutButton";
// import MicrosoftProfile from "./Components/Microsoft/MicrosoftProfile";

// const App = () => {
//   const [userData, setUserData] = useState(null);

//   const handleGoogleLogin = (response) => {
//     setUserData(response.profileObj);
//   };

//   const handleLogout = () => {
//     setUserData(null);
//   };

//   const [account, setAccount] = useState(null);

//   const handleLogin = (account) => {
//     setAccount(account);
//   };
//   return (
//     <>
//       {/* <div className="container">
//         <h1 className="text-center">Toasted Media</h1>
//         <GoogleProfile />
//       </div> */}

//       <div className="text-center">
//         <h1 className="text-center">Login and Profile</h1>
//         {userData ? (
//           <>
//             <GoogleProfile userData={userData} />
//             <GoogleLogoutButton onLogout={handleLogout} />
//           </>
//         ) : (
//           <GoogleLoginButton onLogin={handleGoogleLogin} />
//         )}
//       </div>

//       <div className="text-center my-3">
//         {!account ? (
//           <MicrosoftLoginButton onLogin={handleLogin} />
//         ) : (
//           <div>
//             <MicrosoftProfile account={account} />
//             <MicrosoftLogoutButton />
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default App;

import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToastedMedia from "./Components/Script";
import NoteState from "./Components/Context/NoteState";
import Blog from "./Components/CreateBlog";
// import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ToastedMedia />}></Route>
          </Routes>

          <Routes>
            <Route path="/blog" element={<Blog />}></Route>
          </Routes>

          {/* <Routes>
            <Route path="/login" element={<Login />}></Route>
          </Routes> */}

          <Routes>
            <Route path="/about" element={<About />}></Route>
          </Routes>

          <Routes>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>

          <Routes>
            <Route path="/portfolio" element={<Portfolio />}></Route>
          </Routes>

          <Routes>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
};
export default App;
