import { Button, Stack, Typography, useTheme } from "@mui/joy";
import { Hidden, useMediaQuery } from "@mui/material";
import { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Recents = [
  {
    id: 1,
    src: "/reviews/1.mp4",
  },
  {
    id: 2,
    src: "/reviews/2.mp4",
  },
  {
    id: 3,
    src: "/reviews/3.mp4",
  },
];
export const Section8 = () => {
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
          Hear from our Thrilled Clients!
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
            <SwiperSlide
              style={{ height: isDesktop ? "550px !important" : "400px" }}
              key={recent.id}
            >
              <div style={{ width: "100%", height: "550px" }}>
                <Video src={recent.src} />
              </div>
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

export function Video({ src }: { src: string }) {
  const ref = useRef<any>(null);
  return (
    <video
      ref={ref}
      width="100%"
      height="100%"
      preload="auto"
      controls
      onMouseEnter={() => {
        ref.current.play();
      }}
      onMouseLeave={() => {
        ref.current.pause();
      }}
      style={{ objectFit: "cover" }}
    >
      <source src={`${src}#t=0.1`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
