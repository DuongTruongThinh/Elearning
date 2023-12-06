import React from "react";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import FormUpdateAccount from "./FormUpdateAccount";

export default function UpdateAccount() {
  return (
    <div>
      <Header></Header>
      <FormUpdateAccount></FormUpdateAccount>
      <Footer></Footer>
    </div>
  );
}
