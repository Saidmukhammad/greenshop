import BlogPosts from "../components/home/BlogPosts"
import FindMore from "../components/home/FindMore"
import Hero from "../components/home/Hero"
import ShopSection from "../components/home/ShopSection"


const Home = () => {
  return (
    <>
      <Hero/>
      <ShopSection/>
      <FindMore/>
      <BlogPosts/>
    </>
  )
}

export default Home