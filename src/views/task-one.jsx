import { FileUpload } from '../components/FileUpload'
import ErrorBoundary from '../components/ErrorBoundary';

const TaskOne = () => {
    return (
        <div>
            <ErrorBoundary>
                <FileUpload />
            </ErrorBoundary>
        </div>
    )
}

export { TaskOne }