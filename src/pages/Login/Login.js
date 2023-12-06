import React from "react";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import FormLogin from "./FormLogin";

export default function Login() {
  return (
    <div>
      <Header></Header>
      <FormLogin></FormLogin>
      <Footer></Footer>
    </div>
  );
}
