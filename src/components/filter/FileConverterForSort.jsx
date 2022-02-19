import React from 'react';
import { FileSaver } from '../FileSaver';
import HubService from '../../services/HubService'

const FileConverterForSort = (props) => {
    let res = JSON.parse(props.upload);
    let { result } = {};

    const f = (obj) => {
        result = HubService.Distribution(obj)
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

export { FileConverterForSort };