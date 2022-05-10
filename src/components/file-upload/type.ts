import {  Dispatch, SetStateAction } from "react";

export type TFileUpload = {
    files: any;
    setFiles: any;
    accept?: string;
    multiple?: boolean;
    maxSize?: any;
    withTextError?: boolean
}

export type TInputValidation = {
    isValid: boolean,
    isError: boolean
}

export type THook = {
    maxSize: number;
    setValidation:  Dispatch<SetStateAction<TInputValidation>>;
    setFiles: Dispatch<SetStateAction<File[]>>;
}