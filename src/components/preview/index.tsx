import { memo } from "react";
import { bytesToKb } from "../../utils";
import { Wrapper, ImagePreview, FileMetaData } from "./theme";
import { TPreview } from "./type";

const Preview = ({ file }: TPreview) => {
    const { name, size } = file;
    const isImage = file.type.split("/")[0] === "image"
    return (
        <Wrapper>
            {name}
            {isImage && <ImagePreview src={URL.createObjectURL(file)} alt='image preview' />}
            <FileMetaData isImage={isImage}>
                <span>{name}</span>
                <div>
                    <span>{bytesToKb(size)} kb</span>
                </div>
            </FileMetaData>
        </Wrapper>
    )
};

export default memo(Preview);
