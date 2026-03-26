import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const footerLinks = {
  services: [
    { label: 'Content Management', href: '#' },
    { label: 'Ad Budget Management', href: '#' },
    { label: 'Reporting & Analytics', href: '#' },
    { label: 'Brand Strategy', href: '#' },
    { label: 'Design & Creative', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Our Work', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
  ],
};

const socialLinks = [
  { icon: <InstagramIcon />, label: 'Instagram', href: '#' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: '#' },
  { icon: <FacebookIcon />, label: 'Facebook', href: '#' },
];

export default function Footer() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        bgcolor: '#111827',
        color: '#6B7280',
        pt: { xs: 6, md: 8 },
        pb: 3,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Brand column */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 1.5 }}>
              <Typography
                component="span"
                sx={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', display: 'block', lineHeight: 1.1 }}
              >
                digital
              </Typography>
              <Typography
                component="span"
                sx={{ fontSize: '2rem', fontWeight: 900, color: theme.palette.primary.main, letterSpacing: '-0.03em', display: 'block', lineHeight: 1 }}
              >
                SCALE
              </Typography>
              <Typography
                component="span"
                sx={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', display: 'block', lineHeight: 1.2 }}
              >
                studio
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ lineHeight: 1.7, mb: 3, maxWidth: 300 }}>
              A results-driven social media agency helping brands grow through strategic
              content, creative design, and data-backed advertising.
            </Typography>

            {/* Contact info */}
            <Stack spacing={1.5}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <EmailOutlinedIcon sx={{ fontSize: '1rem', color: theme.palette.primary.light }} />
                <Link
                  href="mailto:hello@digitalscalestudio.ge"
                  underline="hover"
                  sx={{ color: '#6B7280', fontSize: '0.875rem', '&:hover': { color: '#fff' } }}
                >
                  hello@digitalscalestudio.ge
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PhoneOutlinedIcon sx={{ fontSize: '1rem', color: theme.palette.primary.light }} />
                <Link
                  href="tel:+995555123456"
                  underline="hover"
                  sx={{ color: '#6B7280', fontSize: '0.875rem', '&:hover': { color: '#fff' } }}
                >
                  +995 555 123 456
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOnOutlinedIcon
                  sx={{ fontSize: '1rem', color: theme.palette.primary.light, mt: '2px' }}
                />
                <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                  Tbilisi, Georgia
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Services links */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="overline"
              sx={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#fff',
                display: 'block',
                mb: 2,
              }}
            >
              Services
            </Typography>
            <Stack spacing={1}>
              {footerLinks.services.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  underline="none"
                  sx={{
                    fontSize: '0.875rem',
                    color: '#6B7280',
                    transition: 'color 0.15s',
                    '&:hover': { color: '#fff' },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Company links */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="overline"
              sx={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#fff',
                display: 'block',
                mb: 2,
              }}
            >
              Company
            </Typography>
            <Stack spacing={1}>
              {footerLinks.company.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  underline="none"
                  sx={{
                    fontSize: '0.875rem',
                    color: '#6B7280',
                    transition: 'color 0.15s',
                    '&:hover': { color: '#fff' },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Newsletter / CTA column */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="overline"
              sx={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#fff',
                display: 'block',
                mb: 2,
              }}
            >
              Ready to grow?
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.7 }}>
              Let's discuss which package aligns with your business goals.
              Reach out and we'll get back to you within 24 hours.
            </Typography>
            <Box
              component="a"
              href="mailto:hello@digitalscalestudio.ge"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                bgcolor: theme.palette.primary.main,
                color: '#fff',
                px: 3,
                py: 1.25,
                borderRadius: 2,
                fontFamily: 'inherit',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'background 0.2s',
                '&:hover': { bgcolor: theme.palette.primary.dark },
              }}
            >
              <EmailOutlinedIcon sx={{ fontSize: '1rem' }} />
              Send us a message
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: '#1F2937', mt: 6, mb: 3 }} />

        {/* Bottom bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Typography variant="caption" sx={{ color: '#4B5563' }}>
            © {currentYear} digital SCALE studio. All rights reserved.
          </Typography>

          {/* Social icons */}
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            {socialLinks.map((social) => (
              <Tooltip key={social.label} title={social.label} placement="top">
                <IconButton
                  component="a"
                  href={social.href}
                  size="small"
                  sx={{
                    color: '#4B5563',
                    transition: 'color 0.15s',
                    '&:hover': { color: '#fff', bgcolor: 'transparent' },
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>

          <Box sx={{ display: 'flex', gap: 2.5 }}>
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <Link
                key={item}
                href="#"
                underline="hover"
                sx={{ fontSize: '0.75rem', color: '#4B5563', '&:hover': { color: '#fff' } }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
