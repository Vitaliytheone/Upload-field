import { PropsWithChildren } from "react";
import styled from "styled-components";

type TText = {
    className?: string;
    color?: string;
};

export const TextStyled = styled.div<{ $color: string }>`
    font-size: 18px;
    color: ${({ $color }) => $color};
`;

const Text = ({ children, className, color = "#000" }: PropsWithChildren<TText>) => {
    return (
        <TextStyled className={className} $color={color}>
            {children}
        </TextStyled>
    );
};

export default Text;
