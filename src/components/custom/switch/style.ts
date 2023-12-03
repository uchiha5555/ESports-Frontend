import { GV } from "@/utils/style.util";
import styled from "styled-components";

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 36px;
  height: 24px;
  border-radius: 100px;

  position: relative;
  transition: background-color 0.2s;

  &:before {
    position: absolute;
    content: '';
    height: 4px;
    width: 24px;
    left: 5px;
    bottom: calc(50% - 2px);
    background-color: ${GV('gray')};
    transition: 0.4s;
  }
`;

export const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  border-radius: 45px;
  transition: 0.2s;
  background: ${GV('primary')};
  /* box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29); */
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 24px;
  }
`;