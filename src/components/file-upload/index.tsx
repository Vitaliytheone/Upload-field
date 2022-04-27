import { useRef, useState } from "react";
import { Wrapper, FileInput, Button } from "./theme";
import { TFileUpload } from "./type";

const FileUpload = ({ multiple = true, maxSize }: TFileUpload) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isActiveDrag, setDragActive] = useState(false);
    const [files, setFiles] = useState({});

    const onDragEnter = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        console.info(e);
        setDragActive(true);
    };

    const onDragLeave = (e: any) => {
        console.info(e.target);
        setDragActive(false);
    };

    const onFileUpload = (e: any) => {
        console.info(e.target.files);
    };

    const onClick = () => {
        ref?.current?.click();
    };

    console.info(isActiveDrag);

    return (
        <Wrapper isActive={isActiveDrag}>
            <FileInput
                onChange={onFileUpload}
                onClick={(e) => e.preventDefault()}
                onDragLeave={onDragLeave}
                // onDragEnter={onDragEnter}
                onDragOver={onDragEnter}
                onDrop={onDragLeave}
                ref={ref}
                type="file"
                multiple={multiple}
            />
            <Button onClick={onClick}>Upload</Button>
        </Wrapper>
    );
};

export default FileUpload;
