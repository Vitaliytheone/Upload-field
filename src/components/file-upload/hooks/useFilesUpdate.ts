import { useCallback } from "react";
import { bytesToMb, getFiles, getFilesSize } from "../helpers";
import { THook } from '../type';

export const useFilesUpdate = ({maxSize, setValidation, setFiles}: THook) => {

    return useCallback((files: FileList) => {
            const parsedFiles = getFiles(files);
            const size = getFilesSize(parsedFiles);
            if (bytesToMb(size) <= maxSize) {
                setFiles(parsedFiles);
                setValidation({ isError: false, isValid: true });
            } else {
                setValidation({  isError: true, isValid: false });
            }
        },
        [maxSize, setValidation, setFiles],
    );
};
