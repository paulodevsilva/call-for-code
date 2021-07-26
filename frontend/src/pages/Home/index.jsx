import '../../App.css';
import Header from '../../Components/Header';
import Hero from '../../Components/Hero';
import AboutUs from '../../Components/AboutUs';
import Benefits from '../../Components/Benefits';
import JoinUs from '../../Components/JoinUs';
import Team from '../../Components/Team';
import Footer from '../../Components/Footer';

export default function Home({ history }) {
  return (
      <>
      <Header />
      <Hero />
      <AboutUs />
      <Benefits />
      <JoinUs navigate={history}/>
      <Team />
      <Footer />
      </>
  );
}

