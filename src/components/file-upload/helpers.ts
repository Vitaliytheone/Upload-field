export const getFiles = (files: FileList) => Array.from(files);

export const getFilesSize = (arr: File[]) => arr.reduce((cur, next) => cur + next.size, 0);

export const bytesToMb = (size: number) => {
    return size / 1000000;
}

export const bytesToKb = (size: number) => {
    return size / 1000;
}

export const getUniqFiles = (stateFiles: File[], newFiles: File[]) => {
    // if(!stateFiles.length) return 
    console.info(stateFiles);
    console.info(newFiles);
    return stateFiles.filter((i) => {
        return newFiles.forEach((q) => {
            if(true) {
                return i;
            }
        })
    })
}