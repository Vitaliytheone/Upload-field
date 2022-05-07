import { useRef, useState } from "react";
import { Wrapper, FileInput, Button } from "./theme";
import { TFileUpload } from "./type";

const FileUpload = ({ multiple = true, maxSize }: TFileUpload) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isActiveDrag, setDragActive] = useState(false);
    const [trigBtn, setTrigBtn] = useState(false);
    const [files, setFiles] = useState({});

    const onDragEnter = (e: any) => {
        e.preventDefault();
        setDragActive(true);
    };

    const onDragLeave = (e: any) => {
        e.preventDefault();
        console.info("12321");
        setDragActive(false);
    };

    // const onFileUpload = (e: any) => {
    //     console.info(e.target.files);
    // };

    // async-await hack for rerender with a new value for input's click event
    const onClick = async () => {
        await setTrigBtn(true);
        ref?.current?.click();
    };

    // clearing of button trigger
    const onMouseLeave = () => {
        setTrigBtn(false);
    };

    // if trigger is false, do prevendtdefault
    const onClickInput = (e: React.MouseEvent<HTMLInputElement>) => {
        !trigBtn && e.preventDefault();
    };

    console.info(isActiveDrag);
    return (
        <Wrapper isActive={isActiveDrag} onDragOver={onDragEnter} onDragLeave={onDragLeave} onDragEnter={onDragEnter}>
            <FileInput
                ref={ref}
                // onChange={onFileUpload}
                onClick={onClickInput}
                // onClick={(e) => e.preventDefault()}
                // onDragOver={onDragEnter}
                // onMouseEnter={onMouseEnter}
                // onDrop={onDragLeave}
                type="file"
                multiple={multiple}
            />
            <Button onDragEnter={onDragEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
                Upload
            </Button>
        </Wrapper>
    );
};

export default FileUpload;
