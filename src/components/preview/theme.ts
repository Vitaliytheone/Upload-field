import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 12px;
`

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
  background-color: rgba(5, 5, 5, 0.55);

  /* aside {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  } */
`;