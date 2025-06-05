"use client"

import { useState, forwardRef, useImperativeHandle } from "react"
import {
  Box,
  VStack,
  HStack,
  Text,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Input,
  FormControl,
  FormLabel,
  Heading,
  Divider,
  Button,
  Card,
  CardBody,
  SimpleGrid,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
} from "@chakra-ui/react"

interface QuestionnairePartThreeData {
  // Funcionalidades adicionais (continuação da questão 17)
  funcionalidadesAdicionais: string[]
  outros: string

  // Questão 18
  controleTrafegoVLAN: string

  // Questão 19
  segmentacaoInterna: {
    throughputVLANs: string
    volumeSessoes: string
  }

  // Questão 20
  solucaoFirewallAtual: string

  // Questão 21
  funcionalidadesHabilitadas: string[]
  outrosFuncionalidades: string

  // Questão 22
  atendimentoDemanda: string

  // Questão 23
  previsaoCrescimento: string

  // Questão 24
  tempoSuporteContrato: string

  // FortiAnalyzer - Questão 25
  necessidadeSolucaoLog: string

  // Questão 26
  retencaoLogs: {
    tempoArmazenamento: string
    tempoDadosAnaliticos: string
    volumetriaLogs: string
  }

  // Questão 27
  gerenciamentoCentralizado: string

  // Questão 28
  quantidadeFortiGates: number
}

export interface QuestionnairePart3Ref {
  formData: QuestionnairePartThreeData
}

const FortinetSizingQuestionnairePart3 = forwardRef<QuestionnairePart3Ref>((_, ref) => {
  const [formData, setFormData] = useState<QuestionnairePartThreeData>({
    funcionalidadesAdicionais: [],
    outros: "",
    controleTrafegoVLAN: "",
    segmentacaoInterna: {
      throughputVLANs: "",
      volumeSessoes: "",
    },
    solucaoFirewallAtual: "",
    funcionalidadesHabilitadas: [],
    outrosFuncionalidades: "",
    atendimentoDemanda: "",
    previsaoCrescimento: "",
    tempoSuporteContrato: "",
    necessidadeSolucaoLog: "",
    retencaoLogs: {
      tempoArmazenamento: "",
      tempoDadosAnaliticos: "",
      volumetriaLogs: ""
    },
    gerenciamentoCentralizado: "",
    quantidadeFortiGates: 0
  })

  useImperativeHandle(ref, () => ({
    formData
  }))

  const funcionalidadesAdicionaisOptions = ["Filtro Web", "SD-WAN", "Inspeção SSL"]

  const funcionalidadesHabilitadasOptions = [
    "Firewall",
    "Antivírus",
    "Filtro Web",
    "IPSec VPN",
    "Anti-Spam",
    "Inspeção SSL",
    "SSL VPN",
    "IDS/IPS",
    "SD-WAN",
    "Controle de Aplicação",
    "Default GW de todas as VLANs",
  ]

  const controleTrafegoOptions = [
    "Sim, por meio do mesmo Firewall usando contexto virtual",
    "Sim, por meio de Firewall dedicado",
    "Não",
  ]

  const handleReset = () => {
    setFormData({
      funcionalidadesAdicionais: [],
      outros: "",
      controleTrafegoVLAN: "",
      segmentacaoInterna: {
        throughputVLANs: "",
        volumeSessoes: "",
      },
      solucaoFirewallAtual: "",
      funcionalidadesHabilitadas: [],
      outrosFuncionalidades: "",
      atendimentoDemanda: "",
      previsaoCrescimento: "",
      tempoSuporteContrato: "",
      necessidadeSolucaoLog: "",
      retencaoLogs: {
        tempoArmazenamento: "",
        tempoDadosAnaliticos: "",
        volumetriaLogs: ""
      },
      gerenciamentoCentralizado: "",
      quantidadeFortiGates: 0
    })
  }

  return (
    <Box maxW="4xl" mx="auto" p={6} bg="gray.50" minH="100vh">
      <Card>
        <CardBody>
          <VStack spacing={6} align="stretch">
            {/* Header */}
            <Box>
              <Heading size="lg" color="blue.600">
                FORTINET
              </Heading>
            
            </Box>

            <Divider />

            <Box>
              <Text fontWeight="bold" mb={3}>
                Funcionalidades Adicionais:
              </Text>
              <CheckboxGroup
                value={formData.funcionalidadesAdicionais}
                onChange={(values) => setFormData({ ...formData, funcionalidadesAdicionais: values as string[] })}
              >
                <HStack spacing={8} wrap="wrap">
                  {funcionalidadesAdicionaisOptions.map((option) => (
                    <Checkbox key={option} value={option}>
                      {option}
                    </Checkbox>
                  ))}
                </HStack>
              </CheckboxGroup>
              <FormControl mt={4}>
                <FormLabel fontSize="sm">Outros:</FormLabel>
                <Input
                  value={formData.outros}
                  onChange={(e) => setFormData({ ...formData, outros: e.target.value })}
                  bg="white"
                  placeholder="Especifique outras funcionalidades"
                />
              </FormControl>
            </Box>

            <Divider />

            {/* Questão 18 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                18. Controle de tráfego Leste-Oeste (entre VLANs) / Segmentação interna é necessário?
              </Text>
              <RadioGroup
                value={formData.controleTrafegoVLAN}
                onChange={(value) => setFormData({ ...formData, controleTrafegoVLAN: value })}
              >
                <VStack align="start" spacing={2}>
                  {controleTrafegoOptions.map((option) => (
                    <Radio key={option} value={option}>
                      {option}
                    </Radio>
                  ))}
                </VStack>
              </RadioGroup>
            </Box>

            <Divider />

            {/* Questão 19 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                19. Se a resposta para segmentação interna foi sim, favor detalhar o volume de tráfego entre VLANs.
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <FormControl>
                  <FormLabel fontSize="sm">Throughput entre VLANs:</FormLabel>
                  <Input
                    value={formData.segmentacaoInterna.throughputVLANs}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        segmentacaoInterna: {
                          ...formData.segmentacaoInterna,
                          throughputVLANs: e.target.value,
                        },
                      })
                    }
                    bg="white"
                    placeholder="Ex: 1 Gbps"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm">Volume de Sessões:</FormLabel>
                  <Input
                    value={formData.segmentacaoInterna.volumeSessoes}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        segmentacaoInterna: {
                          ...formData.segmentacaoInterna,
                          volumeSessoes: e.target.value,
                        },
                      })
                    }
                    bg="white"
                    placeholder="Ex: 10.000 sessões"
                  />
                </FormControl>
              </SimpleGrid>
            </Box>

            <Divider />

            {/* Questão 20 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                20. Qual solução de Firewall você utiliza atualmente? Novamente reforçamos a importância de termos
                acesso à topologia do ambiente como um todo.
              </Text>
              <FormControl>
                <FormLabel fontSize="sm">Especificar modelo(s):</FormLabel>
                <Textarea
                  value={formData.solucaoFirewallAtual}
                  onChange={(e) => setFormData({ ...formData, solucaoFirewallAtual: e.target.value })}
                  bg="white"
                  placeholder="Descreva a solução atual de firewall, modelos, fabricantes, etc."
                  rows={3}
                />
              </FormControl>
            </Box>

            <Divider />

            {/* Questão 21 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                21. Quais funcionalidades estão habilitadas atualmente neste Firewall atual?
              </Text>
              <CheckboxGroup
                value={formData.funcionalidadesHabilitadas}
                onChange={(values) => setFormData({ ...formData, funcionalidadesHabilitadas: values as string[] })}
              >
                <SimpleGrid columns={{ base: 2, md: 3 }} spacing={2}>
                  {funcionalidadesHabilitadasOptions.map((option) => (
                    <Checkbox key={option} value={option}>
                      {option}
                    </Checkbox>
                  ))}
                </SimpleGrid>
              </CheckboxGroup>
              <FormControl mt={4}>
                <FormLabel fontSize="sm">Outros:</FormLabel>
                <Input
                  value={formData.outrosFuncionalidades}
                  onChange={(e) => setFormData({ ...formData, outrosFuncionalidades: e.target.value })}
                  bg="white"
                  placeholder="Especifique outras funcionalidades"
                />
              </FormControl>
            </Box>

            <Divider />

            {/* Questão 22 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                22. O Firewall atual tem atendido bem a demanda atual?
              </Text>
              <RadioGroup
                value={formData.atendimentoDemanda}
                onChange={(value) => setFormData({ ...formData, atendimentoDemanda: value })}
              >
                <HStack spacing={8}>
                  <Radio value="sim_sobra">Sim, com sobra</Radio>
                  <Radio value="sim_ressalvas">Sim, com ressalvas</Radio>
                  <Radio value="nao">Não</Radio>
                </HStack>
              </RadioGroup>
            </Box>

            <Divider />

            {/* Questão 23 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                23. Qual a previsão de crescimento do ambiente para os próximos anos?
              </Text>
              <FormControl>
                <FormLabel fontSize="sm">Especificar:</FormLabel>
                <Textarea
                  value={formData.previsaoCrescimento}
                  onChange={(e) => setFormData({ ...formData, previsaoCrescimento: e.target.value })}
                  bg="white"
                  placeholder="Descreva a previsão de crescimento (usuários, tráfego, novas aplicações, etc.)"
                  rows={3}
                />
              </FormControl>
            </Box>

            <Divider />

            {/* Questão 24 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                24. Qual o tempo de suporte desejado para contração?
              </Text>
              <RadioGroup
                value={formData.tempoSuporteContrato}
                onChange={(value) => setFormData({ ...formData, tempoSuporteContrato: value })}
              >
                <HStack spacing={8}>
                  <Radio value="12">12 meses</Radio>
                  <Radio value="36">36 meses</Radio>
                  <Radio value="60">60 meses</Radio>
                </HStack>
              </RadioGroup>
            </Box>

            <Divider />

            {/* FortiAnalyzer Section */}
            <Box>
              <Heading size="md" mb={4} color="blue.600">
                FortiAnalyzer (solução para gestão de logs, dados analíticos e relatórios)
              </Heading>

              {/* Questão 25 */}
              <Box mb={6}>
                <Text fontWeight="bold" mb={3}>
                  25. Se faz necessária solução para armazenamento de log central e relatórios?
                </Text>
                <RadioGroup
                  value={formData.necessidadeSolucaoLog}
                  onChange={(value) => setFormData({ ...formData, necessidadeSolucaoLog: value })}
                >
                  <HStack spacing={8}>
                    <Radio value="nao">Não</Radio>
                    <Radio value="sim">Sim</Radio>
                  </HStack>
                </RadioGroup>
              </Box>

              {/* Questão 26 */}
              {formData.necessidadeSolucaoLog === "sim" && (
                <Box>
                  <Text fontWeight="bold" mb={3}>
                    26. Por quanto tempo os logs devem ser armazenados e por quanto tempo os relatórios devem trazer dados analíticos?
                  </Text>
                  <VStack spacing={4} align="stretch">
                    <FormControl>
                      <FormLabel fontSize="sm">Tempo de armazenamento de logs:</FormLabel>
                      <Input
                        value={formData.retencaoLogs.tempoArmazenamento}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            retencaoLogs: {
                              ...formData.retencaoLogs,
                              tempoArmazenamento: e.target.value,
                            },
                          })
                        }
                        bg="white"
                        placeholder="Ex: 12 meses"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize="sm">Tempo de retenção de dados analíticos:</FormLabel>
                      <Input
                        value={formData.retencaoLogs.tempoDadosAnaliticos}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            retencaoLogs: {
                              ...formData.retencaoLogs,
                              tempoDadosAnaliticos: e.target.value,
                            },
                          })
                        }
                        bg="white"
                        placeholder="Ex: 3 meses"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel fontSize="sm">Volumetria de logs diários do ambiente atual:</FormLabel>
                      <Textarea
                        value={formData.retencaoLogs.volumetriaLogs}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            retencaoLogs: {
                              ...formData.retencaoLogs,
                              volumetriaLogs: e.target.value,
                            },
                          })
                        }
                        bg="white"
                        placeholder="Descreva a volumetria de logs diários do ambiente atual..."
                        rows={3}
                      />
                    </FormControl>
                  </VStack>
                </Box>
              )}

              <Divider />

              {/* Questão 27 */}
              <Box>
                <Text fontWeight="bold" mb={3}>
                  27. Se faz necessária solução para gerenciamento centralizado dos NGFWs e SD-WAN?
                </Text>
                <RadioGroup
                  value={formData.gerenciamentoCentralizado}
                  onChange={(value) => setFormData({ ...formData, gerenciamentoCentralizado: value })}
                >
                  <HStack spacing={4}>
                    <Radio value="não">Não</Radio>
                    <Radio value="sim">Sim</Radio>
                  </HStack>
                </RadioGroup>
              </Box>

              <Divider />

              {/* Questão 28 */}
              {formData.gerenciamentoCentralizado === "sim" && (
                <Box>
                  <Text fontWeight="bold" mb={3}>
                    28. Quantos FortiGates serão gerenciados?
                  </Text>
                  <FormControl maxW="200px">
                    <Flex align="center" gap={2}>
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
                      <Text>unidades</Text>
                    </Flex>
                  </FormControl>
                </Box>
              )}
            </Box>

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
})

export default FortinetSizingQuestionnairePart3
