import { useCallback } from "react";
import { getFiles, getFilesSize, getUniqFiles } from "../helpers";
import { bytesToMb } from "../../../utils";
import { THook } from '../type';

export const useFilesUpdate = ({maxSize, setValidation, files, setFiles}: THook) => {
    return useCallback((droppedFiles: FileList) => {
            const parsedFiles = getFiles(droppedFiles);
            const newFiles = getUniqFiles(files, parsedFiles);
            const size = getFilesSize(newFiles);
            if (bytesToMb(size) <= maxSize) {
                setFiles(newFiles)
                setValidation({ isError: false, isValid: true });
            } else {
                setValidation({  isError: true, isValid: false });
            }
        },
        [maxSize, setValidation, files, setFiles],
    );
};
