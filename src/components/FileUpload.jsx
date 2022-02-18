import React, { useState } from 'react';
import { FileConverter } from './FileConverter';

const FileUpload = () => {
	const [fileUpload, setFileUpload] = useState(null);
	const handleFile = (e) => {
		let content = e.target.result;
		setFileUpload(content);
	}

	const handleChangeFile = (file) => {
		let fileData = new FileReader();
		fileData.onloadend = handleFile;
		if (file != null) {
			fileData.readAsText(file);
		}
	}

	return (
		<div>
			<div>
				<input type="file" accept=".json" onChange={e =>
					handleChangeFile(e.target.files[0])} />
			</div>
			<div>
				<FileConverter upload={fileUpload} />
			</div>
		</div>
	)
}

export { FileUpload };