import { useCallback } from "react";
import { bytesToMb, getFiles, getFilesSize, getUniqFiles } from "../helpers";
import { THook } from '../type';

export const useFilesUpdate = ({maxSize, setValidation, files, setFiles}: THook) => {
    return useCallback((droppedFiles: FileList) => {
            const parsedFiles = getFiles(droppedFiles);
            const size = getFilesSize(parsedFiles);
            const a = getUniqFiles(files, parsedFiles);
            console.info(a);
            if (bytesToMb(size) <= maxSize) {
                setFiles(parsedFiles)
                setValidation({ isError: false, isValid: true });
            } else {
                setValidation({  isError: true, isValid: false });
            }
        },
        [maxSize, setValidation, files, setFiles],
    );
};
