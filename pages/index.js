import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Model from '../components/Model';
import Service from '../components/Service';
import About from '../components/About';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <Layout pageTitle="Sargowaze">
      <Header />
      <Hero />
      <Feature />
      <Model />
      {/* <Service /> */}
      <About />
      <Footer />
    </Layout>
  )
}

export default Index;
