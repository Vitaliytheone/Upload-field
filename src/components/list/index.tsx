import { Wrapper, TextStyled } from "./theme";
import { TList } from "./type";
import Preview from "../preview";

const List = ({ files, withTitle }: TList) => {
    return (
        <>
            {!!files.length && withTitle && <TextStyled>Uploaded files:</TextStyled>}
            <Wrapper>
                {files.map((item, idx) => {
                    // console.info(item.name);
                    return <Preview key={idx} file={item} />;
                })}
            </Wrapper>
        </>
    );
};

export default List;
