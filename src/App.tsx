import { useCallback, useState } from "react";
import { FileUpload, List } from "./components";
import styled from "styled-components";

const Wrap = styled.div`
    padding: 20px;
    max-width: 700px;
`;

function App() {
    const [files, setFiles] = useState<File[]>([]);

    const onRemove = useCallback(
        (name) => () => {
            setFiles((prev) => prev.filter((item) => item.name !== name));
        },
        [],
    );

    return (
        <Wrap>
            <FileUpload files={files} setFiles={setFiles} />
            <List files={files} onRemove={onRemove} withTitle />
        </Wrap>
    );
}

export default App;
