import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailCourse from "./pages/DetailCourse/DetailCourse";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Account from "./pages/Account/Account";
import UpdateAccount from "./pages/UpdateAccount/UpdateAccount";
import UserManagement from "./pages/UserManagement/UserManagement";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/detail-course" element={<DetailCourse />}></Route>
        <Route path="/account/:id" element={<Account></Account>}></Route>
        <Route
          path="/update-account/:id"
          element={<UpdateAccount></UpdateAccount>}
        ></Route>
        <Route
          path="/user-management/:id"
          element={<UserManagement></UserManagement>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
