import { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import {
  Brand,
  Logo,
  LogoWrapper,
  NavButton,
  NavButtonIcon,
  NavButtonText,
  NavWrapper,
  Root,
  Toggle,
} from "./styles";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

const Sidebar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const containerClassnames = classnames("sidebar", { opened: isOpened });

  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  const toggleSidebar = () => {
    setIsOpened((v) => !v);
  };

  return (
    <Root $isOpened={isOpened} className={containerClassnames}>
      <LogoWrapper>
        <Logo src={logo} alt="TensorFlow logo" />
        <Brand>TensorFlow</Brand>
        <Toggle
          $isOpened={isOpened}
          onClick={toggleSidebar}
          role="presentation">
          <FontAwesomeIcon icon="angle-right" />
        </Toggle>
      </LogoWrapper>
      <NavWrapper aria-label="Main">
        {routes.map((route) => (
          <NavButton
            $isActive={route.title === "Sales"}
            key={route.title}
            onClick={() => {
              goToRoute(route.path);
            }}>
            <NavButtonIcon $withNottify={route.title === "Messages"}>
              <FontAwesomeIcon icon={route.icon} />
            </NavButtonIcon>
            <NavButtonText>{route.title}</NavButtonText>
          </NavButton>
        ))}
      </NavWrapper>
      <NavWrapper aria-label="Additional">
        {bottomRoutes.map((route) => (
          <NavButton
            key={route.title}
            onClick={() => {
              goToRoute(route.path);
            }}>
            <NavButtonIcon>
              <FontAwesomeIcon icon={route.icon} />
            </NavButtonIcon>
            <NavButtonText>{route.title}</NavButtonText>
          </NavButton>
        ))}
      </NavWrapper>
    </Root>
  );
};

export default Sidebar;
