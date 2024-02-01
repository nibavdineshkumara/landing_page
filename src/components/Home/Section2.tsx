import { Button, Stack, Typography, useTheme } from "@mui/joy";
import { Hidden, useMediaQuery } from "@mui/material";
import Image from "next/image";

export const Section2 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack direction={{ md: "row" }} sx={{}}>
      <Stack
        sx={{
          background: "linear-gradient(180deg, #F4F4F4 65%, #FFFFFF 50%)",
          px: { md: 10 },
          pt: { md: 10 },
        }}
        justifyContent={"flex-end"}
        direction={{ xs: "column-reverse", md: "row" }}
        spacing={5}
      >
        <Hidden mdUp>
          <Certified />
        </Hidden>
        <Image
          alt="elevator"
          src="/elevator_2.jpg"
          height={659}
          width={isMobile ? 350 : 590}
          style={{
            flex: 1,
            margin: 20,
            alignSelf: "center",
            maxWidth: "590px",
          }}
        />
        <Stack
          spacing={10}
          sx={{
            flex: 1,
            pb: { xs: 5, sm: 15 },
            px: { xs: 2, sm: 20 },
            pt: { xs: 10, sm: 5 },
          }}
        >
          <Stack
            spacing={3}
            sx={{
              textAlign: { xs: "center", md: "unset" },
              minHeight: "60%",
              maxWidth: { lg: "50%" },
            }}
          >
            <Typography>ABOUT US</Typography>
            <Typography
              sx={{ fontSize: { xs: 32, sm: 40 }, fontWeight: "bold" }}
            >
              Discover the Future of Home Mobility
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14 },
                lineHeight: "160%",
              }}
            >
              A self-supporting home lifts, built with bulletproof glass,
              aircraft-grade aluminium and galvanized steel. It provides an
              elegant design, European safety standards, and zero impact on your
              home infrastructure. Our compact home lifts consume less energy
              than a home appliance, require 90% less maintenance than its
              alternatives, and only need a small space to be installed.
            </Typography>
            <Button
              sx={{
                width: "max-content",
                alignSelf: { xs: "center", md: "unset" },
              }}
              variant="outlined"
            >
              Know More
            </Button>
          </Stack>
          <Hidden mdDown>
            <Certified />
          </Hidden>
        </Stack>
      </Stack>
    </Stack>
  );
};

const Certified = () => {
  return (
    <Stack
      spacing={3}
      sx={{
        alignSelf: { xs: "center", md: "unset" },
        textAlign: { xs: "center", md: "unset" },
      }}
    >
      <Typography fontWeight={"bold"}>Certified By:</Typography>
      <Stack spacing={3} direction={"row"}>
        <img src="/Layer_1.png" width={75} height={75} />
        <img src="/lettre.png" height={75} />
      </Stack>
    </Stack>
  );
};
