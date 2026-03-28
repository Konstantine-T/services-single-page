import { ColorModeProvider } from './context/ColorModeContext';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <ColorModeProvider>
      <PricingSection />
      <Footer />
    </ColorModeProvider>
  );
}
