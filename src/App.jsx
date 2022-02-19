import { Routes, Route } from 'react-router-dom';

import { Description } from './views/description';
import { ConvertDistance } from './views/convert-distance';
import { Filter } from './views/filter';
import { TaskTree } from './views/task-tree';

import { Layout } from './components/Layout'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Description />} />
          <Route path='convert' element={<ConvertDistance />} />
          <Route path='filter' element={<Filter />} />
          <Route path='dialog' element={<TaskTree />} />
          <Route path='*' element={<Description />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
