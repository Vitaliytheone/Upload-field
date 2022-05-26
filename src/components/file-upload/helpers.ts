export const getFiles = (files: FileList) => Array.from(files);

export const getFilesSize = (arr: File[]) => arr.reduce((cur, next) => cur + next.size, 0);

export const getComparedFiles = (main: File, sub: File) => {
    return main.name === sub.name && main.size === sub.size && main.lastModified === sub.lastModified
}

export const getUniqFiles = (stateFiles: File[], newFiles: File[]) => {
    if(!stateFiles.length) return newFiles;
    const arr = [...stateFiles, ...newFiles];
    let flags: File[] = [], output: File[]  = [];
    arr.forEach((item) => {
        if(!flags.find((fItem) => getComparedFiles(item, fItem))) {
            flags.push(item);
            output.push(item);
        }
    })
    return output
}