import React, { useState, useEffect, useContext } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from "../../context";
import {
  Container,
  MobileContainer,
  IconCon,
  Icon,
  PhoneHeader,
  ImgCon,
  Camera,
  TitleImg,
  Desc,
  Item,
  Title,
  Line,
  Display,
  ToggleMode,
} from "./style";
import img from "../../assets/images/cat.svg";
import ScreenImg from "../../assets/images/screenOne.jpeg";

const IphoneScreen = () => {
  const clockDatas = new Date();
  const [clockData, setClockData] = useState(clockDatas);
  const [back, setBack] = useState(false);
  const [mode, setMode] = useState(false);
  const [theme, setTheme] = useContext(ThemeContext);

  const dark = {
    icon: "#5c5c5c",
    title: "black",
    bacground: "#f5f7ff",
  };

  const light = {
    icon: "white",
    title: "#f5f7ff",
    bacground: "#0F1F27",
  };

  const onChange = () => {
    setMode(!mode);
    setTheme(mode ? dark : light);
  };

  const onBack = () => {
    setBack(!back);
  };
  console.log(back);

  const Update = () => {
    setClockData(new Date());
  };

  useEffect(() => {
    setInterval(() => Update(), 1000);
  }, []);

  return (
    <Container>
      <MobileContainer color={theme.bacground}>
        {back ? (
          <div>
            <Camera></Camera>
            <PhoneHeader>
              <PhoneHeader.Clock color={theme.title}>
                {clockData.toLocaleTimeString().slice(0, -3)}
              </PhoneHeader.Clock>
              <PhoneHeader.Right>
                <Icon.Signal color={theme.title} />
                <Icon.Wifi color={theme.title} />
                <Icon.BatteryFull color={theme.title} />
              </PhoneHeader.Right>
            </PhoneHeader>
            <IconCon>
              <Icon.ArrowLeftS onClick={onBack} color={theme.icon} />
              <Icon.PowerOff onClick={onBack} color={theme.icon} />
            </IconCon>
            <ImgCon>
              <ImgCon.Img src={img} />
            </ImgCon>
            <TitleImg color={theme.title}>Cassion</TitleImg>
            <Desc color={theme.title}>No one</Desc>
            {/* Dark */}
            <Item>
              <Icon.Moon color={theme.icon} />
              <Title color={theme.title}>Dark Mode</Title>
              <ToggleMode
                onChange={onChange}
                checked={mode}
                size={55}
                speed={2.6}
              />
            </Item>
            {/* Story */}
            <Item>
              <Icon.GridAlt />
              <Title color={theme.title}>Story</Title>
            </Item>
            {/* UserCheck */}
            <Item>
              <Icon.UserCheck />
              <Title color={theme.title}>Chat heads</Title>
            </Item>
            {/* UsetPlus */}
            <Item>
              <Icon.UserPlus />
              <Title color={theme.title}>Groups</Title>
            </Item>

            <Line />

            {/* Picture */}
            <Item>
              <Icon.PermMedia />
              <Title color={theme.title}>Media and photos</Title>
            </Item>
            {/* Settings */}
            <Item>
              <Icon.Settings />
              <Title color={theme.title}>Setting and privacy</Title>
            </Item>
            {/* Message */}
            <Item>
              <Icon.Message2 />
              <Title color={theme.title}>Help cente</Title>
            </Item>
            {/* Notification */}
            <Item>
              <Icon.Notifications />
              <Title color={theme.title}>Help cente</Title>
            </Item>
          </div>
        ) : (
          <Display>
            <PhoneHeader dp>
              <PhoneHeader.Clock>
                {clockData.toLocaleTimeString().slice(0, -3)}
              </PhoneHeader.Clock>
              <PhoneHeader.Right>
                <Icon.Signal />
                <Icon.Wifi />
                <Icon.BatteryFull />
              </PhoneHeader.Right>
            </PhoneHeader>
            <Display.Img src={ScreenImg} alt="Screen" />

            <Display.App onClick={onBack}>
              <Display.AppImg src={img} alt="cat" />
            </Display.App>
          </Display>
        )}
      </MobileContainer>
    </Container>
  );
};

export default IphoneScreen;
