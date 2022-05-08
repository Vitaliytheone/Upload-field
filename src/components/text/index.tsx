import { PropsWithChildren } from "react";
import styled from "styled-components";

type TText = {
    color: string;
};

const TextStyled = styled.div<{ $color: string }>`
    font-size: 18px;
    color: ${({ $color }) => $color};
`;

const Text = ({ children, color = "#000" }: PropsWithChildren<TText>) => {
    return <TextStyled $color={color}>{children}</TextStyled>;
};

export default Text;
