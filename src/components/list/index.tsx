import { Wrapper, TextStyled } from "./theme";
import { TList } from "./type";
import Preview from "../preview";

const List = ({ files, withTitle, onRemove }: TList) => {
    return (
        <>
            {!!files.length && withTitle && <TextStyled>Uploaded files:</TextStyled>}
            <Wrapper>
                {files.map((item, idx) => {
                    return <Preview key={idx} file={item} onRemove={onRemove} />;
                })}
            </Wrapper>
        </>
    );
};

export default List;
