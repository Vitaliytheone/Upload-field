import { useRef, useState } from "react";

const Button = () => {
    const ref = useRef(null);
    const [files, setFiles] = useState({});

    return <input type="file" ref={ref} />;
};

export default Button;
