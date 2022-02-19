import { Routes, Route } from 'react-router-dom';

import { Description } from './views/description';
import { TaskOne } from './views/task-one';
import { TaskTwo } from './views/task-two';
import { TaskTree } from './views/task-tree';
import { TaskFour } from './views/task-four';

import { Layout } from './components/Layout'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Description />} />
          <Route path='one' element={<TaskOne />} />
          <Route path='two' element={<TaskTwo />} />
          <Route path='tree' element={<TaskTree />} />
          <Route path='four' element={<TaskFour />} />
          <Route path='*' element={<Description />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
