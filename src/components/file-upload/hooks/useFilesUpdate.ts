import { useCallback, Dispatch, SetStateAction } from "react";
import { bytesToMb, getFiles, getFilesSize } from "../helpers";

type TOpenAlert = Dispatch<SetStateAction<boolean>>;

export const useFilesUpdate = ({maxSize, setValidation, setFiles}:any) => {

    return useCallback((files: FileList) => {
            const parsedFiles = getFiles(files);
            const size = getFilesSize(parsedFiles);
            if (bytesToMb(size) <= maxSize) {
                setFiles(files);
                setValidation({ isError: false, isValid: true });
            } else {
                setValidation({  isError: true, isValid: false });
            }
        },
        [maxSize, setValidation, setFiles],
    );
};
