export const bytesToMb = (size: number) => {
    return size / 1000000;
}

export const bytesToKb = (size: number) => {
    return size / 1000;
}

export const roundFloat = (num: number)=>{
    return num.toFixed(1).replace(/(\.0+|0+)$/, "");
}