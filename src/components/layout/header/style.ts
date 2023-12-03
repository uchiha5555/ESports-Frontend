import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const HeaderContainer = styled.header<{ isTop: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  transform: translate(-50%, 0);
  ${({ isTop }) =>
    !isTop
      ? `position: fixed; transform: translate(-50%, 0);`
      : `position: relative`}
  top: 0;
  left: 50%;
  z-index: 8000;
  width: 100%;
  background: #0b0b0b;

`;

export const HeaderWrapper = styled.menu`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 117px;
  padding: 40px 0 32px;

  > div {
    > :not(:first-child) {
      @media screen and (max-width: 600px) {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  width: 100%;
  max-width: 500px;
`

export const MenuItem = styled.div`
  font-family: ${GV('font1')};
  font-size: 1rem;
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 10rem;
  padding: 1rem 1.125rem;
  background: #111;
  height: 3rem;
  font-family: ${GV('font1')};
  font-size: 0.75rem;
`
