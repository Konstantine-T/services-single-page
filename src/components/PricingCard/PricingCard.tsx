import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import type { PricingPlan } from "../../types/pricing";

interface PricingCardProps {
  plan: PricingPlan;
  isSelected: boolean;
  onSelect: () => void;
}

export default function PricingCard({ plan, isSelected, onSelect }: PricingCardProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [servicesOpen, setServicesOpen] = useState(false);
  const formattedPrice = plan.price.toLocaleString("en-US");

  const blue = theme.palette.primary.main;
  const blueLight = theme.palette.primary.light;

  // Active: crisp white / deep card. Inactive: glass-style tint.
  const activeBg = isDark
    ? "linear-gradient(145deg, #141830 0%, #0F1425 100%)"
    : "linear-gradient(145deg, #FFFFFF 0%, #F8F8FF 100%)";

  const inactiveBg = isDark
    ? "rgba(255,255,255,0.03)"
    : "rgba(255,255,255,0.55)";

  const btnBg = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.045)";

  return (
    <Card
      elevation={0}
      onClick={onSelect}
      sx={{
        ml: { xs: 0, lg: isSelected ? "-36px" : 0 },
        width: { xs: "100%", lg: isSelected ? "calc(100% + 72px)" : "100%" },
        flexShrink: 0,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        background: isSelected ? activeBg : inactiveBg,
        border: `1.5px solid ${isSelected ? blue : isDark ? "rgba(255,255,255,0.07)" : "rgba(27,61,255,0.12)"}`,
        backdropFilter: isSelected ? "none" : "blur(12px)",
        WebkitBackdropFilter: isSelected ? "none" : "blur(12px)",
        position: "relative",
        zIndex: isSelected ? 1 : 0,
        cursor: "pointer",
        transform: isSelected ? "scale(1.02)" : "scale(1)",
        transition: [
          "margin-left 0.5s cubic-bezier(0.16,1,0.3,1)",
          "width 0.5s cubic-bezier(0.16,1,0.3,1)",
          "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
          "box-shadow 0.4s cubic-bezier(0.16,1,0.3,1)",
          "border-color 0.3s ease",
        ].join(", "),
        boxShadow: isSelected
          ? isDark
            ? `0 0 0 1px ${blue}60, 0 24px 64px ${blue}35, 0 8px 24px rgba(0,0,0,0.4)`
            : `0 0 0 1px ${blue}30, 0 24px 64px ${blue}28, 0 8px 24px rgba(27,61,255,0.12)`
          : isDark
          ? "0 1px 3px rgba(0,0,0,0.3)"
          : "0 1px 3px rgba(0,0,0,0.06)",
        "&:hover": {
          transform: isSelected ? "scale(1.02) translateY(-2px)" : "scale(1.015) translateY(-3px)",
          boxShadow: isSelected
            ? isDark
              ? `0 0 0 1px ${blue}70, 0 28px 72px ${blue}42, 0 10px 28px rgba(0,0,0,0.45)`
              : `0 0 0 1px ${blue}40, 0 28px 72px ${blue}35, 0 10px 28px rgba(27,61,255,0.15)`
            : isDark
            ? `0 4px 20px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08)`
            : `0 4px 20px rgba(27,61,255,0.09), 0 0 0 1px rgba(27,61,255,0.16)`,
        },
      }}
    >
      {/* Top accent line on selected card */}
      {isSelected && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "10%",
            right: "10%",
            height: "2px",
            background: `linear-gradient(90deg, transparent, ${blue}, ${blueLight}, transparent)`,
            borderRadius: "0 0 2px 2px",
          }}
        />
      )}

      {/* Most Popular badge */}
      {plan.featured && (
        <Box
          sx={{
            position: "absolute",
            top: -1,
            left: "50%",
            transform: "translateX(-50%)",
            background: `linear-gradient(135deg, ${blue} 0%, ${blueLight} 100%)`,
            color: "#fff",
            fontSize: "0.6rem",
            fontWeight: 800,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            px: 2,
            py: 0.6,
            borderRadius: "0 0 8px 8px",
            whiteSpace: "nowrap",
            boxShadow: `0 4px 12px ${blue}40`,
          }}
        >
          Most Popular
        </Box>
      )}

      {plan.badge && !isSelected && (
        <Box sx={{ position: "absolute", top: 14, right: 14 }}>
          <Chip
            label={plan.badge}
            size="small"
            sx={{
              background: `linear-gradient(135deg, ${blue} 0%, ${blueLight} 100%)`,
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.65rem",
              letterSpacing: "0.04em",
              height: 20,
            }}
          />
        </Box>
      )}

      <CardContent
        sx={{
          p: { xs: 3, lg: 3.5 },
          pb: "28px !important",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          pt: plan.featured ? 5 : 3.5,
        }}
      >
        {/* Plan name */}
        <Typography
          variant="overline"
          sx={{
            fontSize: "0.65rem",
            fontWeight: 800,
            letterSpacing: "0.16em",
            color: isSelected ? blue : theme.palette.text.secondary,
            display: "block",
            mb: 1,
            transition: "color 0.3s ease",
          }}
        >
          {plan.name}
        </Typography>

        {/* Price */}
        <Box sx={{ display: "flex", alignItems: "flex-end", gap: 0.5, mb: 0.5 }}>
          <Typography
            component="span"
            sx={{
              fontSize: { xs: "2.8rem", lg: "2.6rem" },
              fontWeight: 900,
              lineHeight: 1,
              color: theme.palette.text.primary,
              letterSpacing: "-0.04em",
              fontFeatureSettings: '"tnum"',
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {formattedPrice}
          </Typography>
          <Typography
            component="span"
            sx={{
              fontSize: "0.82rem",
              fontWeight: 700,
              color: isSelected ? blue : theme.palette.text.secondary,
              pb: 0.8,
              letterSpacing: "0.02em",
              transition: "color 0.3s ease",
            }}
          >
            {plan.currency}
          </Typography>
        </Box>

        <Typography
          variant="caption"
          sx={{
            color: theme.palette.text.secondary,
            display: "block",
            fontSize: "0.68rem",
            mb: 3,
            letterSpacing: "0.01em",
          }}
        >
          {plan.billingNote}
        </Typography>

        {/* Content summary pill */}
        <Box
          onClick={(e) => e.stopPropagation()}
          sx={{
            width: "100%",
            py: 1,
            px: 2,
            mb: 3,
            borderRadius: "8px",
            bgcolor: btnBg,
            border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
            color: theme.palette.text.secondary,
            fontFamily: "inherit",
            fontSize: "0.78rem",
            fontWeight: 600,
            textAlign: "center",
            cursor: "default",
            letterSpacing: "0.03em",
          }}
        >
          {plan.contentSummary}
        </Box>

        {/* Divider */}
        <Divider
          sx={{
            borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(27,61,255,0.08)",
            mb: 2,
          }}
        />

        {/* Features */}
        {isMobile ? (
          <>
            <Box
              onClick={(e) => { e.stopPropagation(); setServicesOpen((p) => !p); }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                py: 1.25,
                minHeight: 44,
                userSelect: "none",
                "&:hover": { opacity: 0.7 },
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 600, color: theme.palette.text.secondary, fontSize: "0.78rem" }}>
                {servicesOpen ? "დამალვა" : `სერვისების ნახვა (${plan.features.length})`}
              </Typography>
              <IconButton
                size="small"
                disableRipple
                sx={{
                  p: 0.25,
                  color: blue,
                  transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              >
                <KeyboardArrowDownIcon fontSize="small" />
              </IconButton>
            </Box>
            <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
              <FeatureList features={plan.features} isSelected={isSelected} />
            </Collapse>
          </>
        ) : (
          <FeatureList features={plan.features} isSelected={isSelected} />
        )}
      </CardContent>
    </Card>
  );
}

interface FeatureListProps {
  features: PricingPlan["features"];
  isSelected: boolean;
}

function FeatureList({ features, isSelected }: FeatureListProps) {
  const theme = useTheme();
  const blue = theme.palette.primary.main;

  return (
    <List dense disablePadding sx={{ mt: 0.5 }}>
      {features.map((feature, idx) => (
        <ListItem key={idx} disableGutters sx={{ py: 0.4, alignItems: "flex-start" }}>
          <ListItemIcon sx={{ minWidth: 24, mt: "3px" }}>
            {isSelected ? (
              <CheckCircleIcon sx={{ fontSize: "0.85rem", color: blue }} />
            ) : (
              <CheckCircleOutlineIcon sx={{ fontSize: "0.85rem", color: `${blue}80` }} />
            )}
          </ListItemIcon>
          <ListItemText
            primary={feature.label}
            primaryTypographyProps={{
              variant: "body2",
              sx: {
                color: theme.palette.text.secondary,
                lineHeight: 1.45,
                fontSize: "0.76rem",
                letterSpacing: "0.01em",
              },
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}
