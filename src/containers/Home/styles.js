import styled from "styled-components";

import { convertHexToRgba, colors } from "../../core";

const { primary } = colors;

export const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeGreeting = styled.h2`
  color: ${convertHexToRgba(primary, 0.8)};
`;
