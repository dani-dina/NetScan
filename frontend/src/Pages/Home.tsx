import Navigation from "../Components/Widgets/Navigation";
import Footer from "../Components/Widgets/Footer";
import Landing from "../Components/Layouts/Landing";
import Hero from "../Components/Layouts/Hero";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      <Hero />
      <Landing />
      <Footer />
    </div>
  )
}

export default Home;