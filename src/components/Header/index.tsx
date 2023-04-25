import Logo from "../../assets/images/ejcomp1.png";
import { useEffect, useState } from "react";
import {
  Box,
  Image,
  useDisclosure,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react";

const boxStyle = {
  w: "100%",
  p: "0.6rem 3rem 0.6rem 1.5rem",
  pr: { base: "1.5rem", sm: "3rem" },
  display: "flex",
  alignItems: "center",
  pos: "fixed",
  transition: "all 0.5s",
  "::after": {
    opacity: 0,
  },
};

const Header = () => {
  const [imgHeight, setImgHeight] = useState("5rem");
  const [headerOpacity, setHeaderOpacity] = useState("#0000");
  const [fontColor, setFontColor] = useState("#0000");
  const [borderBottom, setBorderBottom] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", updateHeader);
  }, [imgHeight, headerOpacity, fontColor]);

  const updateHeader = () => {
    if (window.scrollY > 0) {
      setHeaderOpacity("#000f");
      setImgHeight("2.5rem");
      setFontColor("#ffff");
      setBorderBottom("1px solid grey");
    } else if (window.scrollY <= 0) {
      setFontColor("#0000");
      setHeaderOpacity("#ffff");
      setImgHeight("5rem");
      setBorderBottom("");
    }
  };

  return (
    <Box
      sx={boxStyle}
      bg={headerOpacity}
      zIndex={1}
      color={fontColor}
      borderBottom={borderBottom}
    >
      <LinkBox zIndex={1}>
        <LinkOverlay href="">
          <Image
            src={Logo}
            height={{ base: "2.5rem", md: imgHeight }}
            transition="all 0.5s"
          />
        </LinkOverlay>
      </LinkBox>
    </Box>
  );
};

export default Header;
