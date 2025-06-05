"use client"

import type React from "react"
import { useState, useRef } from "react"
import axios from "axios"
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  useToast,
  Card,
  CardBody,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Badge,
  Flex,
} from "@chakra-ui/react"
import { Download, FileIcon as FilePdf,  CheckCircle2 } from "lucide-react"
import FortinetSizingQuestionnaire from "./fortinet-sizing-questionnaire-part1"
import type { QuestionnairePart1Ref } from "./fortinet-sizing-questionnaire-part1"
import FortinetSizingQuestionnairePart2 from "./fortinet-sizing-questionnaire-part2"
import type { QuestionnairePart2Ref } from "./fortinet-sizing-questionnaire-part2"
import FortinetSizingQuestionnairePart3 from "./fortinet-sizing-questionnaire-part3"
import type { QuestionnairePart3Ref } from "./fortinet-sizing-questionnaire-part3"
import FortinetSizingQuestionnairePart4 from "./fortinet-sizing-questionnaire-part4"
import type { QuestionnairePart4Ref } from "./fortinet-sizing-questionnaire-part4"

interface Step {
  title: string
  description: string
}

interface CompleteFortinetQuestionnaireFinalProps {
  title?: string
  steps?: Step[]
  onComplete?: (data: any) => Promise<void>
  onExportJSON?: (data: any) => void
  onExportPDF?: () => void
  onSaveDraft?: (data: any) => void
}

const CompleteFortinetQuestionnaireFinal: React.FC<CompleteFortinetQuestionnaireFinalProps> = ({
  steps = [
    { title: "Parte 1", description: "" },
    { title: "Parte 2", description: "" },
    { title: "Parte 3", description: "" },
    { title: "Parte 4", description: "" },
  ],
  onComplete,
  onExportJSON,
  onExportPDF,
}) => {
  const [currentStep, setCurrentStep] = useState(0)
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const part1Ref = useRef<QuestionnairePart1Ref>(null)
  const part2Ref = useRef<QuestionnairePart2Ref>(null)
  const part3Ref = useRef<QuestionnairePart3Ref>(null)
  const part4Ref = useRef<QuestionnairePart4Ref>(null)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = async () => {
    try {
      const formData = {
        part1: part1Ref.current?.formData,
        part2: part2Ref.current?.formData,
        part3: part3Ref.current?.formData,
        part4: part4Ref.current?.formData,
      }

      if (onComplete) {
        await onComplete(formData)
      } else {
        await axios.post('/api/questionnaire', formData)
      }

      toast({
        title: "Sucesso!",
        description: "Dados enviados com sucesso.",
        status: "success",
        duration: 3000,
        isClosable: true,
        icon: <CheckCircle2 />,
      })
      onOpen()
    } catch (error: unknown) {
      console.error('Error submitting form:', error)
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar os dados.",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    }
  }

  const handleExportJSON = () => {
    const formData = {
      part1: part1Ref.current?.formData,
      part2: part2Ref.current?.formData,
      part3: part3Ref.current?.formData,
      part4: part4Ref.current?.formData,
    }
    
    if (onExportJSON) {
      onExportJSON(formData)
    } else {
      const jsonString = JSON.stringify(formData, null, 2)
      const blob = new Blob([jsonString], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'questionario.json'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }

    toast({
      title: "Exportando",
      description: "Dados exportados em formato JSON",
      status: "info",
      duration: 2000,
      isClosable: true,
    })
  }

  const handleExportPDF = () => {
    if (onExportPDF) {
      onExportPDF()
    }
    
    toast({
      title: "Gerando PDF",
      description: "PDF está sendo gerado",
      status: "info",
      duration: 2000,
      isClosable: true,
    })
  }

  // const handleSaveDraft = () => {
  //   const formData = {
  //     part1: part1Ref.current?.formData,
  //     part2: part2Ref.current?.formData,
  //     part3: part3Ref.current?.formData,
  //     part4: part4Ref.current?.formData,
  //   }
    
  //   if (onSaveDraft) {
  //     onSaveDraft(formData)
  //   } else {
  //     localStorage.setItem('questionnaireDraft', JSON.stringify(formData))
  //   }
    
  //   toast({
  //     title: "Salvo",
  //     description: "Progresso salvo com sucesso",
  //     status: "success",
  //     duration: 2000,
  //     isClosable: true,
  //   })
  // }

  // const progressPercentage = ((currentStep + 1) / steps.length) * 100

  return (
    <Box maxW="6xl" mx="auto" p={6} bg="gray.50" minH="100vh">
      {/* <Card mb={6}>
        <CardBody>
          <VStack spacing={4}>
            <Heading size="lg" color="blue.600" textAlign="center">
              {title}
            </Heading>
            <Text textAlign="center" color="gray.600">
              {steps[currentStep].title} {steps[currentStep].description && `- ${steps[currentStep].description}`}
            </Text>
            <Box w="100%" maxW="md">
              <Progress value={progressPercentage} colorScheme="blue" size="lg" borderRadius="md" />
              <Text fontSize="sm" textAlign="center" mt={2}>
                {Math.round(progressPercentage)}% Concluído
              </Text>
            </Box>

            <HStack spacing={4} mt={2}>
              <Tooltip label="Salvar rascunho">
                <IconButton
                  aria-label="Salvar rascunho"
                  icon={<Save size={18} />}
                  onClick={handleSaveDraft}
                  size="sm"
                  colorScheme="gray"
                />
              </Tooltip>
              <Tooltip label="Exportar JSON">
                <IconButton
                  aria-label="Exportar JSON"
                  icon={<FileJson size={18} />}
                  onClick={handleExportJSON}
                  size="sm"
                  colorScheme="blue"
                  variant="outline"
                />
              </Tooltip>
              <Tooltip label="Exportar PDF">
                <IconButton
                  aria-label="Exportar PDF"
                  icon={<FilePdf size={18} />}
                  onClick={handleExportPDF}
                  size="sm"
                  colorScheme="red"
                  variant="outline"
                />
              </Tooltip>
            </HStack>
          </VStack>
        </CardBody>
      </Card> */}

      <Tabs index={currentStep} onChange={setCurrentStep} variant="enclosed-colored" colorScheme="blue">
        <TabList>
          {steps.map((step, index) => (
            <Tab key={index} isDisabled={index > currentStep}>
              {step.title}
              {index < currentStep && (
                <Badge ml={2} colorScheme="green" borderRadius="full" px={2}>
                  ✓
                </Badge>
              )}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel p={0} pt={4}>
            <FortinetSizingQuestionnaire ref={part1Ref} />
          </TabPanel>
          <TabPanel p={0} pt={4}>
            <FortinetSizingQuestionnairePart2 ref={part2Ref} />
          </TabPanel>
          <TabPanel p={0} pt={4}>
            <FortinetSizingQuestionnairePart3 ref={part3Ref} />
          </TabPanel>
          <TabPanel p={0} pt={4}>
            <FortinetSizingQuestionnairePart4 ref={part4Ref} />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Card mt={6}>
        <CardBody>
          <HStack justify="space-between">
            <Button onClick={handlePrevious} isDisabled={currentStep === 0} variant="outline" colorScheme="blue">
              Anterior
            </Button>
            <Text fontSize="sm" color="gray.600">
              Etapa {currentStep + 1} de {steps.length}
            </Text>
            {currentStep < steps.length - 1 ? (
              <Button onClick={handleNext} colorScheme="blue">
                Próxima
              </Button>
            ) : (
              <Button onClick={handleComplete} colorScheme="green" leftIcon={<CheckCircle2 size={18} />}>
                Finalizar
              </Button>
            )}
          </HStack>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="green.500" color="white">
            Concluído com Sucesso!
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody py={6}>
            <VStack spacing={4} align="stretch">
              <Text>
                Todos os dados foram coletados com sucesso.
              </Text>
              <Text>O que você gostaria de fazer agora?</Text>

              <Flex wrap="wrap" gap={4} justify="center" mt={4}>
                <Button leftIcon={<Download />} colorScheme="blue" onClick={handleExportJSON}>
                  Exportar Dados (JSON)
                </Button>
                <Button leftIcon={<FilePdf />} colorScheme="red" onClick={handleExportPDF}>
                  Gerar PDF
                </Button>
              </Flex>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default CompleteFortinetQuestionnaireFinal
