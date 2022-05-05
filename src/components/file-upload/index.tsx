import { useRef, useState } from "react";
import { Wrapper, FileInput, Button } from "./theme";
import { TFileUpload } from "./type";

const FileUpload = ({ multiple = true, maxSize }: TFileUpload) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isActiveDrag, setDragActive] = useState(false);
    const [trigBtn, setTrigBtn] = useState(false);
    const [files, setFiles] = useState({});

    const onDragEnter = (e: any) => {
        console.info(e);
        // e.preventDefault();
        // e.stopPropagation();
        console.info(e);
        setDragActive(true);
    };

    const onMouseEnter = () => {
        console.info(123132);
    };

    const onDragLeave = (e: any) => {
        console.info(e);
        setDragActive(false);
    };

    // const onFileUpload = (e: any) => {
    //     console.info(e.target.files);
    // };

    const onClick = async () => {
        await setTrigBtn(true);
        ref?.current?.click();
    };

    const onMouseLeave = () => {
        setTrigBtn(false);
    };

    const onClickInput = (e: React.MouseEvent<HTMLInputElement>) => {
        !trigBtn && e.preventDefault();
    };

    console.info("render");

    return (
        <Wrapper isActive={isActiveDrag}>
            <FileInput
                ref={ref}
                // onChange={onFileUpload}
                onClick={onClickInput}
                // onClick={(e) => e.preventDefault()}
                // onDragLeave={onDragLeave}
                // onDragEnter={onDragEnter}
                // onDragOver={onDragEnter}
                // onMouseEnter={onMouseEnter}
                onDragStart={onDragEnter}
                // onDrop={onDragLeave}
                type="file"
                multiple={multiple}
            />
            <Button onMouseLeave={onMouseLeave} onClick={onClick}>
                Upload
            </Button>
        </Wrapper>
    );
};

export default FileUpload;
