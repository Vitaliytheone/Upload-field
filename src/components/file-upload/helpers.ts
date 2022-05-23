export const getFiles = (files: FileList) => Array.from(files);

export const getFilesSize = (arr: File[]) => arr.reduce((cur, next) => cur + next.size, 0);

export const bytesToMb = (size: number) => {
    return size / 1000000;
}

export const bytesToKb = (size: number) => {
    return size / 1000;
}

export const getUniqFiles = (stateFiles: File[], newFiles: File[]) => {
    // if(!stateFiles.length) return newFiles;
    console.info('state =>', stateFiles);
    console.info('newFiles =>', newFiles)
    const arr = [...stateFiles, ...newFiles];
    let flags: File[] = [], output = [], l = arr.length, i;
for( i=0; i<l; i++) {
    if( flags[arr[i].name]) continue;
    flags[arr[i].name] = true;
    output.push(arr[i]);
}
    const uniqArr = arr.filter((v, i, a) => a.indexOf(v) === i);
    console.info(arr)
    console.info(uniqArr);
    return uniqArr
    // console.info(arr);
    // console.info(uniq)
    // console.info(stateFiles);
    // console.info(newFiles);
    // const b = stateFiles.filter((i) => {
    //     return newFiles.map((q) => {
    //         return i.name !== q.name
    //     })
    //     // return i
    // })
    // console.info(b)
    // return b;
}