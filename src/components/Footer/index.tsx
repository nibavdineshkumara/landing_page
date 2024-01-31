import { Mail, Phone } from "@mui/icons-material";
import { Button, Divider, Input, Stack, Typography } from "@mui/joy";
import Link from "next/link";

export const Footer = () => {
  return (
    <Stack
      sx={{
        // background: "url(/mountain_bg.svg) no-repeat",
        // backgroundSize: "cover",
        // height: "338px",
        // width: "100%",
        // maskImage: "linear-gradient(black, transparent)",
        // WebkitMaskImage: "linear-gradient(black, transparent)",
        backgroundColor: "black",
      }}
      p={{ xs: 2, sm: 5, md: 10 }}
      pb={2}
      spacing={5}
    >
      <Stack
        direction={{ sm: "row" }}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Stack spacing={1}>
          <Typography sx={{ color: "white" }} level="body-xs">
            Join our Community
          </Typography>
          <Typography sx={{ color: "white" }} level="h2">
            Subscribe to our Newsletter
          </Typography>
        </Stack>
        <Stack sx={{}}>
          <Input
            size="lg"
            placeholder="E-mail"
            sx={{ width: { xs: "90%", sm: "100%" }, alignSelf: "center" }}
            endDecorator={<Button>Subscribe</Button>}
          />
        </Stack>
      </Stack>
      <Divider sx={{ bgcolor: "white" }} />
      <Stack
        direction={{ sm: "row" }}
        sx={{ justifyContent: "space-between", alignItems: "center", gap: 3 }}
      >
        <img src="/logo.png" />
        <Stack direction={"row"} spacing={5}>
          <img src="/social_media_icons/facebook.png" />
          <img src="/social_media_icons/instagram.png" />
          <img src="/social_media_icons/linkedin.png" />
          <img src="/social_media_icons/youtube.png" />
          <img src="/social_media_icons/pinterest.png" />
        </Stack>
      </Stack>
      <Divider sx={{ bgcolor: "white" }} />

      <Stack
        direction={{ sm: "row" }}
        justifyContent={"space-between"}
        alignItems={{ sm: "center" }}
        sx={{ gap: 2 }}
      >
        <Stack spacing={2}>
          <Typography sx={{ color: "white", fontSize: 20 }}>
            Corporate Office Address
          </Typography>
          <Typography level="body-sm" sx={{ color: "white" }}>
            NIBAV LIFTS INC,Office No 227/228Suite 200, 5700 Yonge
            StreetToronto, ON M2M 4K2
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography sx={{ color: "white", fontSize: 20 }}>
            Showroom Address
          </Typography>
          <Typography level="body-sm" sx={{ color: "white" }}>
            Sulzerallee 80,8409 <br />
            Winterthur,Switzerland
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography sx={{ color: "white", fontSize: 20 }}>Contact</Typography>
          <Typography
            level="body-sm"
            sx={{ color: "white" }}
            startDecorator={<Mail htmlColor="white" />}
          >
            info@nibavlifts.com.au
          </Typography>
          <Typography
            level="body-sm"
            sx={{ color: "white" }}
            startDecorator={<Phone htmlColor="white" />}
          >
            +41 215391966
          </Typography>
        </Stack>
      </Stack>
      <Divider sx={{ bgcolor: "white" }} />
      <Stack
        direction={{ sm: "row" }}
        sx={{
          justifyContent: "space-between",
          marginTop: "10px !important",
          gap: 2,
        }}
      >
        <Link href={"#"} style={{ textDecoration: "none" }}>
          <Typography sx={{ color: "white" }} level="body-sm">
            Privacy Policy
          </Typography>
        </Link>
        <Typography sx={{ color: "white" }} level="body-sm">
          © Copyright 2024 All Rights Reserved By Nibav Lifts
        </Typography>
      </Stack>
    </Stack>
  );
};
