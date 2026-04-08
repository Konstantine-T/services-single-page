import { useState } from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import PricingCard from "../PricingCard";
import { pricingPlans } from "../../data/pricingData";
import { useColorMode } from "../../context/ColorModeContext";

export default function PricingSection() {
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorMode();
  const [selectedId, setSelectedId] = useState<string>("scale");
  const isDark = mode === "dark";

  const blue = theme.palette.primary.main;
  const blueLight = theme.palette.primary.light;

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        py: { xs: 10, md: 14 },
        px: { xs: 2, sm: 3 },
        background: isDark
          ? "radial-gradient(ellipse 80% 60% at 50% -10%, #1B3DFF22 0%, transparent 70%), linear-gradient(180deg, #1A1F35 0%, #1E2440 100%)"
          : "radial-gradient(ellipse 80% 60% at 50% -10%, #1B3DFF18 0%, transparent 70%), linear-gradient(180deg, #F0EFF9 0%, #E8E7F5 100%)",
        transition: "background 0.5s ease",
      }}
    >
      {/* Decorative background orbs */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          top: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
          background: isDark
            ? `radial-gradient(circle, ${blue}18 0%, transparent 70%)`
            : `radial-gradient(circle, ${blue}12 0%, transparent 70%)`,
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          bottom: "10%",
          right: "5%",
          background: isDark
            ? `radial-gradient(circle, ${blueLight}14 0%, transparent 70%)`
            : `radial-gradient(circle, ${blueLight}10 0%, transparent 70%)`,
          pointerEvents: "none",
          filter: "blur(60px)",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* ── Header ── */}
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
          {/* Main headline */}
          <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: "2.4rem",
                sm: "3.2rem",
                md: "4rem",
                lg: "4.5rem",
              },
              fontWeight: 900,
              color: theme.palette.text.primary,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              mb: 2.5,
              "& em": {
                fontStyle: "normal",
                background: theme.palette.primary.dark,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              },
            }}
          >
            <em>Growin</em> Agency
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 480,
              mx: "auto",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              mb: 4,
            }}
          >
            მიიღე სოციალური მედიის მარკეტინგის სრული მომსახურება Growin-ში.
          </Typography>

          {/* Dark mode toggle */}
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1.5 }}>
            <LightModeRoundedIcon
              sx={{
                fontSize: "1rem",
                color: isDark ? theme.palette.text.secondary : blue,
                transition: "color 0.35s ease",
              }}
            />
            <Box
              role="switch"
              aria-checked={isDark}
              aria-label="Toggle dark mode"
              onClick={toggleColorMode}
              sx={{
                position: "relative",
                width: 48,
                height: 26,
                borderRadius: 13,
                bgcolor: isDark ? blue : theme.palette.divider,
                border: `1.5px solid ${isDark ? blue : theme.palette.divider}`,
                cursor: "pointer",
                transition: "background-color 0.35s cubic-bezier(0.4,0,0.2,1)",
                "&:hover": { boxShadow: `0 0 0 3px ${blue}28` },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 3,
                  left: isDark ? 22 : 3,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  bgcolor: "#fff",
                  transition: "left 0.35s cubic-bezier(0.4,0,0.2,1)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                }}
              />
            </Box>
            <DarkModeRoundedIcon
              sx={{
                fontSize: "1rem",
                color: isDark ? blueLight : theme.palette.text.secondary,
                transition: "color 0.35s ease",
              }}
            />
          </Box>
        </Box>

        {/* ── Cards ── */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              lg: "repeat(3, 1fr)",
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {pricingPlans.map((plan) => (
            <Box
              key={plan.id}
              sx={{
                position: "relative",
                zIndex: selectedId === plan.id ? 2 : 0,
                display: "flex",
              }}
            >
              <PricingCard
                plan={plan}
                isSelected={selectedId === plan.id}
                onSelect={() => setSelectedId(plan.id)}
              />
            </Box>
          ))}
        </Box>

        {/* ── Bottom note ── */}
        {/* <Box sx={{ textAlign: "center", mt: 7 }}>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.secondary, fontSize: "0.82rem" }}
          >
            All prices are in Georgian Lari (GEL) and exclude VAT.{" "}
            <Box
              component="a"
              href="#contact"
              sx={{
                color: blue,
                fontWeight: 700,
                textDecoration: "none",
                borderBottom: `1px solid ${blue}50`,
                pb: "1px",
                transition: "border-color 0.2s",
                "&:hover": { borderColor: blue },
              }}
            >
              Contact us
            </Box>{" "}
            for a custom quote.
          </Typography>
        </Box> */}
      </Container>
    </Box>
  );
}
