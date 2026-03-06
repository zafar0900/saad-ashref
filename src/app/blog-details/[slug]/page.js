import "../../../../public/css/extra.css"

import LightMode from "@/components/LightMode";
import Header from "@/components/photo-studio/Header";
import Breadcrumb from "@/components/blog-details/Breadcrumb";
import BlogDetails from "@/components/blog-details/BlogDetails";
import Footer from "@/components/webflow-developer/Footer";

export const metadata = {
  title: "Blog Details || Nicholls - Personal Portfolio/CV NextJS Template",
};

const Home = () => {
  return (
    <LightMode className="bg-isabelline">
      <Header className="bg-isabelline" />
      <main>
        <Breadcrumb />
        <BlogDetails />
      </main>
      <Footer />
    </LightMode>
  );
};

export default Home;
