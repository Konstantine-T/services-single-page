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
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import type { PricingPlan } from "../../types/pricing";

interface PricingCardProps {
  plan: PricingPlan;
  isSelected: boolean;
  onSelect: () => void;
}

export default function PricingCard({
  plan,
  isSelected,
  onSelect,
}: PricingCardProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [servicesOpen, setServicesOpen] = useState(false);

  const formattedPrice = plan.price.toLocaleString("en-US");

  return (
    <Card
      elevation={0}
      onClick={onSelect}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: isSelected
          ? `2px solid ${theme.palette.primary.main}`
          : "2px solid transparent",
        borderRadius: 3,
        background: isSelected
          ? `linear-gradient(145deg, #fff 0%, ${theme.palette.primary.main}08 100%)`
          : theme.palette.background.paper,
        position: "relative",
        cursor: "pointer",
        transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          border: `2px solid ${theme.palette.primary.main}`,
          transform: "translateY(-6px)",
          boxShadow: `0 20px 40px ${theme.palette.primary.main}22, 0 8px 16px rgba(0,0,0,0.1)`,
          background: `linear-gradient(145deg, #fff 0%, ${theme.palette.primary.main}08 100%)`,
        },
      }}
    >
      {/* Featured badge — always on the designated plan regardless of selection */}
      {plan.featured && (
        <Box
          sx={{
            position: "absolute",
            top: -1,
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: theme.palette.primary.main,
            color: "#fff",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            px: 2,
            py: 0.5,
            borderRadius: "0 0 8px 8px",
            whiteSpace: "nowrap",
          }}
        >
          Most Popular
        </Box>
      )}

      {plan.badge && !isSelected && (
        <Box sx={{ position: "absolute", top: 16, right: 16 }}>
          <Chip
            label={plan.badge}
            size="small"
            sx={{
              bgcolor: theme.palette.secondary.main,
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.7rem",
              letterSpacing: "0.05em",
            }}
          />
        </Box>
      )}

      <CardContent
        sx={{
          p: 3,
          pb: 2,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="overline"
            sx={{
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.12em",
              color: theme.palette.text.secondary,
              display: "block",
              mb: 0.5,
            }}
          >
            {plan.name}
          </Typography>
        </Box>

        {/* Price */}
        <Box
          sx={{ display: "flex", alignItems: "flex-start", gap: 0.5, mb: 0.5 }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: "3rem",
              fontWeight: 900,
              lineHeight: 1,
              color: theme.palette.primary.main,
              letterSpacing: "-0.03em",
            }}
          >
            {formattedPrice}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              pb: 0.5,
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: theme.palette.primary.light,
                lineHeight: 1,
              }}
            >
              {plan.currency}
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="caption"
          sx={{
            color: theme.palette.text.secondary,
            mb: 2,
            display: "block",
            fontSize: "0.72rem",
          }}
        >
          {plan.billingNote}
        </Typography>

        {/* Content Summary */}
        <Box
          sx={{
            bgcolor: theme.palette.background.default,
            borderRadius: 2,
            py: 1.25,
            px: 2,
            mb: 2,
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              textAlign: "center",
            }}
          >
            {plan.contentSummary}
          </Typography>
        </Box>

        <Divider sx={{ mb: 1.5 }} />

        {/* Services — desktop: always visible, mobile: collapsible */}
        {isMobile ? (
          <>
            <Box
              onClick={() => setServicesOpen((prev) => !prev)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                py: 0.75,
                userSelect: "none",
                "&:hover": { opacity: 0.75 },
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: 600, color: theme.palette.text.secondary }}
              >
                {servicesOpen
                  ? "დამალვა"
                  : `სერვისების ნახვა (${plan.features.length})`}
              </Typography>
              <IconButton
                size="small"
                disableRipple
                sx={{
                  p: 0.25,
                  color: theme.palette.primary.main,
                  transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              >
                <KeyboardArrowDownIcon fontSize="small" />
              </IconButton>
            </Box>

            <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
              <FeatureList features={plan.features} />
            </Collapse>
          </>
        ) : (
          <FeatureList features={plan.features} />
        )}

        {/* CTA */}
        {/* <Box sx={{ mt: 'auto', pt: 2.5 }}>
          <Box
            component="button"
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              py: 1.25,
              px: 2,
              border: `1.5px solid ${isSelected ? theme.palette.primary.main : theme.palette.divider}`,
              borderRadius: 2,
              bgcolor: isSelected ? theme.palette.primary.main : 'transparent',
              color: isSelected ? '#fff' : theme.palette.text.primary,
              fontFamily: 'inherit',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                bgcolor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                color: '#fff',
                transform: 'none',
              },
            }}
          >
            Get Started
            <ArrowForwardIcon sx={{ fontSize: '1rem' }} />
          </Box>
        </Box> */}
      </CardContent>
    </Card>
  );
}

interface FeatureListProps {
  features: PricingPlan["features"];
}

function FeatureList({ features }: FeatureListProps) {
  const theme = useTheme();

  return (
    <List dense disablePadding sx={{ mt: 0.5 }}>
      {features.map((feature, idx) => (
        <ListItem
          key={idx}
          disableGutters
          sx={{ py: 0.4, alignItems: "flex-start" }}
        >
          <ListItemIcon sx={{ minWidth: 28, mt: "2px" }}>
            <CheckCircleOutlineIcon
              sx={{ fontSize: "1rem", color: theme.palette.primary.main }}
            />
          </ListItemIcon>
          <ListItemText
            primary={feature.label}
            primaryTypographyProps={{
              variant: "body2",
              sx: { color: theme.palette.text.secondary, lineHeight: 1.4 },
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}
