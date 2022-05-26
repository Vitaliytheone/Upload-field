export type TPreview = {
    file: File;
    onRemove: (name: string) => () => void;
}