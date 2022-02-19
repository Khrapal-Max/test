import { FileUpload } from './../components/convertion/FileUpload'
import ErrorBoundary from './../components/ErrorBoundary';

const ConvertDistance = () => {
    return (
        <div>
            <ErrorBoundary>
                <FileUpload />
            </ErrorBoundary>
        </div>
    )
}

export { ConvertDistance }