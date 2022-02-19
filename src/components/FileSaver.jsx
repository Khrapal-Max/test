import React from 'react';

const FileSaver = (props) => {

    let result = JSON.stringify(props.onsave);

    const f = () => {
        let a = document.createElement("a");
        let file = new Blob([result], { type: 'application/json' });
        a.href = URL.createObjectURL(file);
        a.download = "convert.json";
        a.click();
    }

    return (
        <div>
            <h1>Conversion result:</h1>
            <p>{result.toString()}</p>
            <button onClick={f}>Save result</button>
        </div>
    )
}

export { FileSaver };