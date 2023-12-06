import React from "react";
import FormRegister from "./FormRegister";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import StepRegister from "./Step";
export default function Register() {
  return (
    <div>
      <Header></Header>
      <StepRegister></StepRegister>
      <FormRegister></FormRegister>
      <Footer></Footer>
    </div>
  );
}
