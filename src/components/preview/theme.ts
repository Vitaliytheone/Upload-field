import styled from "styled-components";

export const ImagePreview = styled.img`
    border-radius: 6px;
    width: 100%;
    height: 100%;
`;

export const FileMetaData = styled.div<{isImage: boolean}>`
  display: ${(props) => (props.isImage ? "none" : "flex")};
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  background-color: rgba(5, 5, 5, 0.5);
  word-break: break-all;

  div {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const PreviewContainer = styled.div`
  width: 60%;
  height: 120px;
  border-radius: 6px;
  box-sizing: border-box;
  margin: 12px;

  &:hover {
    opacity: 0.5;

    ${FileMetaData} {
      display: flex;
    }
  }

  & > div {
    height: 100%;
    position: relative;
  }

  @media screen and (min-width: 421px) {
      width: 40%;
  }

  @media screen and (min-width: 769px) {
      width: 25%;
  }

`;