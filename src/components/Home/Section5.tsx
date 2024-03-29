import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const Standard = [
  {
    color: "#fffffe",
    label: "white",
  },
  {
    color: "#e0e0c5",
    label: "cream",
  },
];
const Premium = [
  {
    color: "#1a1919",
    label: "black",
  },
  {
    color: "#616a69",
    label: "gray",
  },
  {
    color: "#75a488",
    label: "green",
  },
  {
    color: "#c7423b",
    label: "brown",
  },
  {
    color: "#324a89",
    label: "blue",
  },
  {
    color: "#503025",
    label: "brown",
  },
];
const Metallic = [
  {
    color: "#ba9d57",
    label: "gold",
  },
  {
    color: "#d5e0d2",
    label: "silver",
  },
];
export const Section5 = () => {
  const [selectedVariant, setSelectedVariant] = useState(
    "/color_variants/black.png"
  );
  const [selectedColor, setSelectedColor] = useState("black");
  const onSelectVariant = (color: string) => {
    setSelectedColor(color);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
      sx={
        {
          // background: "url(/mountain_bg.svg) no-repeat",
          // backgroundSize: "100% 100%",
          // maxHeight: "536px",
          // // width: "100%",
          // // backgroundRepeat: "repeat-x",
          // backgroundPosition: "right bottom",
        }
      }
    >
      <Box
        sx={{
          background: "url(/mountain_bg.svg) no-repeat",
          backgroundSize: { xs: "contain", sm: "fill" },
          height: { xs: "600px", sm: "596px" },
          width: { xs: "100%" },
          // backgroundRepeat: "repeat-x",
          backgroundPosition: "right top",
          position: "absolute",
          zIndex: 1,
          marginTop: { xs: 40, sm: 20, md: 10 },
        }}
      />
      <Stack
        sx={{
          px: { xs: 2, md: 10 },
          top: 0,
          zIndex: 2,
          pb: 5,
          background:
            "linear-gradient(to top, #f0edfa, rgba(244, 243, 248, 0))",
        }}
        spacing={1}
      >
        <Stack sx={{ maxWidth: { md: "30%" } }} spacing={3}>
          <Typography level="h1" fontSize={{ xs: 24, md: 40 }}>
            Let's Start the Journey with Nibav Home Elevators
          </Typography>
          <Typography fontSize={{ xs: 12, md: 14 }}>
            Our home elevators are self-supporting, and their parts come in a
            semi-assembled state-significantly reducing installation time to
            24-48 hours.
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          spacing={2}
          px={2}
          sx={{ alignItems: "flex-end" }}
        >
          <Stack sx={{ flex: 5, alignItems: "center" }}>
            <div>
              <Image
                alt={selectedColor}
                width={120}
                src={`/color_variants/${selectedColor}.png`}
                height={isMobile ? 458 : 670}
                priority
              />
            </div>
          </Stack>
          <Stack
            sx={{
              flex: 10,
            }}
            spacing={5}
          >
            <Typography fontWeight={"bold"} fontSize={16}>
              Available in All Different Hues
            </Typography>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2, md: 20 }}
            >
              <Stack>
                <Divider />
                <Typography fontWeight={"bold"} fontSize={14}>
                  Standard
                </Typography>
                <br />
                <Stack direction={"row"} spacing={2} mt={3}>
                  {Standard?.map((variant) => (
                    <ColorVariant
                      key={variant.color}
                      color={variant.color}
                      onClick={() => {
                        onSelectVariant(variant.label);
                      }}
                      isActive={selectedColor == variant.label}
                    />
                  ))}
                </Stack>
              </Stack>
              <Stack>
                <Divider />
                <Typography fontWeight={"bold"} fontSize={14}>
                  Premium
                </Typography>
                <br />
                <Stack
                  direction={"row"}
                  // spacing={2}
                  columnGap={2}
                  rowGap={2}
                  mt={3}
                  flexWrap={"wrap"}
                >
                  {Premium?.map((variant) => (
                    <ColorVariant
                      key={variant.color}
                      color={variant.color}
                      onClick={() => {
                        onSelectVariant(variant.label);
                      }}
                      isActive={selectedColor == variant.label}
                    />
                  ))}
                </Stack>
              </Stack>
              <Stack>
                <Divider />
                <Typography fontWeight={"bold"} fontSize={14}>
                  Metallic
                </Typography>
                <br />
                <Stack direction={"row"} spacing={2} mt={3}>
                  {Metallic?.map((variant) => (
                    <ColorVariant
                      key={variant.color}
                      color={variant.color}
                      onClick={() => {
                        onSelectVariant(variant.label);
                      }}
                      isActive={selectedColor == variant.label}
                    />
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

type ColorVariantType = {
  color: string;
  onClick: (color: string) => void;
  isActive: boolean;
};
const ColorVariant = (props: ColorVariantType) => {
  return (
    <IconButton
      sx={{
        bgcolor: props?.color,
        height: 20,
        width: 20,
        borderRadius: "50%",
        ...(props?.isActive
          ? {
              border: `3px solid ${
                props?.color == Premium[0].color ? "white" : "black"
              }`,
            }
          : {}),
        "&:hover": {
          bgcolor: props?.color,
        },
      }}
      onClick={() => {
        props?.onClick(props?.color);
      }}
    />
  );
};
