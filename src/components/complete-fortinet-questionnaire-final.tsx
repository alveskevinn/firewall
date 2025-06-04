"use client"

import type React from "react"
import { useState } from "react"
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  useToast,
  Card,
  CardBody,
  Heading,
  Progress,
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
  IconButton,
  Tooltip,
} from "@chakra-ui/react"
import { Download, FileJson, FileIcon as FilePdf, Save, CheckCircle2 } from "lucide-react"
import FortinetSizingQuestionnaire from "./fortinet-sizing-questionnaire-part1"
import FortinetSizingQuestionnairePart2 from "./fortinet-sizing-questionnaire-part2"
import FortinetSizingQuestionnairePart3 from "./fortinet-sizing-questionnaire-part3"
import FortinetSizingQuestionnairePart4 from "./fortinet-sizing-questionnaire-part4"

const CompleteFortinetQuestionnaireFinal: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isCompleted, setIsCompleted] = useState(false)

  const steps = [
    { title: "Informações Básicas", description: "Questões 1-8" },
    { title: "Especificações Técnicas", description: "Questões 9-17" },
    { title: "Análise e FortiAnalyzer", description: "Questões 18-28" },
    { title: "Informações Adicionais", description: "Questões 29-32" },
  ]

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

  const handleComplete = () => {
    setIsCompleted(true)
    toast({
      title: "Questionário Completo!",
      description: "Todos os dados foram coletados com sucesso.",
      status: "success",
      duration: 3000,
      isClosable: true,
      icon: <CheckCircle2 />,
    })
    onOpen()
  }

  const handleExportJSON = () => {
    toast({
      title: "Exportando dados",
      description: "Os dados foram exportados em formato JSON",
      status: "info",
      duration: 2000,
      isClosable: true,
    })
  }

  const handleExportPDF = () => {
    toast({
      title: "Gerando PDF",
      description: "O PDF do questionário está sendo gerado",
      status: "info",
      duration: 2000,
      isClosable: true,
    })
  }

  const handleSaveDraft = () => {
    toast({
      title: "Rascunho salvo",
      description: "Seu progresso foi salvo com sucesso",
      status: "success",
      duration: 2000,
      isClosable: true,
    })
  }

  const progressPercentage = ((currentStep + 1) / steps.length) * 100

  return (
    <Box maxW="6xl" mx="auto" p={6} bg="gray.50" minH="100vh">
      <Card mb={6}>
        <CardBody>
          <VStack spacing={4}>
            <Heading size="lg" color="blue.600" textAlign="center">
              Questionário Completo de Sizing - Fortinet
            </Heading>
            <Text textAlign="center" color="gray.600">
              {steps[currentStep].title} - {steps[currentStep].description}
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
      </Card>

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
            <FortinetSizingQuestionnaire />
          </TabPanel>
          <TabPanel p={0} pt={4}>
            <FortinetSizingQuestionnairePart2 />
          </TabPanel>
          <TabPanel p={0} pt={4}>
            <FortinetSizingQuestionnairePart3 />
          </TabPanel>
          <TabPanel p={0} pt={4}>
            <FortinetSizingQuestionnairePart4 />
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

      {/* Modal de conclusão */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="green.500" color="white">
            Questionário Concluído com Sucesso!
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody py={6}>
            <VStack spacing={4} align="stretch">
              <Text>
                Obrigado por preencher o Questionário de Sizing da Fortinet. Todos os dados foram coletados com sucesso.
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
