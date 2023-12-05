import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailCourse from "./pages/DetailCourse/DetailCourse";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Account from "./pages/Account/Account";
import UpdateAccount from "./pages/UpdateAccount/UpdateAccount";
import AdminLayout from "./components/layouts/AdminLayout/AdminLayout";
import CourseManagement from "./pages/CourseManagement/CourseManagement";
import AddCourse from "./pages/CourseManagement/AddCourse";
import EditCourse from "./pages/CourseManagement/EditCourse";
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
      </Routes>
    </BrowserRouter>
  );
}
export default App;
