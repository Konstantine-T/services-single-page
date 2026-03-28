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
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const footerLinks = {
  services: [
    { label: "Content Management", href: "#" },
    { label: "Ad Budget Management", href: "#" },
    { label: "Reporting & Analytics", href: "#" },
    { label: "Brand Strategy", href: "#" },
    { label: "Design & Creative", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Work", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
};

const socialLinks = [
  { icon: <InstagramIcon fontSize="small" />, label: "Instagram", href: "#" },
  { icon: <LinkedInIcon fontSize="small" />, label: "LinkedIn", href: "#" },
  { icon: <FacebookIcon fontSize="small" />, label: "Facebook", href: "#" },
];

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const currentYear = new Date().getFullYear();

  const blue = theme.palette.primary.main;
  const blueLight = theme.palette.primary.light;

  const footerBg = isDark ? "#060810" : "#0A0C1A";
  const mutedText = "#5A607A";
  const linkText = "#8A90AA";

  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        bgcolor: footerBg,
        color: linkText,
        pt: { xs: 8, md: 12 },
        pb: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle top gradient accent */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: `linear-gradient(90deg, transparent 0%, ${blue}60 30%, ${blueLight}80 50%, ${blue}60 70%, transparent 100%)`,
        }}
      />
      {/* Background glow */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "-120px",
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${blue}10 0%, transparent 70%)`,
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative" }}>

        {/* ── Large CTA band ── */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "center" },
            justifyContent: "space-between",
            gap: 4,
            mb: 10,
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", md: "2.8rem" },
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                mb: 1.5,
              }}
            >
              Ready to{" "}
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(135deg, ${blue} 0%, ${blueLight} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                grow your brand?
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: mutedText, maxWidth: 420, lineHeight: 1.7, fontSize: "0.9rem" }}
            >
              Let's discuss which package aligns with your goals.
              We'll get back to you within 24 hours.
            </Typography>
          </Box>

          <Box
            component="a"
            href="mailto:hello@digitalscalestudio.ge"
            sx={{
              flexShrink: 0,
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              background: `linear-gradient(135deg, ${blue} 0%, ${blueLight} 100%)`,
              color: "#fff",
              px: 4,
              py: 1.75,
              borderRadius: "10px",
              fontFamily: "inherit",
              fontSize: "0.9rem",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.01em",
              boxShadow: `0 8px 32px ${blue}40`,
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: `0 12px 40px ${blue}55`,
              },
            }}
          >
            <EmailOutlinedIcon sx={{ fontSize: "1rem" }} />
            Get in Touch
            <ArrowOutwardIcon sx={{ fontSize: "0.9rem", opacity: 0.8 }} />
          </Box>
        </Box>

        {/* ── Divider ── */}
        <Divider sx={{ borderColor: "rgba(255,255,255,0.06)", mb: 8 }} />

        {/* ── Links grid ── */}
        <Grid container spacing={{ xs: 5, md: 6 }}>

          {/* Brand column */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Typography
                component="span"
                sx={{
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  color: mutedText,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  display: "block",
                  mb: 0.5,
                }}
              >
                digital
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "2.4rem",
                  fontWeight: 900,
                  background: `linear-gradient(135deg, ${blue} 0%, ${blueLight} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.04em",
                  display: "block",
                  lineHeight: 1,
                  mb: 0.5,
                }}
              >
                SCALE
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  color: mutedText,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  display: "block",
                }}
              >
                studio
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{ color: mutedText, lineHeight: 1.8, mb: 4, maxWidth: 280, fontSize: "0.85rem" }}
            >
              A results-driven social media agency helping brands grow through
              strategic content, creative design, and data-backed advertising.
            </Typography>

            <Stack spacing={1.75}>
              {[
                { icon: <EmailOutlinedIcon />, label: "hello@digitalscalestudio.ge", href: "mailto:hello@digitalscalestudio.ge" },
                { icon: <PhoneOutlinedIcon />, label: "+995 555 123 456", href: "tel:+995555123456" },
              ].map(({ icon, label, href }) => (
                <Box key={label} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box sx={{ color: `${blue}90`, display: "flex", fontSize: "0.9rem" }}>
                    {icon}
                  </Box>
                  <Link
                    href={href}
                    underline="none"
                    sx={{
                      color: linkText,
                      fontSize: "0.82rem",
                      transition: "color 0.15s",
                      "&:hover": { color: "#fff" },
                    }}
                  >
                    {label}
                  </Link>
                </Box>
              ))}
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <Box sx={{ color: `${blue}90`, display: "flex", fontSize: "0.9rem", mt: "2px" }}>
                  <LocationOnOutlinedIcon />
                </Box>
                <Typography variant="body2" sx={{ color: linkText, fontSize: "0.82rem" }}>
                  Tbilisi, Georgia
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Services */}
          <Grid item xs={6} md={2}>
            <Typography
              sx={{
                fontSize: "0.65rem",
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#fff",
                display: "block",
                mb: 3,
              }}
            >
              Services
            </Typography>
            <Stack spacing={1.5}>
              {footerLinks.services.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  underline="none"
                  sx={{
                    fontSize: "0.82rem",
                    color: linkText,
                    transition: "color 0.15s",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Company */}
          <Grid item xs={6} md={2}>
            <Typography
              sx={{
                fontSize: "0.65rem",
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#fff",
                display: "block",
                mb: 3,
              }}
            >
              Company
            </Typography>
            <Stack spacing={1.5}>
              {footerLinks.company.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  underline="none"
                  sx={{
                    fontSize: "0.82rem",
                    color: linkText,
                    transition: "color 0.15s",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Stats / trust signals */}
          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                fontSize: "0.65rem",
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#fff",
                display: "block",
                mb: 3,
              }}
            >
              By the numbers
            </Typography>
            <Grid container spacing={2}>
              {[
                { value: "120+", label: "Brands Scaled" },
                { value: "4.9★", label: "Client Rating" },
                { value: "3x", label: "Avg. Growth" },
                { value: "24h", label: "Response Time" },
              ].map(({ value, label }) => (
                <Grid item xs={6} key={label}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "10px",
                      border: "1px solid rgba(255,255,255,0.06)",
                      bgcolor: "rgba(255,255,255,0.02)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "1.6rem",
                        fontWeight: 900,
                        background: `linear-gradient(135deg, ${blue} 0%, ${blueLight} 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                        mb: 0.5,
                      }}
                    >
                      {value}
                    </Typography>
                    <Typography sx={{ fontSize: "0.72rem", color: mutedText, fontWeight: 500 }}>
                      {label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* ── Bottom bar ── */}
        <Divider sx={{ borderColor: "rgba(255,255,255,0.05)", mt: 8, mb: 4 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { sm: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography variant="caption" sx={{ color: mutedText, fontSize: "0.75rem" }}>
            © {currentYear} digital SCALE studio. All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: 0.5 }}>
            {socialLinks.map((social) => (
              <Tooltip key={social.label} title={social.label} placement="top">
                <IconButton
                  component="a"
                  href={social.href}
                  size="small"
                  sx={{
                    width: 32,
                    height: 32,
                    color: mutedText,
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "#fff",
                      bgcolor: `${blue}20`,
                      borderColor: `${blue}50`,
                    },
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: 3 }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                underline="none"
                sx={{
                  fontSize: "0.75rem",
                  color: mutedText,
                  transition: "color 0.15s",
                  "&:hover": { color: "#fff" },
                }}
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
