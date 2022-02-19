import React from 'react';
import { FileSaver } from './FileSaver';
import ConvertationService from './../services/ConvertationService'

const FileConverter = (props) => {
    let res = JSON.parse(props.upload);
    let { result } = {};

    const f = (obj) => {
        result = ConvertationService.Convert(obj)
    }

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
                {
                    f(res)
                }
                {
                    result === null ?
                        <h1>File is not correct format. <br />Try again.</h1>
                        : <FileSaver onsave={result} />
                }
            </div>
        )
    }
}

export { FileConverter };