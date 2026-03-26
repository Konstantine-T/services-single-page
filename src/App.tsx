import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PricingSection />
      <Footer />
    </ThemeProvider>
  );
}
