import { useRef, useState } from "react";
import { Wrapper, FileInput } from "./theme";

const FileUpload = ({ label, maxSize }: any) => {
    const ref = useRef(null);
    const [files, setFiles] = useState({});

    return (
        <Wrapper role="button">
            <FileInput type="file" ref={ref} />
        </Wrapper>
    );
};

export default FileUpload;
