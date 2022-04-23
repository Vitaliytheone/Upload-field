import { useRef, useState } from "react";
import { Wrapper, FileInput, Button } from "./theme";
import { TFileUpload } from "./type";

const FileUpload = ({ multiple = true, maxSize }: TFileUpload) => {
    const ref = useRef(null);
    const [files, setFiles] = useState({});

    return (
        <Wrapper role="button">
            <FileInput type="file" multiple={multiple} ref={ref} />
            <Button>Upload</Button>
        </Wrapper>
    );
};

export default FileUpload;
