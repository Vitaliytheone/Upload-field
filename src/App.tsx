import { FileUpload } from "./components";
import styled from "styled-components";

const Wrap = styled.div`
    padding: 20px;
    max-width: 700px;
`;

function App() {
    return (
        <Wrap>
            <div>File upload</div>
            <FileUpload />
        </Wrap>
    );
}

export default App;
