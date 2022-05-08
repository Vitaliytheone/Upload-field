import { TInputValidation } from './type';
import styled from "styled-components";

export const DEFAULT_BLUE = "#3498db";
export const HOVER_BLUE = "#02568f";
export const GREEN = "#64e222";
export const RED = "#fe0d0d";

const getColor = (isActive: boolean, validation: TInputValidation, isWrapBorder?: boolean) => {
  if(validation.isError && isWrapBorder) return RED;
  if(validation.isValid && isWrapBorder) return GREEN;
  return isActive ? HOVER_BLUE : DEFAULT_BLUE;
}

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid;
  cursor: pointer;
  padding: 24px 36px;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 6px;
  color: #3498db;
  transition: color 250ms ease-in-out;
  width: 220px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%); 
    width: 0;
    height: 101%;
    background: #3498db;
    z-index: -1;
    transition: width 250ms ease-in-out;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
`

export const Wrapper = styled.div<{$isActive: boolean, $validation: TInputValidation}>`
    position: relative;
    display: inline-block;
    border-radius: 6px;
    background-color: #fff;
    z-index: 2;

    @media screen and (min-width: 769px) {
        border: 2px dashed;
        border-color: ${({ $isActive, $validation }) => getColor($isActive, $validation, true)};
        padding: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 3;
    }

    ${Button} {
        color: ${({ $isActive, $validation }) => getColor($isActive, $validation)};
        border-color: ${({ $isActive, $validation }) => getColor($isActive, $validation)};

          &:hover {
            color: #fff;
            outline: 0;
            background: transparent;
          }

          &:focus {
            outline: 0;
            background: transparent;
          }
    }

    & + span {
      margin-top: 12px;
    }
`

export const FileInput = styled.input`
    font-size: 18px;
    display: block;
    width: 100%;
    border: none;
    text-transform: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
`

