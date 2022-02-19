import React from 'react';

const FileSaver = (props) => {

    let result = JSON.stringify(props.onsave);

    const f = (obj) => {
    }

    return (
        <div>
            <h1>Conversion result:</h1>
            <p>{result.toString()}</p>
            <button onClick={f(result)}>Save</button>
        </div>
    )
}

export { FileSaver };