export const getFiles = (files: FileList) => Array.from(files);

export const getFilesSize = (arr: File[]) => arr.reduce((cur, next) => cur + next.size, 0);

export const bytesToMb = (size: number) => {
    return size / 1000000;
}