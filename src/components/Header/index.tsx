import { Button, Link, Sheet, Stack } from "@mui/joy";
import Image from "next/image";
import { HeaderLink } from "./HeaderLinks";

export const Header = () => {
  return (
    <Sheet
      sx={{
        backdropFilter: "blur(20px)",
        bgcolor: "transparent",
        position: "fixed",
        zIndex: 999,
        width: "100%",
        height: "10dvh",
      }}
      component={"header"}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack direction={"row"} alignItems={"center"} pl={10} pt={2}>
          <Link>
            <img src="/logo.svg" alt="Nibav Logo" className="dark:invert" />
          </Link>
        </Stack>
        <Stack direction={"row"} spacing={10} pr={10} alignItems={"center"}>
          <HeaderLink>About Us</HeaderLink>
          <HeaderLink>Products</HeaderLink>
          <HeaderLink>Gallery</HeaderLink>
          <HeaderLink>Testimonials</HeaderLink>
          <HeaderLink>Blogs</HeaderLink>
          <HeaderLink>Become a Partner</HeaderLink>
          <Button variant="outlined">Contact Us</Button>
        </Stack>
      </Stack>
    </Sheet>
  );
};
