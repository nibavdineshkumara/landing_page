import { Button, Stack, Typography, useTheme } from "@mui/joy";
import { Hidden, useMediaQuery } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Recents = [
  {
    id: 1,
    img: "/recents/1.png",
  },
  {
    id: 2,
    img: "/recents/2.png",
  },
  {
    id: 3,
    img: "/recents/3.png",
  },
  {
    id: 4,
    img: "/recents/2.png",
  },
];
export const Section6 = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Stack sx={{ width: "100%", mt: 10 }} spacing={4}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        px={{ xs: 2, md: 10 }}
      >
        <Typography
          sx={{
            fontSize: { xs: 36, md: 64 },
            maxWidth: { md: "50%" },
            fontWeight: 500,
          }}
        >
          Recent Installation Pictures of Nibav Home Lifts
        </Typography>
        <Hidden mdDown>
          <Button variant="outlined" sx={{ alignSelf: "flex-end" }}>
            View All
          </Button>
        </Hidden>
      </Stack>
      <>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={isDesktop ? 3 : 1}
          navigation={true}
          style={{ width: "100%" }}
        >
          {Recents?.map((recent) => (
            <SwiperSlide style={{ height: "550px !important" }} key={recent.id}>
              <img src={recent.img} width={"100%"} height={"550px"} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
      <Hidden mdUp>
        <Button variant="outlined" sx={{ alignSelf: "center" }}>
          View All
        </Button>
      </Hidden>
    </Stack>
  );
};
