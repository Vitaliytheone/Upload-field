import { useRef, useState } from "react";
import { Wrapper, FileInput, Button } from "./theme";
import { TFileUpload } from "./type";

const FileUpload = ({ multiple = true, maxSize }: TFileUpload) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isActiveDrag, setDragActive] = useState(false);
    const [files, setFiles] = useState({});

    const onDragEnter = () => {
        setDragActive(true);
    };

    const onDragLeave = () => {
        setDragActive(false);
    };

    const onClick = () => {
        ref?.current?.click();
    };

    console.info(isActiveDrag);

    return (
        <Wrapper
            role="button"
            isActive={isActiveDrag}
            onDragLeave={onDragLeave}
            onDragEnter={onDragEnter}
            onDrop={onDragLeave}
        >
            <FileInput onClick={(e) => e.preventDefault()} type="file" multiple={multiple} ref={ref} />
            <Button onClick={onClick}>Upload</Button>
        </Wrapper>
    );
};

export default FileUpload;
