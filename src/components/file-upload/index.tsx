import { useRef, useState } from "react";

const FileUpload = ({ label, maxSize }: any) => {
    const ref = useRef(null);
    const [files, setFiles] = useState({});

    return (
        <div role="button">
            <input type="file" ref={ref} />
        </div>
    );
};

export default FileUpload;
