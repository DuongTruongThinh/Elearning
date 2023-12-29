import axios from "axios";
import { BASE_URL, TOKEN_CYBER, configHeader, https } from "./config";

export const courseServ = {
  getListCourse: (id) =>
    https.get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`),
  getListCourseWithPaginate: (page) =>
    https.get(
      `/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=8&MaNhom=GP09`
    ),
  getCategoryList: () => https.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc"),
  getCourseFromCategory: (courseCode) =>
    https.get(
      `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${courseCode}&MaNhom=GP09`
    ),
  addImageCourse: (data) =>
    https.post("/QuanLyKhoaHoc/ThemKhoaHocUploadHinh", data),
  getCourses: () => https.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09"),
  addCourse: (data) => https.post("/QuanLyKhoaHoc/ThemKhoaHoc", data),
  editCourse: (data) => https.put("/QuanLyKhoaHoc/CapNhatKhoaHoc", data),
  deleteCourse: (id) =>
    https.delete(`/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`),
};
export let registerApi = (data) => {
  // Gửi thông tin từ form đăng ký
  return axios({
    method: "POST",
    url: `${BASE_URL}/QuanLyNguoiDung/DangKy`,
    data: {
      taiKhoan: data.taiKhoan,
      matKhau: data.matKhau,
      email: data.email,
      soDt: data.prefix + data.soDt,
      maNhom: "GP01",
      maLoaiNguoiDung: "HV",
      hoTen: data.hoTen,
    },
    headers: {
      TokenCybersoft: TOKEN_CYBER,
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJjZGUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJHViIsIm5iZiI6MTcwMTUzODcwNSwiZXhwIjoxNzAxNTQyMzA1fQ.5-cq5jm1JndFoR3uxKuT3t_i2XnQHafbBvEDqJB9Tmc",
    },
  });
};
export let loginApi = (values) => {
  axios.post(`${BASE_URL}/QuanLyNguoiDung/DangNhap`, values, {
    headers: configHeader(),
  });
};
export let getAccount = (values) => {
  return axios.post(`${BASE_URL}/QuanLyNguoiDung/ThongTinTaiKhoan`, values, {
    headers: {
      TokenCybersoft: TOKEN_CYBER,
      // Authorization: AUTHOR,
    },
  });
};
