import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';
import { ModalExample } from './Modal';
import { Schedule } from './Table';

function App() {
  const [activities, setActivities] = useState([[], [], [], [], []]);

  return (
    <Flex bg={"#"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} h='calc(100vh)'>
      <ModalExample activities={activities} setActivities={setActivities}/>
      <Schedule activities={activities}></Schedule>
    </Flex>
  )
}

export default App;
