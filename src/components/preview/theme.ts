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

  div {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const PreviewContainer = styled.div`
  width: 20%;
  height: 120px;
  border-radius: 6px;
  box-sizing: border-box;
  margin: 0 12px;

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

  @media only screen and (max-width: 750px) {
    width: 25%;
  }

  @media only screen and (max-width: 500px) {
    width: 50%;
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
    padding: 0 0 0.4em;
  }
`;