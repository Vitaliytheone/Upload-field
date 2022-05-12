import { memo } from "react";

const Preview = ({ file }: any) => {
    console.info(file);
    return <div>Preview</div>;
};

export default memo(Preview);
