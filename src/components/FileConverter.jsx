import React from 'react';

const FileConverter = (props) => {
    let res = JSON.parse(props.upload);    

    if (props.upload == null) {
        return (
            <div>
                <h1>Select file for upload</h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Data in file:</h1>
                <p>{props.upload.toString()}</p>
                <p>{console.log(res)}</p>
            </div>
        )
    }
}

export { FileConverter };