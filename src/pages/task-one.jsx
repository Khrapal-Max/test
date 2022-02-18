import { useEffect } from 'react';
import { FileUpload } from './../components/FileUpload'

const TaskOne = () => {
    useEffect(() => {
        const data = require('./../files/metrics.json');

        console.log(data);
    });

    return (
        <div>
            <FileUpload />
        </div>
    )
}

export { TaskOne }