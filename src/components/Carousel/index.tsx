import React from "react";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 900,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = () => {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const cards = [
    "https://images.pexels.com/photos/15185102/pexels-photo-15185102.jpeg",
    "https://images.pexels.com/photos/16407235/pexels-photo-16407235.jpeg",
    "https://images.pexels.com/photos/16102230/pexels-photo-16102230.jpeg",
  ];

  return (
    <Box position="relative" height="600px" width="full" overflow="hidden">
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height="6xl"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
