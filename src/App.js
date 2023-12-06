import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailCourse from "./pages/DetailCourse/DetailCourse";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Account from "./pages/Account/Account";
import UpdateAccount from "./pages/UpdateAccount/UpdateAccount";
import AdminLayout from "./components/layouts/AdminLayout/AdminLayout";
import CourseManagement from "./pages/CourseManagement/CourseManagement";
import AddCourse from "./pages/CourseManagement/AddCourse/AddCourse";
import EditCourse from "./pages/CourseManagement/EditCourse/EditCourse";
import UserManagement from "./pages/UserManagement/UserManagement";
import UserMnEditUser from "./pages/UserMnEditUser/UserMnEditUser";
import UserMnAddUser from "./pages/UserMnAddUser/UserMnAddUser";
import UserMnGhiDanh from "./pages/UserMnGhiDanh/UserMnGhiDanh";
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
        <Route path="/admin" element={<AdminLayout />}>
          {/* USER MANAGEMENT */}
          {/* <Route
            path=""
            element={}
          ></Route> */}
          <Route
            path="/admin/courses"
            element={<CourseManagement></CourseManagement>}
          ></Route>
          <Route
            path="/admin/add-course"
            element={<AddCourse></AddCourse>}
          ></Route>
          <Route
            path="/admin/edit-course"
            element={<EditCourse></EditCourse>}
          ></Route>
        </Route>
        <Route
          path="/user-management/:id"
          element={<UserManagement></UserManagement>}
        ></Route>
        <Route
          path="/user-management/edit-user/:id"
          element={<UserMnEditUser></UserMnEditUser>}
        ></Route>
        <Route
          path="/user-management/add-user"
          element={<UserMnAddUser></UserMnAddUser>}
        ></Route>
        <Route
          path="/user-management/course-registration/:id"
          element={<UserMnGhiDanh></UserMnGhiDanh>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
