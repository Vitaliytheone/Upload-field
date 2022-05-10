import { Wrapper, TextStyled } from "./theme";
import { TList } from "./type";

const List = ({ files, withTitle }: TList) => {
    return (
        <>
            {!!files.length && withTitle && <TextStyled>Uploaded files:</TextStyled>}
            <Wrapper>
                {files.map((item, idx) => {
                    console.info(item);
                    return <div key={idx}>{12}</div>;
                })}
            </Wrapper>
        </>
    );
};

export default List;
