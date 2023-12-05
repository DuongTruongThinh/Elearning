import React from "react";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import Banner from "./Banner";
import BlogsComponent from "./Blog/BlogsComponent";
import FromTheBlogsComponent from "./FromTheBlogs/FromTheBlogsComponent";
import FromTheBlogs2Component from "./FromTheBlogs/FromTheBlogs2Component";
import DesginCourseComponent from "./FromTheBlogs/DesginCourseComponent";
import Feedback from "../../components/layouts/Feedback/Feedback";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <BlogsComponent />
      <FromTheBlogsComponent />
      <FromTheBlogs2Component />
      <DesginCourseComponent />
      <Feedback />
      <Footer />
    </div>
  );
}
