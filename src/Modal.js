import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Button,
  Select,
  Input,
} from '@chakra-ui/react'
import { useState } from 'react'

export function ModalExample({activities, setActivities}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [currentActivity, setCurrentActivity] = useState({})
  console.log(currentActivity)

  function handleSelectDay(e) {
    setCurrentActivity({...currentActivity, day: e.target.value})
  }

  function handleSelectTime(e) {
    setCurrentActivity({...currentActivity, time: e.target.value})
  }

  function handleChangeName(e) {
    const { value } = e.target
    setCurrentActivity({...currentActivity, name: value})
  }

  function handleChangePriority(e) {
    setCurrentActivity({...currentActivity, priority: e.target.value})
  }

  function addActivity() {
    var aux = [...activities]
    aux[Number(currentActivity.priority) - 1].push(currentActivity);
    setActivities(aux);
    onClose()
  }

  return (
    <>
      <Button onClick={onOpen}>Adicione Atividade</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent paddingX={"15px"} paddingY={"10px"}>
          <ModalHeader>Adicionar atividades</ModalHeader>
          <ModalCloseButton />
          <Input onChange={handleChangeName} marginY={"10px"} placeholder='Descreva a atividade'/>
          <Select onChange={(e) => handleSelectDay(e)} marginY={"10px"} placeholder='Seleciona o dia'>
            <option value="0">Segunda</option>
            <option value="1">Terça</option>
            <option value="2">Quarta</option>
            <option value="3">Quinta</option>
            <option value="4">Sexta</option>
            <option value="5">Sábado</option>
          </Select>
          <Select onChange={(e) => handleSelectTime(e)} marginY={"10px"} placeholder='Seleciona o horário'>
            <option value="8">8:00</option>
            <option value="9">9:00</option>
            <option value="10">10:00</option>
            <option value="11">11:00</option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
          </Select>
          <Select onChange={(e) => handleChangePriority(e)} marginY={"10px"} placeholder='Seleciona a prioridade'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>

          <ModalFooter>
            <Button colorScheme='red' variant='ghost' mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button colorScheme='blue' onClick={() => addActivity()}>Adicionar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}