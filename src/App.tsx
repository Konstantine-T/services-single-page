import { ColorModeProvider } from './context/ColorModeContext';
import PricingSection from './components/PricingSection';
import OneTimeServicesSection from './components/OneTimeServicesSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <ColorModeProvider>
      <PricingSection />
      <OneTimeServicesSection />
      <Footer />
    </ColorModeProvider>
  );
}
