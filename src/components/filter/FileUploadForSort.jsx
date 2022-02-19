import React, { useState } from 'react';
import { FileConverterForSort } from './FileConverterForSort';

const FileUploadForSort = () => {
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
				<FileConverterForSort upload={fileUpload} />
			</div>
		</div>
	)
}

export { FileUploadForSort };