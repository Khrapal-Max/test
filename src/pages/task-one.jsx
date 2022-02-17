import { useEffect } from 'react';
import { FileUpload } from './../components/FileUpload'

const TaskOne = () => {
    useEffect(() => {
        const data = require('./../files/metrics.json');

        console.log(data);
    });

    return (
        <div>
            <h1>Select file for upload</h1>
            <FileUpload />
        </div>
    )
}

export { TaskOne }