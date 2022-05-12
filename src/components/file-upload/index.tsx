import React, { useRef, useState } from "react";
import { useFilesUpdate } from "./hooks/useFilesUpdate";
import { Wrapper, FileInput, Button, RED } from "./theme";
import { TFileUpload } from "./type";
import { Text } from "../../components";

const FileUpload = ({ files, setFiles, multiple = true, maxSize = 5, withTextError = true, accept }: TFileUpload) => {
    // maxSize in mb

    const ref = useRef<HTMLInputElement>(null);
    const [isActiveDrag, setDragActive] = useState(false);
    const [trigBtn, setTrigBtn] = useState(false);
    const [validation, setValidation] = useState({ isValid: false, isError: false });
    const updateFiles = useFilesUpdate({ maxSize, setValidation, setFiles });

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
        updateFiles(e.dataTransfer.files);
    };

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFiles(e.target.files!);
    };

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
                onDragOver={onDragOver}
            >
                <FileInput
                    type="file"
                    ref={ref}
                    onChange={onFileUpload}
                    onClick={onClickInput}
                    accept={accept}
                    multiple={multiple}
                />
                <Button onClick={onClick} onMouseLeave={onMouseLeave}>
                    Upload
                </Button>
            </Wrapper>
            {withTextError && validation.isError && (
                <Text color={RED}>File size is larger than maximum ({maxSize} mb)</Text>
            )}
        </>
    );
};

export default FileUpload;
