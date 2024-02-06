"use client";
import { Close, Menu } from "@mui/icons-material";
import {
  Button,
  Drawer,
  GlobalStyles,
  IconButton,
  Link,
  Sheet,
  Stack,
} from "@mui/joy";
import { Hidden, Slide } from "@mui/material";
import { useEffect, useState } from "react";
import { useScrollDirection } from "react-use-scroll-direction";
import { HeaderLink } from "./HeaderLinks";
interface Props {
  children: React.ReactElement;
  trigger?: boolean;
}
function HideOnScroll(props: Props) {
  const { children, trigger } = props;

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
type HeaderProps = {
  disableHideOnScroll?: boolean;
};
export const Header = (props: HeaderProps) => {
  const [isFixed, setIsFixed] = useState(false);
  const { isScrollingUp, isScrollingDown } = useScrollDirection();
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(inOpen);
    };
  useEffect(() => {
    if (isScrollingDown) {
      setIsFixed(true);
    }
    if (isScrollingUp) {
      setIsFixed(false);
    }
  }, [isScrollingDown, isScrollingUp]);
  return (
    <>
      <HideOnScroll trigger={props?.disableHideOnScroll ? false : isFixed}>
        <Sheet
          sx={{
            // backdropFilter: "blur(20px)",
            // bgcolor: "transparent",
            position: "fixed",
            zIndex: 999,
            width: "100%",
            height: "10dvh",
          }}
          component={"header"}
        >
          <GlobalStyles
            styles={(theme) => ({
              ":root": {
                "--Header-height": "72px",
              },
            })}
          />
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            height={"100%"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              pl={{ xs: 1, md: 10 }}
              pt={2}
            >
              <Link>
                <img src="/logo.svg" alt="Nibav Logo" className="dark:invert" />
              </Link>
            </Stack>
            <Stack
              direction={"row"}
              spacing={10}
              pr={{ xs: 2, md: 10 }}
              alignItems={"center"}
            >
              <Hidden mdDown>
                <HeaderLink>About Us</HeaderLink>
                <HeaderLink>Products</HeaderLink>
                <HeaderLink>Gallery</HeaderLink>
                <HeaderLink>Testimonials</HeaderLink>
                <HeaderLink>Blogs</HeaderLink>
                <HeaderLink>Become a Partner</HeaderLink>
                <HeaderLink href="custom_order">Custom Order</HeaderLink>
                <HeaderLink href="configurator">Configurator</HeaderLink>
                <Button variant="outlined">Contact Us</Button>
              </Hidden>
              <Hidden mdUp>
                <IconButton onClick={toggleDrawer(true)} size="lg">
                  <Menu />
                </IconButton>
              </Hidden>
            </Stack>
          </Stack>
        </Sheet>
      </HideOnScroll>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <Stack spacing={2} alignItems={"center"} pt={5}>
          <IconButton sx={{}} size="lg" onClick={toggleDrawer(false)}>
            <Close />
          </IconButton>
          <HeaderLink>About Us</HeaderLink>
          <HeaderLink>Products</HeaderLink>
          <HeaderLink>Gallery</HeaderLink>
          <HeaderLink>Testimonials</HeaderLink>
          <HeaderLink>Blogs</HeaderLink>
          <HeaderLink>Become a Partner</HeaderLink>
          <Button variant="outlined">Contact Us</Button>
        </Stack>
      </Drawer>
    </>
  );
};
