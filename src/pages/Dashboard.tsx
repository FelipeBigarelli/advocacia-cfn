import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PracticeAreas from '../components/PracticeAreas';
import Team from '../components/Team';
import { Container } from './styles';

export const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <About />
      <PracticeAreas />
      <Team />
      <Contact />
      <Footer />
    </Container>
  );
};
