import { Box, Container, Typography, useTheme } from "@mui/material";

const services = [
  {
    price: 300,
    label:
      "ერთჯერადი ედვერთაიზინგის კონსულტაცია (რეკლამირების სწავლა საბაზისო დონეზე)",
  },
  { price: 200, label: "ლოგოს დიზაინის დამზადება" },
  { price: 350, label: "ერთჯერადი ვიდეო-გადაღება/მონტაჟი" },
  {
    price: 250,
    label: "სავიზიტო ბარათის ან სხვა საბეჭდი მასალის დიზაინის დამზადება",
  },
  {
    price: 300,
    label: "ბრენდბუქი",
  },
  {
    price: 200,
    label: "სარეკლამო პორთფოლიოს მოწესრიგება და ერთჯერადი რეკლამირება",
  },
];

export default function OneTimeServicesSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const blue = theme.palette.primary.main;

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 2, sm: 3 },
        background: isDark
          ? theme.palette.background.default
          : theme.palette.background.default,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.8rem", md: "2.4rem" },
            fontWeight: 900,
            letterSpacing: "-0.03em",
            color: theme.palette.text.primary,
            mb: { xs: 5, md: 7 },
          }}
        >
          ერთჯერადი მომსახურებები
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 2, md: 2.5 },
          }}
        >
          {services.map(({ price, label }) => (
            <Box
              key={label}
              sx={{
                p: { xs: 3, md: 3.5 },
                borderRadius: "14px",
                border: `1.5px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(27,61,255,0.1)"}`,
                background: isDark
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(255,255,255,0.7)",
                backdropFilter: "blur(8px)",
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                transition:
                  "border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  borderColor: `${blue}50`,
                  transform: "translateY(-3px)",
                  boxShadow: isDark
                    ? `0 8px 28px rgba(0,0,0,0.25)`
                    : `0 8px 28px rgba(27,61,255,0.08)`,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.9rem",
                  fontWeight: 900,
                  color: blue,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {price}
                <Typography
                  component="span"
                  sx={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: blue,
                    ml: 0.5,
                  }}
                >
                  GEL
                </Typography>
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: theme.palette.text.secondary,
                  lineHeight: 1.45,
                }}
              >
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
