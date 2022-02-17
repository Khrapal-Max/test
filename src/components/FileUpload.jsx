import React, { useRef, useState } from 'react';
import { FileConverter } from '../services/FileConverter';

function FileUpload() {
	const file = useRef(null)
	let [uploadFile, setFile] = useState(null);

	const onUpload = e => {
		e.preventDefault()
		
		setFile(uploadFile = file.current.files[0])
		console.log(uploadFile)
	}

	return (
		<div>
			<div>
				<form onSubmit={onUpload}>
					<input type="file" ref={file} />
					<button type='submit'>Convert file</button>
				</form>
			</div>
			<FileConverter upload={uploadFile}/>
		</div>
	);
}

export { FileUpload };