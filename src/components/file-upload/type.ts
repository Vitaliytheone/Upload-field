import {  Dispatch, SetStateAction } from "react";

export type TFileUpload = {
    files: File[];
    setFiles: Dispatch<SetStateAction<File[]>>;
    accept?: string;
    multiple?: boolean;
    maxSize?: number;
    withTextError?: boolean;
}

export type TInputValidation = {
    isValid: boolean,
    isError: boolean
}

export type THook = {
    maxSize: number;
    setValidation:  Dispatch<SetStateAction<TInputValidation>>;
    setFiles: Dispatch<SetStateAction<File[]>>;
    files: File[];
}