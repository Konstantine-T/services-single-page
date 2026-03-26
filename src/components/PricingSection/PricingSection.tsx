import { useState } from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import PricingCard from "../PricingCard";
import { pricingPlans } from "../../data/pricingData";

export default function PricingSection() {
  const theme = useTheme();
  const [selectedId, setSelectedId] = useState<string>("scale");

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 3 },
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, #E8E9F0 100%)`,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            component="span"
            sx={{
              display: "inline-block",
              bgcolor: `${theme.palette.primary.main}14`,
              color: theme.palette.primary.main,
              fontWeight: 700,
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              px: 2,
              py: 0.75,
              borderRadius: 10,
              mb: 2,
            }}
          >
            Pricing Plans
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 900,
              color: theme.palette.text.primary,
              letterSpacing: "-0.03em",
              mb: 1.5,
            }}
          >
            ხატიას ძალიან მაგარი საიტი
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 520,
              mx: "auto",
              fontSize: "1rem",
            }}
          >
            აქ შეგიძლია რამე მოკლე ტექსტი დაწერო, რომლითაც ადამიანი უბრალოდ
            მიხვდება საიტზე რა უნდა, ანუ რომ შეარჩიოს მისთვის სასურველი გეგმა
            რააა...
          </Typography>
        </Box>

        {/* Cards Grid */}
        <Grid container spacing={{ xs: 2.5, md: 3 }} justifyContent="center">
          {pricingPlans.map((plan) => (
            <Grid
              key={plan.id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              sx={{
                display: "flex",
                /* Push featured card slightly up on desktop */
                mt: plan.featured ? { md: -2 } : 0,
              }}
            >
              <Box sx={{ width: "100%" }}>
                <PricingCard
                  plan={plan}
                  isSelected={selectedId === plan.id}
                  onSelect={() => setSelectedId(plan.id)}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom note */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.secondary }}
          >
            All prices are in Georgian Lari (GEL) and exclude VAT.{" "}
            <Box
              component="a"
              href="#contact"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Contact us
            </Box>{" "}
            for a custom quote.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
