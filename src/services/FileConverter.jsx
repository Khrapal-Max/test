import React from 'react';

function FileConverter(props) {
    return (
        <div>
            {console.log("I converter map")}
            {console.log(props.uploadFile)}
        </div>
    )
}

export { FileConverter };