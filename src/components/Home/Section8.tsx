import {
  Box,
  Button,
  IconButton,
  Modal,
  ModalClose,
  Stack,
  Typography,
  useTheme,
} from "@mui/joy";
import { Hidden, useMediaQuery } from "@mui/material";
import { useRef, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PlayArrow } from "@mui/icons-material";
const Reviews = [
  {
    id: 1,
    src: "https://fast.wistia.net/embed/iframe/zaeywt56o8?autoplay=1",
    thumbnail:
      "https://nibavlifts.com/wp-content/uploads/2022/06/Thumnalis-01.jpg",
  },
  {
    id: 2,
    src: "https://fast.wistia.net/embed/iframe/5g9fpjji84?autoplay=1",
    thumbnail:
      "https://nibavlifts.com/wp-content/uploads/2022/06/Thumnalis-02.jpg",
  },
  {
    id: 3,
    src: "https://fast.wistia.net/embed/iframe/70p896jy6t?autoplay=1",
    thumbnail:
      "https://nibavlifts.com/wp-content/uploads/2022/06/Thumnalis-03.jpg",
  },
  {
    id: 4,
    src: "https://fast.wistia.net/embed/iframe/bakiu2bjap?autoplay=1",
    thumbnail:
      "https://nibavlifts.com/wp-content/uploads/2022/06/Thumnalis-04.jpg",
  },
  {
    id: 5,
    src: "https://fast.wistia.net/embed/iframe/j4ppuz5d7o?autoplay=1",
    thumbnail:
      "https://nibavlifts.com/wp-content/uploads/2022/06/Thumnalis-05.jpg",
  },
  {
    id: 6,
    src: "https://fast.wistia.net/embed/iframe/uv9voiunhv?autoplay=1",
    thumbnail:
      "https://nibavlifts.com/wp-content/uploads/2022/06/Thumnalis-06.jpg",
  },
];
export const Section8 = () => {
  const [modalOpen, setModalOpen] = useState(false);
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
      <Box sx={{ px: { xs: 2, md: 10 } }}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={isDesktop ? 3 : 1}
          navigation={true}
          style={{ width: "100%" }}
        >
          {Reviews?.map((review) => (
            <SwiperSlide
              style={{ width: "550px !important", height: "350px !important" }}
              key={review.id}
            >
              <div style={{ width: "550px", height: "350px" }}>
                <VideoWithThumbnail
                  thumbnail={review.thumbnail}
                  src={review.src}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Hidden mdUp>
        <Button variant="outlined" sx={{ alignSelf: "center" }}>
          View All
        </Button>
      </Hidden>
    </Stack>
  );
};

type Props = {
  thumbnail: string;
  src: string;
};
const VideoWithThumbnail = (props: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <img
        decoding="async"
        src={props?.thumbnail}
        alt=""
        data-lazy-src={props?.thumbnail}
        data-ll-status="loaded"
        width={"100%"}
        height={"100%"}
      />
      <IconButton
        sx={{
          position: "absolute",
          top: "40%",
          left: "40%",
          bgcolor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "20%",
          height: 80,
          "&:hover": {
            background: "rgba(0, 0, 0, 0.7)",
          },
        }}
        onClick={() => {
          setModalOpen(true);
        }}
        size="lg"
      >
        <PlayArrow sx={{ fontSize: 80 }} htmlColor="white" />
      </IconButton>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ width: "100%", height: { md: "100%" } }}>
          <ModalClose variant="solid" size="lg" sx={{ m: 1 }} />
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <iframe
              src={props.src}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* <video
              width="100%"
              height="100%"
              preload="auto"
              controls
              autoPlay
              style={{ objectFit: "cover" }}
            >
              <source src={`${props.src}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

function Video({ src }: { src: string }) {
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
