import styled, { css } from "styled-components";
import theme from "styled-theming";

const sidebarBackgroundColor = theme("mode", {
  light: "var(--color-sidebar-background-light-default)",
  dark: "var(--color-sidebar-background-dark-default)",
});

const sidebarBorderColor = theme("mode", {
  light: "var(--color-button-background-light-active)",
  dark: "var(--color-button-background-dark-active)",
});

export const LogoWrapper = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const Logo = styled.img`
  width: 48px;
`;

const brandTextColor = theme("mode", {
  light: "var(--color-text-logo-light-default)",
  dark: "var(--color-text-logo-dark-default)",
});

export const Brand = styled.p`
  margin: 6px;
  padding: 0;
  font-weight: bold;
  font-size: 24px;
  line-height: 1;
  color: ${brandTextColor};
  opacity: 1;
  transition: opacity 0.1s;
`;

const toggleArrayColor = theme("mode", {
  light: "var(--color-text-light-default)",
  dark: "var(--color-text-dark-default)",
});

export const Toggle = styled.button`
  position: absolute;
  top: 50%;
  left: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: ${({ $isOpened }) =>
    $isOpened ? sidebarBorderColor : sidebarBackgroundColor};
  border: none;
  border-radius: 20px;
  box-shadow: none;
  transform: ${({ $isOpened }) =>
    $isOpened ? "translate(25%, -50%)" : "translate(32px, -50%)"};
  color: ${toggleArrayColor};
  cursor: pointer;
  transition: transform 0.75s;
`;

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const navButtonBackground = theme("mode", {
  light: "var(--color-button-background-light-default)",
  dark: "var(--color-button-background-dark-default)",
});

const navButtonBackgroundHover = theme("mode", {
  light: "var(--color-sidebar-background-light-hover)",
  dark: "var(--color-sidebar-background-dark-hover)",
});

const navButtonBackgroundActive = theme("mode", {
  light: "var(--color-button-background-light-active)",
  dark: "var(--color-button-background-dark-active)",
});

const navButtonColor = theme("mode", {
  light: "var(--color-text-light-default)",
  dark: "var(--color-text-dark-default)",
});

const navButtonColorHover = theme("mode", {
  light: "var(--color-text-light-hover)",
  dark: "var(--color-text-dark-hover)",
});

const navButtonColorActive = theme("mode", {
  light: "var(--color-text-light-active)",
  dark: "var(--color-text-dark-active)",
});

export const NavButton = styled.button`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 28px 1fr;
  grid-column-gap: 10px;
  align-items: center;
  justify-items: center;
  border: none;
  border-radius: 10px;
  background-color: ${({ $isActive }) =>
    $isActive ? navButtonBackgroundActive : navButtonBackground};
  color: ${({ $isActive }) =>
    $isActive ? navButtonColorActive : navButtonColor};
  cursor: pointer;
  transition: background-color 0.5s, color 0.5s;

  &:hover {
    background-color: ${navButtonBackgroundHover};
    color: ${navButtonColorHover};
  }
`;

export const NavButtonIcon = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;

  svg {
    width: 100%;
    height: 100%;
  }

  ${({ $withNottify }) =>
    $withNottify &&
    css`
      &::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: red;
        transform: translate(25%, -25%);
      }
    `}
`;

export const NavButtonText = styled.span`
  justify-self: start;
  font-weight: bold;
  font-size: 16px;
  line-height: 1em;
  opacity: 1;
  transition: opacity 0.1s;
`;

export const Root = styled.aside`
  width: ${({ $isOpened }) => ($isOpened ? "280px" : "88px")};
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  grid-row-gap: 20px;
  flex: 1 1 100%;
  margin: 20px;
  padding: 20px;
  background-color: ${sidebarBackgroundColor};
  border-radius: 20px;
  box-sizing: border-box;
  outline: 2px solid ${sidebarBorderColor};
  outline-offset: -4px;
  transition: width 0.3s ease-in-out;

  ${({ $isOpened }) =>
    !$isOpened &&
    css`
      ${Brand},
      ${NavButtonText} {
        opacity: 0;
        overflow: hidden;
      }
    `}

  button {
    &:focus,
    &:focus-visible {
      outline: 2px solid ${brandTextColor};
    }
  }
`;
