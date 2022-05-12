import { memo } from "react";
import { Wrap } from "./theme";

const Preview = ({ file }: any) => {
    const { name } = file;
    return <Wrap>{name}</Wrap>;
};

export default memo(Preview);
