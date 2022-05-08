import { useRef, useState } from "react";
import { Wrapper, FileInput, Button, RED } from "./theme";
import { TFileUpload } from "./type";
import { getFiles, getFilesSize, bytesToMb } from "./helpers";
import Text from "../text";

const FileUpload = ({ multiple = true, maxSize = 5, withTextError = true, accept }: TFileUpload) => {
    // maxSize in mb

    const ref = useRef<HTMLInputElement>(null);
    const [isActiveDrag, setDragActive] = useState(false);
    const [trigBtn, setTrigBtn] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const [validation, setValidation] = useState({ isValid: false, isError: false });

    // using preventDefault for IE
    const onDragMove = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setValidation({ isValid: false, isError: false });
        setDragActive(true);
    };

    const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.currentTarget.contains(e.relatedTarget as Node | null)) return;
        setDragActive(false);
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(false);
        const files = getFiles(e.dataTransfer.files);
        console.info(files);
        const size = getFilesSize(files);
        console.info(bytesToMb(size));
        if (bytesToMb(size) <= maxSize) {
            setFiles(files);
            setValidation({ ...validation, isValid: true });
        } else {
            setValidation({ ...validation, isError: true });
        }
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

    console.info(files);

    return (
        <>
            <Wrapper
                $isActive={isActiveDrag}
                $validation={validation}
                onDrop={onDrop}
                onDragLeave={onDragLeave}
                onDragEnter={onDragMove}
            >
                <FileInput
                    ref={ref}
                    // onChange={onFileUpload}
                    onClick={onClickInput}
                    // onClick={(e) => e.preventDefault()}
                    type="file"
                    accept={accept}
                    multiple={multiple}
                />
                <Button onMouseLeave={onMouseLeave} onClick={onClick}>
                    Upload
                </Button>
            </Wrapper>
            {withTextError && <Text color={RED}>File size is larger than maximum ({maxSize} mb)</Text>}
        </>
    );
};

export default FileUpload;
