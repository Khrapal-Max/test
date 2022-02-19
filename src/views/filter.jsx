import ErrorBoundary from '../components/ErrorBoundary';
import { FileUploadForSort } from '../components/filter/FileUploadForSort';

const Filter = () => {
    return (
        <div>
        <ErrorBoundary>
            <FileUploadForSort />
        </ErrorBoundary>
    </div>
    )
}

export { Filter }