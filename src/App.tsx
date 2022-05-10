import { useState } from "react";
import { FileUpload, List } from "./components";
import styled from "styled-components";

const Wrap = styled.div`
    padding: 20px;
    max-width: 700px;
`;

function App() {
    const [files, setFiles] = useState<File[]>([]);

    return (
        <Wrap>
            <FileUpload files={files} setFiles={setFiles} />
            <List files={files} withTitle />
        </Wrap>
    );
}

export default App;
