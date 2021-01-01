import React from "react";
import { useHistory } from "react-router-dom";
import cameraIcon from "../../assets/icons/camera_white.svg";
import {Icon, Title, Container} from "./style";

const Header = () => {
  const history = useHistory();
  return (
    <Container>
      <Icon src={cameraIcon} alt="" />
      <Title onClick={() => history.push("/")}>Widgets app</Title>
    </Container>
  );
};



export default Header;
