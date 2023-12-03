import HeaderComponent from "./component/HeaderComponent";
import "./App.css"
import BlogsComponent from "./component/Blogs/BlogsComponent";
import FromTheBlogsComponent from "./component/FromTheBlogs/FromTheBlogsComponent";
import FromTheBlogs2Component from "./component/FromTheBlogs/FromTheBlogs2Component";
import DesginCourseComponent from "./component/FromTheBlogs/DesginCourseComponent";
import FeedBackComponent from "./component/FeedBack/FeedBackComponent";
import FooterComponent from "./component/FooterComponent/FooterComponent";
function App() {
  return (
    <div>
      <HeaderComponent/>
      <BlogsComponent/>
      <FromTheBlogsComponent/>
      <FromTheBlogs2Component/>
      <DesginCourseComponent/>
      <FeedBackComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
