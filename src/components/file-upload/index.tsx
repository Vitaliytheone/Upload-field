import { useRef, useState } from "react";
import { Wrapper, FileInput, Button } from "./theme";
import { TFileUpload } from "./type";

const FileUpload = ({ multiple = true, maxSize }: TFileUpload) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isActiveDrag, setDragActive] = useState(false);
    const [files, setFiles] = useState({});

    const onDragEnter = (e: any) => {
        console.info(e);
        // e.preventDefault();
        // e.stopPropagation();
        console.info(e);
        setDragActive(true);
    };

    const onDragLeave = (e: any) => {
        console.info(e.target);
        setDragActive(false);
    };

    const onFileUpload = (e: any) => {
        console.info(e);
    };

    const onClick = () => {
        console.info("123");
        ref?.current?.click();
    };

    console.info(isActiveDrag);

    return (
        <Wrapper isActive={isActiveDrag}>
            <FileInput
                ref={ref}
                onChange={onFileUpload}
                // onClick={(e) => e.preventDefault()}
                // onDragLeave={onDragLeave}
                onDragEnter={onDragEnter}
                onDragOver={onDragEnter}
                // onDrop={onDragLeave}
                type="file"
                // multiple={multiple}
            />
            <Button onClick={onClick}>Upload</Button>
        </Wrapper>
    );
};

export default FileUpload;
