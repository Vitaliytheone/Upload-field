export type TList = {
    files: File[] | [];
    onRemove: (name: string) => () => void;
    withTitle?: boolean;
}