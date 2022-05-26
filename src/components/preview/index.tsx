import { memo } from "react";
import { bytesToKb } from "../../utils";
import { ImagePreview, FileMetaData, PreviewContainer } from "./theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { TPreview } from "./type";

const Preview = ({ file, onRemove }: TPreview) => {
    const { name, size } = file;
    const isImage = file.type.split("/")[0] === "image";
    return (
        <PreviewContainer>
            <div>
                {isImage && <ImagePreview src={URL.createObjectURL(file)} alt="image preview" />}
                <FileMetaData isImage={isImage}>
                    <span>{name}</span>
                    <div>
                        <span>{bytesToKb(size)} kb</span>
                        <button onClick={onRemove(name)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </FileMetaData>
            </div>
        </PreviewContainer>
    );
};

export default memo(Preview);
