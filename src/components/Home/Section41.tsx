import {
  Button,
  Card,
  CardContent,
  CardCover,
  Stack,
  Typography,
  useTheme,
} from "@mui/joy";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { HeadingLabel } from "./HeadingLabel";

// Import Swiper styles
import { useMediaQuery } from "@mui/material";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const StaticAction = (
  <Stack direction={"row"} spacing={2}>
    <Button variant="outlined">Learn More</Button>
    <Button variant="outlined">Book Now</Button>
  </Stack>
);

type ModelsDataType = {
  id: number;
  title: string;
  img: string;
  caption: string;
  actions: React.ReactNode;
};
export const ModelsData: ModelsDataType[] = [
  {
    id: 1,
    title: "Nibav Series II Max",
    img: "/Models/slide1.jpeg",
    caption: "Home Elevator",
    actions: StaticAction,
  },
  {
    id: 2,
    title: "Nibav Series II Max",
    img: "/Models/slide1.jpeg",
    caption: "Home Elevator",
    actions: StaticAction,
  },
  {
    id: 3,
    title: "Nibav Series II Max",
    img: "/Models/slide1.jpeg",
    caption: "Home Elevator",
    actions: StaticAction,
  },
  {
    id: 4,
    title: "Nibav Series II Max",
    img: "/Models/slide1.jpeg",
    caption: "Home Elevator",
    actions: StaticAction,
  },
  {
    id: 5,
    title: "Nibav Series II Max",
    img: "/Models/slide1.jpeg",
    caption: "Home Elevator",
    actions: StaticAction,
  },
  {
    id: 6,
    title: "Nibav Series II Max",
    img: "/Models/slide1.jpeg",
    caption: "Home Elevator",
    actions: StaticAction,
  },
  {
    id: 7,
    title: "Nibav Series II Max",
    img: "/Models/slide1.jpeg",
    caption: "Home Elevator",
    actions: StaticAction,
  },
  {
    id: 8,
    title: "Nibav Series II Max",
    img: "/Models/slide1.jpeg",
    caption: "Home Elevator",
    actions: StaticAction,
  },
];
export const Section41 = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Stack>
      <HeadingLabel>Nibav Home Elevators Models</HeadingLabel>
      <Stack sx={{ mb: 10 }}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={isDesktop ? 3 : 1}
          navigation={true}
          style={{ width: "100%" }}
        >
          {ModelsData?.map((model) => (
            <SwiperSlide style={{ height: "550px !important" }} key={model.id}>
              <Slide {...model} />
            </SwiperSlide>
          ))}
          {/* <Stack direction={"row"} spacing={2} mt={3}>
            <IconButton
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                bgcolor: "black",
                "&:hover": {
                  bgcolor: "black",
                },
              }}
              ref={navigationPrevRef}
              onClick={() => swiper.slidePrev()}
            >
              <ArrowBackIos htmlColor="white" fontSize="large" />
            </IconButton>
            <IconButton
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                bgcolor: "black",
                "&:hover": {
                  bgcolor: "black",
                },
              }}
              ref={navigationNextRef}
              onClick={() => swiper.slideNext()}
            >
              <ArrowForwardIos htmlColor="white" fontSize="large" />
            </IconButton>
          </Stack> */}
        </Swiper>
      </Stack>
    </Stack>
  );
};

const Slide = (props: ModelsDataType) => {
  return (
    <Card
      sx={{
        height: "100%",
        // width: "100%",
        padding: 0,
        borderRadius: 0,
        border: "none",
        background: "#d9d9d9",
      }}
    >
      {/* <div
        style={{
          // width: "100%",
          height: "340px",
        }}
      >
        <div
          style={{
            // background:
            //   "linear-gradient(180deg, rgb(243, 243, 243) 0%, rgba(243, 243, 243, 0) 63.02%)",
            background: "linear-gradient(180deg, white 0%, grey 100%)",
            // background:
            //   "linear-gradient(180deg, rgb(243, 243, 243) 0%, rgba(243, 243, 243, 0) 63.02%)",
            height: "135px",
            left: 0,
            position: "fixed",
            top: 0,
            // width: "100%",
            zIndex: 2,
          }}
        />
      </div> */}
      <CardCover
        sx={{
          zIndex: 2,
          // background: "linear-gradient(0deg, #bdbdbd, white 80%) transparent",
          background: "linear-gradient(0deg, rgba(0,0,0,0), white)",
          // background:
          //   "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardCover sx={{ zIndex: 1 }}>
        <img src={props?.img} loading="lazy" alt="" />
      </CardCover>
      {/* <div
        style={{
          height: "100%",
          // width: "100%",
          zIndex: 1,
        }}
      >
        <img
          style={{
            height: "100%",
            left: 0,
            position: "fixed",
            top: 100,
            // width: "750px",
          }}
          alt="View"
          src={props?.img}
        />
      </div> */}
      <CardContent
        sx={{ position: "absolute", alignSelf: "center", zIndex: 3 }}
      >
        <Stack sx={{ alignItems: "center", p: 5 }}>
          <Typography>{props?.caption}</Typography>
          <Typography fontSize={32} fontWeight={500} mb={3} mt={2}>
            {props?.title}
          </Typography>
          {props?.actions}
        </Stack>
      </CardContent>
    </Card>
  );
};
