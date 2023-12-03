import axios from "axios";
import { AUTHOR, BASE_URL, TOKEN_CYBER, configHeader, https } from "./config";

export const courseServ = {
  // Lấy một khóa học demo cho detail page
  getListCourse: () =>
    https.get("/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=ITEC2107"),
  getCategoryList: () => https.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc"),
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
      // Authorization ?
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
