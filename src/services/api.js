import { https } from "./config";

export const courseServ = {
  // Lấy một khóa học demo cho detail page
  getListCourse: () =>
    https.get("/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=ITEC2107"),
  getCategoryList: () => https.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc"),
};
