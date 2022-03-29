import React from "react";
import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: ${(props) => (props.width ? props.width : "100%")};
  font-family: ${(props) =>
    props.font ? props.font : props.theme.fonts.body.fontFamily};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

// HEADING PROPS

// const handleHeadingType = (fontFamily) => {
//   switch (h) {
//     case "h1":
//       return (props) => props.theme.fonts.h1.fontFamily;
//     case "h2":
//       return (props) => props.theme.fonts.h2.fontFamily;
//     case "h3":
//       return (props) => props.theme.fonts.h3.fontFamily;
//     case "h4":
//       return (props) => props.theme.fonts.h4.fontFamily;
//     case "h5":
//       return (props) => props.theme.fonts.h5.fontFamily;
//     case "h6":
//       return (props) => props.theme.fonts.h6.fontFamily;
//     default:
//       return (props) => props.theme.fonts.heading;
//   }
// };

export const CardHeading1 = styled.h1`
  font-size: ${(props) =>
    props.size ? props.size : props.theme.fonts.h1.size};
  font-weight: ${(props) =>
    props.fw ? props.fw : props.theme.fonts.h1.fontWeight};
  font-family: ${(props) => props.theme.fonts.h1.fontFamily};
  text-align: ${(props) => (props.position ? props.position : "center")};
`;

export const CardHeading2 = styled.h2`
  font-size: ${(props) =>
    props.size ? props.size : props.theme.fonts.h2.size};
  font-weight: ${(props) =>
    props.fw ? props.fw : props.theme.fonts.h2.fontWeight};
  font-family: ${(props) => props.theme.fonts.h2.fontFamily};
  text-align: ${(props) => (props.position ? props.position : "center")};
`;

export const CardHeading3 = styled.h3`
  font-size: ${(props) =>
    props.size ? props.size : props.theme.fonts.h3.size};
  font-weight: ${(props) =>
    props.fw ? props.fw : props.theme.fonts.h3.fontWeight};
  font-family: ${(props) => props.theme.fonts.h3.fontFamily};
  text-align: ${(props) => (props.position ? props.position : "center")};
`;

export const CardHeading4 = styled.h4`
  font-size: ${(props) =>
    props.size ? props.size : props.theme.fonts.h4.size};
  font-weight: ${(props) =>
    props.fw ? props.fw : props.theme.fonts.h4.fontWeight};
  font-family: ${(props) => props.theme.fonts.h4.fontFamily};
  text-align: ${(props) => (props.position ? props.position : "center")};
`;

export const CardHeading5 = styled.h5`
  font-size: ${(props) =>
    props.size ? props.size : props.theme.fonts.h5.size};
  font-weight: ${(props) =>
    props.fw ? props.fw : props.theme.fonts.h5.fontWeight};
  font-family: ${(props) => props.theme.fonts.h5.fontFamily};
  text-align: ${(props) => (props.position ? props.position : "center")};
`;

export const CardHeading6 = styled.h6`
  font-size: ${(props) =>
    props.size ? props.size : props.theme.fonts.h6.size};
  font-weight: ${(props) =>
    props.fw ? props.fw : props.theme.fonts.h6.fontWeight};
  font-family: ${(props) => props.theme.fonts.h6.fontFamily};
  text-align: ${(props) => (props.position ? props.position : "center")};
`;

// after heading
export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

// for an individual section in the card
export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;
