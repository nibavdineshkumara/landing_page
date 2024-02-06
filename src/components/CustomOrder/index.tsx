"use client";
import { useIsInViewport } from "@/hooks/useIsInViewPort";
import { Info } from "@mui/icons-material";
import { Box, Button, FormLabel, Link, Stack, Typography } from "@mui/joy";
import { UIEvent, useEffect, useRef, useState } from "react";
import { Accessories } from "./Accessories";
import { ColorSelection } from "./ColorSelection";
import { ModelSelection } from "./ModelSelection";
import { Selection } from "./Selection";
import "./custom_order.module.css";

const OutView = [
  {
    img: "Display.png",
  },
  {
    img: "chair3.jpg",
  },
  {
    img: "Integrated.png",
  },
  {
    img: "LeftHand.png",
  },
  {
    img: "RightHand.png",
  },
  {
    img: "SplitUnit.png",
  },
  {
    img: "Standard.png",
  },
];
export const CustomOrder = () => {
  const floorRef = useRef(null);
  const doorAccessRef = useRef(null);
  const multipleAccessRef = useRef(null);
  const doorOpeningRef = useRef(null);
  const soundProfileRef = useRef(null);
  const buttonDisplayRef = useRef(null);
  const colorRef = useRef(null);
  const foldableRef = useRef(null);
  const alexaRef = useRef(null);
  const coverPlateRoofRef = useRef(null);
  const coverPlateFloorRef = useRef(null);
  const earthquakeBracketRef = useRef(null);
  const accessoriesRef = useRef(null);
  const doorHandleRef = useRef(null);
  const isFloorRefInViewPort = useIsInViewport(floorRef);
  const isdoorAccessRefInViewPort = useIsInViewport(doorAccessRef);
  const ismultipleAccessRefInViewPort = useIsInViewport(multipleAccessRef);
  const isdoorOpeningRefInViewPort = useIsInViewport(doorOpeningRef);
  const issoundProfileRefInViewPort = useIsInViewport(soundProfileRef);
  const isbuttonDisplayRefInViewPort = useIsInViewport(buttonDisplayRef);
  const iscolorRefInViewPort = useIsInViewport(colorRef);
  const isfoldableRefInViewPort = useIsInViewport(foldableRef);
  const isalexaRefInViewPort = useIsInViewport(alexaRef);
  const iscoverPlateRoofRefInViewPort = useIsInViewport(coverPlateRoofRef);
  const iscoverPlateFloorRefInViewPort = useIsInViewport(coverPlateFloorRef);
  const isearthquakeBracketRefInViewPort =
    useIsInViewport(earthquakeBracketRef);
  const isaccessoriesRefInViewPort = useIsInViewport(accessoriesRef);
  const isdoorHandleRefInViewPort = useIsInViewport(doorHandleRef);
  const makeAllInvisible = () => {
    OutView?.map((out) => {
      document.getElementById(out.img).style.opacity = "0";
      document.getElementById(out.img).style.filter = "blur(30px)";
    });
  };
  const makeVisible = (id: string) => {
    document.getElementById(id).style.opacity = "1";
    document.getElementById(id).style.filter = "blur(0)";
  };
  useEffect(() => {
    makeAllInvisible();
    if (isFloorRefInViewPort) {
    } else if (iscolorRefInViewPort) {
    } else if (isdoorHandleRefInViewPort) {
      makeVisible("LeftHand.png");
    } else if (isdoorAccessRefInViewPort) {
      makeVisible("Integrated.png");
    } else if (ismultipleAccessRefInViewPort) {
    } else if (isdoorOpeningRefInViewPort) {
      makeVisible("RightHand.png");
    } else if (issoundProfileRefInViewPort) {
      makeVisible("SplitUnit.png");
    } else if (isbuttonDisplayRefInViewPort) {
      makeVisible("Display.png");
    } else if (isfoldableRefInViewPort) {
      makeVisible("chair3.jpg");
    }
  }, [
    isFloorRefInViewPort,
    iscolorRefInViewPort,
    isdoorHandleRefInViewPort,
    isfoldableRefInViewPort,
    isbuttonDisplayRefInViewPort,
    isdoorOpeningRefInViewPort,
    issoundProfileRefInViewPort,
  ]);
  const [currentImage, setCurrentImage] = useState("img1");

  const checkImage = (e: UIEvent<HTMLDivElement, UIEvent>) => {
    console.log(e.currentTarget);
  };
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "3fr 1fr",
        },
        gap: 2,
        p: 2,
        height: "100%",
      }}
    >
      <Stack sx={{ width: "100%" }}>
        {OutView?.map((out) => (
          <div
            key={out.img}
            className="section"
            id={out?.img}
            style={{
              height: "100%",
              background: `url(configurator/out/${out?.img})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              mixBlendMode: "luminosity",
              position: "fixed",
              top: 20,
              left: 20,
              width: "70%",
              opacity: 0,
              filter: "blur(30px)",
              transition:
                "filter 0.5s ease, opacity 0.5s ease, background 0.5s ease",
            }}
          ></div>
        ))}
      </Stack>
      <Stack
        sx={{
          height: "100%",
          overflow: "auto",
          pb: 5,
        }}
        spacing={10}
        onWheel={(e) => {
          let scroll = window.scrollY + window.innerHeight / 3;
          [...document.getElementsByClassName("section")].forEach((el) => {
            el.classList.remove("active");
          });
          console.log(e.currentTarget.offsetTop);
        }}
      >
        <Stack sx={{ alignItems: "center" }} spacing={2} id="name_section">
          <Typography level="h1">Series III Pro</Typography>
          <Typography>Est.Delivery Feb - Apr 2024</Typography>
          <Link startDecorator={<Info htmlColor="blue" />} color="neutral">
            Enter Delivery Zip Code
          </Link>
        </Stack>
        <Stack ref={floorRef} sx={{}}>
          <Selection
            options={[
              { id: "1", label: "G+1", helperText: "₹6.5L" },
              { id: "2", label: "G+2", helperText: "₹8.5L" },
              { id: "3", label: "G+3", helperText: "₹12.5L" },
            ]}
            label="Floor"
          />
        </Stack>
        <Stack ref={doorAccessRef}>
          <ModelSelection
            options={[
              { model: "Inline", price: "₹55,750" },
              { model: "Multiple", price: "₹1.5L" },
            ]}
            label="Door Access"
          />
        </Stack>
        <Stack spacing={2} ref={multipleAccessRef}>
          <FormLabel
            sx={{
              mb: 2,
              fontWeight: "xl",
              fontSize: "xl",
              letterSpacing: "0.15rem",
              justifyContent: "center",
            }}
          >
            Multiple Access
          </FormLabel>
          <Selection
            options={[
              { id: "1", label: "A" },
              { id: "2", label: "B", disabled: true },
              { id: "3", label: "C", disabled: true },
              { id: "4", label: "D", disabled: true },
            ]}
            subLabel="Floor-G"
            helperText="₹20,000"
          />
          <Selection
            options={[
              { id: "1", label: "A" },
              { id: "2", label: "B" },
              { id: "3", label: "C" },
              { id: "4", label: "D" },
            ]}
            subLabel="Floor-01"
            helperText="₹40,000"
          />
          <Selection
            options={[
              { id: "1", label: "A" },
              { id: "2", label: "B" },
              { id: "3", label: "C" },
              { id: "4", label: "D" },
            ]}
            subLabel="Floor-02"
            helperText="2₹0,000"
          />
          <Selection
            options={[
              { id: "1", label: "A" },
              { id: "2", label: "B" },
              { id: "3", label: "C" },
              { id: "4", label: "D" },
            ]}
            subLabel="Floor-03"
            helperText="₹20,000"
          />
        </Stack>
        <Stack>
          <Button color="neutral" sx={{ alignSelf: "center" }}>
            Feature Details
          </Button>
        </Stack>
        <Stack ref={doorOpeningRef}>
          <ModelSelection
            options={[
              { model: "LHS", price: "₹55,750" },
              { model: "RHS", price: "₹1.5L" },
            ]}
            label="Door Opening"
          />
        </Stack>
        <Stack>
          <Button color="neutral" sx={{ alignSelf: "center" }}>
            Feature Details
          </Button>
        </Stack>
        <Stack spacing={2} sx={{ alignItems: "center" }} ref={soundProfileRef}>
          <Selection
            options={[
              { id: "1", imgSrc: "/configurator/split3 1.png" },
              { id: "2", imgSrc: "/configurator/split2 2.png" },
            ]}
            label="Sound Profile"
            helperText=""
          />
          <Typography sx={{ fontWeight: "xl" }}>Split Unit</Typography>
          <Typography sx={{ fontWeight: "xl" }}>₹1.5L</Typography>
          <Stack>
            <Button color="neutral" sx={{ alignSelf: "center" }}>
              Learn More
            </Button>
          </Stack>
        </Stack>
        <Stack spacing={2} sx={{ alignItems: "center" }} ref={buttonDisplayRef}>
          <Selection
            options={[
              { id: "1", imgSrc: "/configurator/disp 1.png" },
              { id: "2", imgSrc: "/configurator/disp 2.png" },
            ]}
            label="Button/Display"
            helperText=""
          />
          <Typography sx={{ fontWeight: "xl" }}>Touch Display</Typography>
          <Typography sx={{ fontWeight: "xl" }}>₹55,750</Typography>
          <Stack>
            <Button color="neutral" sx={{ alignSelf: "center" }}>
              Learn More
            </Button>
          </Stack>
        </Stack>
        <div ref={colorRef}>
          <ColorSelection />
        </div>
        <div ref={accessoriesRef}>
          <Accessories />
        </div>
        <Stack spacing={2} sx={{ alignItems: "center" }} ref={doorHandleRef}>
          <Selection
            options={[
              { id: "1", imgSrc: "/configurator/door_handle.png" },
              { id: "2", imgSrc: "/configurator/door_handle.png" },
              { id: "3", imgSrc: "/configurator/door_handle.png" },
              { id: "4", imgSrc: "/configurator/door_handle.png" },
            ]}
            label="Door Handle"
          />
          <Typography sx={{ fontWeight: "xl" }}>Beige-Handle</Typography>
          <Typography sx={{ fontWeight: "xl" }}>₹55,750</Typography>
          <Stack>
            <Button color="neutral" sx={{ alignSelf: "center" }}>
              Learn More
            </Button>
          </Stack>
        </Stack>
        <Stack spacing={2} sx={{ alignItems: "center" }}>
          <Typography level="h2">Order Your Series III Pro</Typography>
          <Typography>Est.Delivery: Feb-Mar 2024</Typography>
          <Button fullWidth>Continue</Button>
        </Stack>
      </Stack>
    </Box>
  );
};
