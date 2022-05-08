export type TFileUpload = {
    accept?: string;
    multiple?: boolean;
    maxSize?: any;
    withTextError?: boolean
}

export type TInputValidation = {
    isValid: boolean,
    isError: boolean
}