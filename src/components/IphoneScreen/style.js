import styled from "styled-components";
import { Signal } from "@styled-icons/fa-solid/Signal";
import { Wifi } from "@styled-icons/fa-solid/Wifi";
import { BatteryFull } from "@styled-icons/bootstrap/BatteryFull";
import { ArrowLeftS } from "@styled-icons/remix-line/ArrowLeftS";
import { PowerOff } from "@styled-icons/boxicons-regular/PowerOff";
import { Moon } from "@styled-icons/boxicons-solid/Moon";
import { GridAlt } from "@styled-icons/boxicons-regular/GridAlt";
import { UserCheck } from "@styled-icons/boxicons-regular/UserCheck";
import { UserPlus } from "@styled-icons/boxicons-regular/UserPlus";
import { PermMedia } from "@styled-icons/material-outlined/PermMedia";
import { Settings } from "@styled-icons/remix-line/Settings";
import { Message2 } from "@styled-icons/remix-line/Message2";
import { Notifications } from "@styled-icons/material/Notifications";

import Toggle from "react-dark-mode-toggle";

export const ToggleMode = styled(Toggle)`
  margin-left: auto;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding-top: 10px;
  justify-content: center;
  box-sizing: border-box;
`;

export const MobileContainer = styled.div`
  width: 390px;
  height: fit-content;
  border-radius: 30px;
  padding-top: 2px;
  overflow: hidden;
  position: relative;
  padding-bottom: 12px;
  background-color: ${({ color }) => color};
  border: 12px solid #000;
  box-shadow: 1px 1px 10px rgba(256, 256, 256, 0.2), 7px 10px #12294b,
    15px 15px 20px rgba(0, 0, 0, 0.4);

  ::before {
    content: "";
    width: 160px;
    height: 30px;
    display: block;
    background-color: #000;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  ::after {
    content: "";
    width: 150px;
    height: 5px;
    border-radius: 4px;
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #000;
  }
`;

export const Camera = styled.div`
  width: 22px;
  height: 22px;
  border: 2px solid #000;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  z-index: 10;

  ::before {
    content: "";
    display: block;
    width: 15.4px;
    height: 15px;
    border-radius: 50%;
    background-color: #000;
  }

  ::after {
    content: "";
    width: 6px;
    height: 7px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    bottom: 1px;
    right: 3px;
  }
`;

export const PhoneHeader = styled.div`
  width: 100%;
  padding: 0 35px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: ${(props) => props.dp && "absolute"};
  top: ${(props) => props.dp && "24px"};
`;

PhoneHeader.Right = styled.div`
  display: flex;
  align-items: center;
`;

PhoneHeader.Clock = styled.p`
  padding: 0;
  font-weight: 500;
  color: ${({ color }) => color};
`;

export const IconCon = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 25px;
  padding: 0 30px 0px 25px;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.div``;

Icon.Signal = styled(Signal)`
  color: ${({ color }) => color};
  width: 20px;
`;
Icon.Wifi = styled(Wifi)`
  color: ${({ color }) => color};
  width: 22px;
  margin-left: 7px;
`;
Icon.BatteryFull = styled(BatteryFull)`
  color: ${({ color }) => color};
  width: 25px;
  margin-left: 7px;
`;
Icon.ArrowLeftS = styled(ArrowLeftS)`
  color: ${({ color }) => color};
  width: 35px;
  cursor: pointer;
`;

Icon.PowerOff = styled(PowerOff)`
  color: ${({ color }) => color};
  width: 35px;
  cursor: pointer;
  transform: rotate(30deg);
`;

Icon.Moon = styled(Moon)`
  color: ${({ color }) => color};
  width: 30px;
  cursor: pointer;
`;

Icon.GridAlt = styled(GridAlt)`
  color: #fba22f;
  width: 30px;
  cursor: pointer;
`;
Icon.UserCheck = styled(UserCheck)`
  color: #ff75ab;
  width: 30px;
  cursor: pointer;
`;
Icon.UserPlus = styled(UserPlus)`
  color: #1ee0ff;
  width: 30px;
  cursor: pointer;
`;
Icon.PermMedia = styled(PermMedia)`
  color: #5476ff;
  width: 30px;
  cursor: pointer;
`;
Icon.Settings = styled(Settings)`
  color: #2ce38e;
  width: 30px;
  cursor: pointer;
`;
Icon.Message2 = styled(Message2)`
  color: #07c52d;
  width: 30px;
  cursor: pointer;
`;
Icon.Notifications = styled(Notifications)`
  color: #a394c2;
  width: 30px;
  cursor: pointer;
`;

export const ImgCon = styled.div`
  width: 110px;
  height: 110px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 16px;
  background-color: #fff;
  border: 1px solid #ccc;
`;

ImgCon.Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(0.9);
  object-position: 61%;
`;

export const TitleImg = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${({ color }) => color};
`;

export const Desc = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: ${({ color }) => color};
  margin-bottom: 20px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 35px;

  :last-child {
    margin-bottom: 20px;
  }
`;

export const Title = styled.div`
  font-size: 16px;
  white-space: nowrap;
  font-weight: bold;
  margin-left: 25px;
  cursor: pointer;
  color: ${({ color }) => color};
`;

export const Line = styled.div`
  width: 300px;
  height: 1px;
  margin: 10px 35px;
  background-color: #ccc;
`;

export const Display = styled.div`
  width: 366px;
  height: 674px;
`;
Display.Img = styled.img`
  width: 100%;
  height: 688px;
  object-fit: cover;
  object-position: center;
  border-radius: 16px;
  margin-top: -2px;
`;
Display.App = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  cursor: pointer;
  z-index: 9999;
  overflow: hidden;
  background-image: linear-gradient(to bottom, #000, darkblue);
  bottom: 60px;
  right: 40px;
  border-radius: 10px;
`;
Display.AppImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
