import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailCourse from "./pages/DetailCourse/DetailCourse";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Account from "./pages/Account/Account";
import UpdateAccount from "./pages/Admin/Users/UpdateAccount/UpdateAccount";
import AdminLayout from "./components/layouts/AdminLayout/AdminLayout";
import CourseManagement from "./pages/Admin/CourseManagement/CourseManagement";
import AddCourse from "./pages/Admin/CourseManagement/AddCourse/AddCourse";
import EditCourse from "./pages/Admin/CourseManagement/EditCourse/EditCourse";
import UserManagement from "./pages/Admin/Users/UserManagement/UserManagement";
import UserMnEditUser from "./pages/Admin/Users/UserMnEditUser/UserMnEditUser";
import UserMnAddUser from "./pages/Admin/Users/UserMnAddUser/UserMnAddUser";
import UserMnGhiDanh from "./pages/Admin/Users/UserMnGhiDanh/UserMnGhiDanh";
import DefaultLayout from "./components/layouts/DefaultLayout/DefaultLayout";
import Courses from "./pages/Courses/Courses";
import AllCourses from "./pages/Courses/AllCourses";
import Spinner from "./components/Spinner/Spinner";
function App() {
  return (
    <BrowserRouter>
      <Spinner />

      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path={""} element={<DefaultLayout />}>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>

          <Route path="/account/:id" element={<Account></Account>}></Route>
          <Route
            path="/update-account/:id"
            element={<UpdateAccount></UpdateAccount>}
          ></Route>
          <Route
            path="/detail-course/:idCourse"
            element={<DetailCourse />}
          ></Route>
        </Route>

        {/* Courses */}

        <Route path="/courses" element={<DefaultLayout />}>
          <Route path="/courses" element={<AllCourses></AllCourses>}></Route>
          <Route
            path="/courses/:courseCode"
            element={<Courses></Courses>}
          ></Route>
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route
            path="/admin/courses"
            element={<CourseManagement></CourseManagement>}
          ></Route>
          <Route
            path="/admin/add-course"
            element={<AddCourse></AddCourse>}
          ></Route>
          <Route
            path="/admin/edit-course/:id"
            element={<EditCourse></EditCourse>}
          ></Route>
          <Route
            path="/admin/user-management"
            element={<UserManagement></UserManagement>}
          ></Route>
          <Route
            path="/admin/add-user"
            element={<UserMnAddUser></UserMnAddUser>}
          ></Route>
        </Route>

        <Route
          path="/user-management/edit-user/:id"
          element={<UserMnEditUser></UserMnEditUser>}
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
