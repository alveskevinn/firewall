"use client"

import type React from "react"
import { useState } from "react"
import {
  Box,
  VStack,
  Text,
  Input,
  FormControl,
  FormLabel,
  Divider,
  Button,
  Card,
  CardBody,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
  HStack,
} from "@chakra-ui/react"

interface QuestionnairePartFourData {
  // Questão 29
  quantidadeFortiGates: number

  // Questão 30
  tempoSLA: string

  // Questão 31
  resumoProjeto: string

  // Questão 32
  metricas: {
    connectionsPerSecond: string
    concurrentConnections: string
  }
}

const FortinetSizingQuestionnairePart4: React.FC = () => {
  const [formData, setFormData] = useState<QuestionnairePartFourData>({
    quantidadeFortiGates: 0,
    tempoSLA: "",
    resumoProjeto: "",
    metricas: {
      connectionsPerSecond: "",
      concurrentConnections: "",
    },
  })

  const handleReset = () => {
    setFormData({
      quantidadeFortiGates: 0,
      tempoSLA: "",
      resumoProjeto: "",
      metricas: {
        connectionsPerSecond: "",
        concurrentConnections: "",
      },
    })
  }

  return (
    <Box maxW="4xl" mx="auto" p={6} bg="gray.50" minH="100vh">
      <Card>
        <CardBody>
          <VStack spacing={6} align="stretch">
            {/* Questão 29 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                29. Quantos FortiGates serão gerenciados?
              </Text>
              <FormControl maxW="200px">
                <NumberInput
                  value={formData.quantidadeFortiGates}
                  onChange={(_, value) => setFormData({ ...formData, quantidadeFortiGates: value || 0 })}
                  bg="white"
                  min={0}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Box>

            <Divider />

            {/* Questão 30 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                30. Qual o tempo de SLA esperado em caso de RMA?
              </Text>
              <FormControl>
                <Input
                  value={formData.tempoSLA}
                  onChange={(e) => setFormData({ ...formData, tempoSLA: e.target.value })}
                  bg="white"
                  placeholder="Ex: 4 horas, Next Business Day, etc."
                />
              </FormControl>
            </Box>

            <Divider />

            {/* Questão 31 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                31. Resumo do projeto, problemas a serem resolvidos e objetivos a serem alcançados:
              </Text>
              <FormControl>
                <Textarea
                  value={formData.resumoProjeto}
                  onChange={(e) => setFormData({ ...formData, resumoProjeto: e.target.value })}
                  bg="white"
                  placeholder="Descreva o resumo do projeto, incluindo os principais problemas que precisam ser resolvidos e os objetivos que deseja alcançar..."
                  rows={6}
                />
              </FormControl>
            </Box>

            <Divider />

            {/* Questão 32 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                32. Colar as informações de Connections per Second (CPS) e Concurrent Connections (CC) do ambiente atual:
              </Text>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel>Connections per Second (CPS):</FormLabel>
                  <Input
                    value={formData.metricas.connectionsPerSecond}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        metricas: { ...formData.metricas, connectionsPerSecond: e.target.value },
                      })
                    }
                    bg="white"
                    placeholder="Ex: 10000 CPS"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Concurrent Connections (CC):</FormLabel>
                  <Input
                    value={formData.metricas.concurrentConnections}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        metricas: { ...formData.metricas, concurrentConnections: e.target.value },
                      })
                    }
                    bg="white"
                    placeholder="Ex: 100000 CC"
                  />
                </FormControl>
              </VStack>
            </Box>

            {/* Botões */}
            <HStack spacing={4} justify="center" pt={4}>
              <Button variant="outline" onClick={handleReset} size="lg">
                Limpar Formulário
              </Button>
            </HStack>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  )
}

export default FortinetSizingQuestionnairePart4 