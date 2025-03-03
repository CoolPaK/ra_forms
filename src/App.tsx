/* eslint-disable prefer-const */
import { useState } from 'react';
import './App.css';
import SelectTask from './components/selectTask/SelectTask';
import Hex2rgb from './components/hex2rgb/Hex2rgb';
import Steps from './components/steps/Steps';

function App() {
  let [ curTask, setCurTask ] = useState('HEX2RGB');
  const tasks = [
    { taskName: 'HEX2RGB', solving: <Hex2rgb key={'HEX2RGB'} />},
    { taskName: 'STEPS', solving: <Steps key={'STEPS'} />},
  ];

  return (
    <>
      <SelectTask tasks={tasks} setTask={(task: string) => setCurTask(curTask = task)} curTask={curTask} />      
      <div>        
        { tasks.filter(task => task.taskName === curTask).map(task => task.solving) }
      </div>
    </>
  )
}

export default App
