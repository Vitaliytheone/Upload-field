import styled from "styled-components";

const DEFAULT_BLUE = "#3498db";
const HOVER_BLUE = "#02568f";

const getColor = (isActive: boolean) => {
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
  z-index: 1;

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

export const Wrapper = styled.div<{isActive: boolean}>`
    position: relative ;
    display: inline-block ;
    border-radius: 6px;
    background-color: #fff;

    @media screen and (min-width: 769px) {
        border: 2px dashed;
        border-color: ${({ isActive }) => getColor(isActive)};
        padding: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ${Button} {
        color: ${({ isActive }) => getColor(isActive)};
        border-color: ${({ isActive }) => getColor(isActive)};

          &:hover {
            color: #fff;
            outline: 0;
            background: transparent;
          }

          &:focus {
            outline: 0;
            background: transparent;
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

