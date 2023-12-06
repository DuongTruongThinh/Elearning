import HeaderComponent from '../component/HeaderComponent'
import BlogsComponent from './Blogs/BlogsComponent'
import FromTheBlogs2Component from './FromTheBlogs/FromTheBlogs2Component'
import DesginCourseComponent from './FromTheBlogs/DesginCourseComponent'
import FeedBackComponent from './FeedBack/FeedBackComponent'
import FooterComponent from '../component/FooterComponent'
import FromTheBlogsComponent from './FromTheBlogs/FromTheBlogsComponent'
export default function HomePage() {
  return (
    <div>
            <HeaderComponent/>
            <BlogsComponent />
            <FromTheBlogsComponent />
            <FromTheBlogs2Component/>
            <DesginCourseComponent/>
            <FeedBackComponent />
            <FooterComponent/>
    </div>
  )
}

