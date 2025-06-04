"use client"

import type React from "react"
import { useState } from "react"
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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
} from "@chakra-ui/react"

interface QuestionnairePartTwoData {
  // Questão 9
  ngfwMultiplosContextos: string
  maxVDOMs: number

  // Questão 10
  interfaces: {
    cobreGE: number
    ge10: number
    fibraGE: number
    ge40: number
    outras: string
  }

  // Questão 11
  altaDisponibilidade: string
  tipoHA: string

  // Questão 12
  redundanciaEnergia: string

  // Questão 13
  ambiente: {
    usuariosInternos: number
    usuariosExternos: number
    servidoresProtegidos: number
    conexoesConcorrentes: number
    novasConexoesPorSegundo: number
    usuariosIPSecConcorrentes: number
    usuariosSSLVPNConcorrentes: number
  }

  // Questão 14
  desempenhoMinimo: {
    fwThroughput: string
    ipsecThroughput: string
    avThroughput: string
    ipsThroughput: string
  }

  // Questão 15
  bandaInternet: {
    dataCenter: string
    link1: string
    link2: string
    link3: string
    outros: string
  }

  // Questão 16
  trafegoProtegido: {
    aplicacoesWeb: { porcentagem: number; tipoSeguranca: string }
    aplicacoesMail: { porcentagem: number; tipoSeguranca: string }
    aplicacoesTransferencia: { porcentagem: number; tipoSeguranca: string }
    streamingVoip: { porcentagem: number; tipoSeguranca: string }
    outrosRDP: { porcentagem: number; tipoSeguranca: string }
  }

  // Questão 17
  papelConcentrador: string[]
}

const FortinetSizingQuestionnairePart2: React.FC = () => {
  const [formData, setFormData] = useState<QuestionnairePartTwoData>({
    ngfwMultiplosContextos: "não",
    maxVDOMs: 0,
    interfaces: {
      cobreGE: 0,
      ge10: 0,
      fibraGE: 0,
      ge40: 0,
      outras: "",
    },
    altaDisponibilidade: "sim",
    tipoHA: "A/A, A/P, Virtual Cluster",
    redundanciaEnergia: "não",
    ambiente: {
      usuariosInternos: 120,
      usuariosExternos: 30,
      servidoresProtegidos: 20,
      conexoesConcorrentes: 8000,
      novasConexoesPorSegundo: 80,
      usuariosIPSecConcorrentes: 1,
      usuariosSSLVPNConcorrentes: 20,
    },
    desempenhoMinimo: {
      fwThroughput: "",
      ipsecThroughput: "",
      avThroughput: "",
      ipsThroughput: "",
    },
    bandaInternet: {
      dataCenter: "120 Mbps",
      link1: "100 Mbps",
      link2: "",
      link3: "",
      outros: "",
    },
    trafegoProtegido: {
      aplicacoesWeb: { porcentagem: 0, tipoSeguranca: "" },
      aplicacoesMail: { porcentagem: 0, tipoSeguranca: "" },
      aplicacoesTransferencia: { porcentagem: 0, tipoSeguranca: "" },
      streamingVoip: { porcentagem: 0, tipoSeguranca: "" },
      outrosRDP: { porcentagem: 0, tipoSeguranca: "" },
    },
    papelConcentrador: [
      "Firewall",
      "IPSec VPN",
      "SSL VPN",
      "IDS/IPS",
      "Controle de Aplicação",
      "Default GW de todas as VLANs",
    ],
  })


  const concentradorOptions = [
    "Firewall",
    "Antivírus",
    "IPSec VPN",
    "Anti-Spam",
    "SSL VPN",
    "IDS/IPS",
    "Controle de Aplicação",
    "Default GW de todas as VLANs",
  ]



  const handleReset = () => {
    setFormData({
      ngfwMultiplosContextos: "",
      maxVDOMs: 0,
      interfaces: {
        cobreGE: 0,
        ge10: 0,
        fibraGE: 0,
        ge40: 0,
        outras: "",
      },
      altaDisponibilidade: "",
      tipoHA: "",
      redundanciaEnergia: "",
      ambiente: {
        usuariosInternos: 0,
        usuariosExternos: 0,
        servidoresProtegidos: 0,
        conexoesConcorrentes: 0,
        novasConexoesPorSegundo: 0,
        usuariosIPSecConcorrentes: 0,
        usuariosSSLVPNConcorrentes: 0,
      },
      desempenhoMinimo: {
        fwThroughput: "",
        ipsecThroughput: "",
        avThroughput: "",
        ipsThroughput: "",
      },
      bandaInternet: {
        dataCenter: "",
        link1: "",
        link2: "",
        link3: "",
        outros: "",
      },
      trafegoProtegido: {
        aplicacoesWeb: { porcentagem: 0, tipoSeguranca: "" },
        aplicacoesMail: { porcentagem: 0, tipoSeguranca: "" },
        aplicacoesTransferencia: { porcentagem: 0, tipoSeguranca: "" },
        streamingVoip: { porcentagem: 0, tipoSeguranca: "" },
        outrosRDP: { porcentagem: 0, tipoSeguranca: "" },
      },
      papelConcentrador: [],
    })
  }

  return (
    <Box maxW="4xl" mx="auto" p={6} bg="gray.50" minH="100vh">
      <Card>
        <CardBody>
          <VStack spacing={6} align="stretch">
            {/* Header */}
            <Box>
              <Heading size="lg" color="blue.600" mb={2}>
                FORTINET
              </Heading>
            </Box>

            <Divider />

            {/* Questão 9 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                9. NGFW com múltiplos contextos é requerido (VDOM = Virtual Domains)?
              </Text>
              <HStack spacing={8} mb={4}>
                <RadioGroup
                  value={formData.ngfwMultiplosContextos}
                  onChange={(value) => setFormData({ ...formData, ngfwMultiplosContextos: value })}
                >
                  <HStack spacing={4}>
                    <Radio value="não">Não</Radio>
                    <Radio value="sim">Sim</Radio>
                  </HStack>
                </RadioGroup>
              </HStack>
              {formData.ngfwMultiplosContextos === "sim" && (
                <FormControl maxW="200px">
                  <FormLabel fontSize="sm">Max VDOMs:</FormLabel>
                  <NumberInput
                    value={formData.maxVDOMs}
                    onChange={(_, value) => setFormData({ ...formData, maxVDOMs: value || 0 })}
                    bg="white"
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              )}
            </Box>

            <Divider />

            {/* Questão 10 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                10. Quais tipos e quantas interfaces serão utilizadas (ex: 4 interfaces 10GbE com transceiver SFP+ SR)?
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <FormControl>
                  <FormLabel fontSize="sm">Cobre GE:</FormLabel>
                  <NumberInput
                    value={formData.interfaces.cobreGE}
                    onChange={(_, value) =>
                      setFormData({
                        ...formData,
                        interfaces: { ...formData.interfaces, cobreGE: value || 0 },
                      })
                    }
                    bg="white"
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm">10GE:</FormLabel>
                  <NumberInput
                    value={formData.interfaces.ge10}
                    onChange={(_, value) =>
                      setFormData({
                        ...formData,
                        interfaces: { ...formData.interfaces, ge10: value || 0 },
                      })
                    }
                    bg="white"
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm">Fibra GE:</FormLabel>
                  <NumberInput
                    value={formData.interfaces.fibraGE}
                    onChange={(_, value) =>
                      setFormData({
                        ...formData,
                        interfaces: { ...formData.interfaces, fibraGE: value || 0 },
                      })
                    }
                    bg="white"
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm">40GE:</FormLabel>
                  <NumberInput
                    value={formData.interfaces.ge40}
                    onChange={(_, value) =>
                      setFormData({
                        ...formData,
                        interfaces: { ...formData.interfaces, ge40: value || 0 },
                      })
                    }
                    bg="white"
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              </SimpleGrid>
              <FormControl mt={4}>
                <FormLabel fontSize="sm">Outras:</FormLabel>
                <Input
                  value={formData.interfaces.outras}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      interfaces: { ...formData.interfaces, outras: e.target.value },
                    })
                  }
                  bg="white"
                  placeholder="Especifique outras interfaces"
                />
              </FormControl>
            </Box>

            <Divider />

            {/* Questão 11 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                11. Alta disponibilidade é requerida para o FortiGate?
              </Text>
              <HStack spacing={8} mb={4}>
                <RadioGroup
                  value={formData.altaDisponibilidade}
                  onChange={(value) => setFormData({ ...formData, altaDisponibilidade: value })}
                >
                  <HStack spacing={4}>
                    <Radio value="não">Não</Radio>
                    <Radio value="sim">Sim</Radio>
                  </HStack>
                </RadioGroup>
              </HStack>
              {formData.altaDisponibilidade === "sim" && (
                <FormControl>
                  <FormLabel fontSize="sm">Tipo:</FormLabel>
                  <Input
                    value={formData.tipoHA}
                    onChange={(e) => setFormData({ ...formData, tipoHA: e.target.value })}
                    bg="white"
                    placeholder="A/A, A/P, Virtual Cluster"
                  />
                </FormControl>
              )}
            </Box>

            <Divider />

            {/* Questão 12 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                12. Redundância de fontes de energia é requerido?
              </Text>
              <RadioGroup
                value={formData.redundanciaEnergia}
                onChange={(value) => setFormData({ ...formData, redundanciaEnergia: value })}
              >
                <HStack spacing={4}>
                  <Radio value="não">Não</Radio>
                  <Radio value="sim">Sim</Radio>
                </HStack>
              </RadioGroup>
            </Box>

            <Divider />

            {/* Questão 13 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                13. Por favor preencha com números de acordo com ambiente:
              </Text>
              <TableContainer>
                <Table variant="simple" size="sm">
                  <Thead>
                    <Tr>
                      <Th>Métrica</Th>
                      <Th>Valor</Th>
                      <Th>Métrica</Th>
                      <Th>Valor</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Número de usuários internos (Pico)</Td>
                      <Td>
                        <NumberInput
                          size="sm"
                          value={formData.ambiente.usuariosInternos}
                          onChange={(_, value) =>
                            setFormData({
                              ...formData,
                              ambiente: { ...formData.ambiente, usuariosInternos: value || 0 },
                            })
                          }
                        >
                          <NumberInputField bg="white" />
                        </NumberInput>
                      </Td>
                      <Td>Usuários IPSec concorrentes</Td>
                      <Td>
                        <NumberInput
                          size="sm"
                          value={formData.ambiente.usuariosIPSecConcorrentes}
                          onChange={(_, value) =>
                            setFormData({
                              ...formData,
                              ambiente: { ...formData.ambiente, usuariosIPSecConcorrentes: value || 0 },
                            })
                          }
                        >
                          <NumberInputField bg="white" />
                        </NumberInput>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Número de usuários externos (Pico)</Td>
                      <Td>
                        <NumberInput
                          size="sm"
                          value={formData.ambiente.usuariosExternos}
                          onChange={(_, value) =>
                            setFormData({
                              ...formData,
                              ambiente: { ...formData.ambiente, usuariosExternos: value || 0 },
                            })
                          }
                        >
                          <NumberInputField bg="white" />
                        </NumberInput>
                      </Td>
                      <Td>Usuários SSL VPN concorrentes</Td>
                      <Td>
                        <NumberInput
                          size="sm"
                          value={formData.ambiente.usuariosSSLVPNConcorrentes}
                          onChange={(_, value) =>
                            setFormData({
                              ...formData,
                              ambiente: { ...formData.ambiente, usuariosSSLVPNConcorrentes: value || 0 },
                            })
                          }
                        >
                          <NumberInputField bg="white" />
                        </NumberInput>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Servidores protegidos</Td>
                      <Td>
                        <NumberInput
                          size="sm"
                          value={formData.ambiente.servidoresProtegidos}
                          onChange={(_, value) =>
                            setFormData({
                              ...formData,
                              ambiente: { ...formData.ambiente, servidoresProtegidos: value || 0 },
                            })
                          }
                        >
                          <NumberInputField bg="white" />
                        </NumberInput>
                      </Td>
                      <Td colSpan={2}></Td>
                    </Tr>
                    <Tr>
                      <Td>Conexões concorrentes (importante!)</Td>
                      <Td>
                        <NumberInput
                          size="sm"
                          value={formData.ambiente.conexoesConcorrentes}
                          onChange={(_, value) =>
                            setFormData({
                              ...formData,
                              ambiente: { ...formData.ambiente, conexoesConcorrentes: value || 0 },
                            })
                          }
                        >
                          <NumberInputField bg="white" />
                        </NumberInput>
                      </Td>
                      <Td colSpan={2}></Td>
                    </Tr>
                    <Tr>
                      <Td>Novas conexões por segundo (importante!)</Td>
                      <Td>
                        <NumberInput
                          size="sm"
                          value={formData.ambiente.novasConexoesPorSegundo}
                          onChange={(_, value) =>
                            setFormData({
                              ...formData,
                              ambiente: { ...formData.ambiente, novasConexoesPorSegundo: value || 0 },
                            })
                          }
                        >
                          <NumberInputField bg="white" />
                        </NumberInput>
                      </Td>
                      <Td colSpan={2}></Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>

            <Divider />

            {/* Questão 14 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                14. Existe um número mínimo de desempenho requerido?
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                <FormControl>
                  <FormLabel fontSize="sm">Mínimo de FW Throughput:</FormLabel>
                  <Input
                    value={formData.desempenhoMinimo.fwThroughput}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        desempenhoMinimo: { ...formData.desempenhoMinimo, fwThroughput: e.target.value },
                      })
                    }
                    bg="white"
                    placeholder="Ex: 1 Gbps"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm">Mínimo AV Throughput:</FormLabel>
                  <Input
                    value={formData.desempenhoMinimo.avThroughput}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        desempenhoMinimo: { ...formData.desempenhoMinimo, avThroughput: e.target.value },
                      })
                    }
                    bg="white"
                    placeholder="Ex: 500 Mbps"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm">Mínimo IPSec Throughput:</FormLabel>
                  <Input
                    value={formData.desempenhoMinimo.ipsecThroughput}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        desempenhoMinimo: { ...formData.desempenhoMinimo, ipsecThroughput: e.target.value },
                      })
                    }
                    bg="white"
                    placeholder="Ex: 800 Mbps"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm">Mínimo IPS Throughput:</FormLabel>
                  <Input
                    value={formData.desempenhoMinimo.ipsThroughput}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        desempenhoMinimo: { ...formData.desempenhoMinimo, ipsThroughput: e.target.value },
                      })
                    }
                    bg="white"
                    placeholder="Ex: 600 Mbps"
                  />
                </FormControl>
              </SimpleGrid>
            </Box>

            <Divider />

            {/* Questão 15 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                15. Qual a banda total disponível para acesso à Internet?
              </Text>
              <TableContainer>
                <Table variant="simple" size="sm">
                  <Thead>
                    <Tr>
                      <Th></Th>
                      <Th>Data Center</Th>
                      <Th>Filial 1</Th>
                      <Th>Filial 2</Th>
                      <Th>Outros</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>
                       
                      </Td>
                      <Td></Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight="bold">Link 1</Td>
                      <Td>
                        <Input
                          size="sm"
                          value={formData.bandaInternet.link1}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              bandaInternet: { ...formData.bandaInternet, link1: e.target.value },
                            })
                          }
                          bg="white"
                          placeholder="100 Mbps"
                        />
                      </Td>
                      <Td></Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight="bold">Link 2</Td>
                      <Td>
                        <Input
                          size="sm"
                          value={formData.bandaInternet.link2}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              bandaInternet: { ...formData.bandaInternet, link2: e.target.value },
                            })
                          }
                          bg="white"
                        />
                      </Td>
                      <Td></Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight="bold">Link 3</Td>
                      <Td>
                        <Input
                          size="sm"
                          value={formData.bandaInternet.link3}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              bandaInternet: { ...formData.bandaInternet, link3: e.target.value },
                            })
                          }
                          bg="white"
                        />
                      </Td>
                      <Td></Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight="bold">Outros</Td>
                      <Td>
                        <Input
                          size="sm"
                          value={formData.bandaInternet.outros}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              bandaInternet: { ...formData.bandaInternet, outros: e.target.value },
                            })
                          }
                          bg="white"
                        />
                      </Td>
                      <Td></Td>
                      <Td></Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>

            <Divider />

            {/* Questão 16 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                16. Qual é a composição do tráfego protegido esperado e o tipo de segurança aplicado a ele?
              </Text>
              <TableContainer>
                <Table variant="simple" size="sm">
                  <Thead>
                    <Tr>
                      <Th>Tipo de Aplicação</Th>
                      <Th></Th>
                      <Th>Tipo de Segurança</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Aplicações Web:</Td>
                      <Td>
                        <Flex align="center" gap={2}>
                          <NumberInput
                            size="sm"
                            max={100}
                            value={formData.trafegoProtegido.aplicacoesWeb.porcentagem}
                            onChange={(_, value) =>
                              setFormData({
                                ...formData,
                                trafegoProtegido: {
                                  ...formData.trafegoProtegido,
                                  aplicacoesWeb: {
                                    ...formData.trafegoProtegido.aplicacoesWeb,
                                    porcentagem: value || 0,
                                  },
                                },
                              })
                            }
                          >
                            <NumberInputField bg="white" />
                          </NumberInput>
                          <Text>%</Text>
                        </Flex>
                      </Td>
                      <Td>
                        <Input
                          size="sm"
                          value={formData.trafegoProtegido.aplicacoesWeb.tipoSeguranca}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              trafegoProtegido: {
                                ...formData.trafegoProtegido,
                                aplicacoesWeb: {
                                  ...formData.trafegoProtegido.aplicacoesWeb,
                                  tipoSeguranca: e.target.value,
                                },
                              },
                            })
                          }
                          bg="white"
                        />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Aplicações de Mail:</Td>
                      <Td>
                        <Flex align="center" gap={2}>
                          <NumberInput
                            size="sm"
                            max={100}
                            value={formData.trafegoProtegido.aplicacoesMail.porcentagem}
                            onChange={(_, value) =>
                              setFormData({
                                ...formData,
                                trafegoProtegido: {
                                  ...formData.trafegoProtegido,
                                  aplicacoesMail: {
                                    ...formData.trafegoProtegido.aplicacoesMail,
                                    porcentagem: value || 0,
                                  },
                                },
                              })
                            }
                          >
                            <NumberInputField bg="white" />
                          </NumberInput>
                          <Text>%</Text>
                        </Flex>
                      </Td>
                      <Td>
                        <Input
                          size="sm"
                          value={formData.trafegoProtegido.aplicacoesMail.tipoSeguranca}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              trafegoProtegido: {
                                ...formData.trafegoProtegido,
                                aplicacoesMail: {
                                  ...formData.trafegoProtegido.aplicacoesMail,
                                  tipoSeguranca: e.target.value,
                                },
                              },
                            })
                          }
                          bg="white"
                        />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Aplicações de Transferência de Arquivos:</Td>
                      <Td>
                        <Flex align="center" gap={2}>
                          <NumberInput
                            size="sm"
                            max={100}
                            value={formData.trafegoProtegido.aplicacoesTransferencia.porcentagem}
                            onChange={(_, value) =>
                              setFormData({
                                ...formData,
                                trafegoProtegido: {
                                  ...formData.trafegoProtegido,
                                  aplicacoesTransferencia: {
                                    ...formData.trafegoProtegido.aplicacoesTransferencia,
                                    porcentagem: value || 0,
                                  },
                                },
                              })
                            }
                          >
                            <NumberInputField bg="white" />
                          </NumberInput>
                          <Text>%</Text>
                        </Flex>
                      </Td>
                      <Td>
                        <Input
                          size="sm"
                          value={formData.trafegoProtegido.aplicacoesTransferencia.tipoSeguranca}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              trafegoProtegido: {
                                ...formData.trafegoProtegido,
                                aplicacoesTransferencia: {
                                  ...formData.trafegoProtegido.aplicacoesTransferencia,
                                  tipoSeguranca: e.target.value,
                                },
                              },
                            })
                          }
                          bg="white"
                        />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Streaming media / VoIP:</Td>
                      <Td>
                        <Flex align="center" gap={2}>
                          <NumberInput
                            size="sm"
                            max={100}
                            value={formData.trafegoProtegido.streamingVoip.porcentagem}
                            onChange={(_, value) =>
                              setFormData({
                                ...formData,
                                trafegoProtegido: {
                                  ...formData.trafegoProtegido,
                                  streamingVoip: {
                                    ...formData.trafegoProtegido.streamingVoip,
                                    porcentagem: value || 0,
                                  },
                                },
                              })
                            }
                          >
                            <NumberInputField bg="white" />
                          </NumberInput>
                          <Text>%</Text>
                        </Flex>
                      </Td>
                      <Td>
                        <Input
                          size="sm"
                          value={formData.trafegoProtegido.streamingVoip.tipoSeguranca}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              trafegoProtegido: {
                                ...formData.trafegoProtegido,
                                streamingVoip: {
                                  ...formData.trafegoProtegido.streamingVoip,
                                  tipoSeguranca: e.target.value,
                                },
                              },
                            })
                          }
                          bg="white"
                        />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Outros: RDP</Td>
                      <Td>
                        <Flex align="center" gap={2}>
                          <NumberInput
                            size="sm"
                            max={100}
                            value={formData.trafegoProtegido.outrosRDP.porcentagem}
                            onChange={(_, value) =>
                              setFormData({
                                ...formData,
                                trafegoProtegido: {
                                  ...formData.trafegoProtegido,
                                  outrosRDP: {
                                    ...formData.trafegoProtegido.outrosRDP,
                                    porcentagem: value || 0,
                                  },
                                },
                              })
                            }
                          >
                            <NumberInputField bg="white" />
                          </NumberInput>
                          <Text>%</Text>
                        </Flex>
                      </Td>
                      <Td>
                        <Input
                          size="sm"
                          value={formData.trafegoProtegido.outrosRDP.tipoSeguranca}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              trafegoProtegido: {
                                ...formData.trafegoProtegido,
                                outrosRDP: {
                                  ...formData.trafegoProtegido.outrosRDP,
                                  tipoSeguranca: e.target.value,
                                },
                              },
                            })
                          }
                          bg="white"
                        />
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>

            <Divider />

            {/* Questão 17 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                17. Qual será o papel do concentrador? Ele será utilizado exclusivamente como concentrador SD-WAN ou
                também será o Firewall de perímetro de Internet do site (usuários, servidores, tráfego entre VLANs,
                publicações)?
              </Text>
              <CheckboxGroup
                value={formData.papelConcentrador}
                onChange={(values) => setFormData({ ...formData, papelConcentrador: values as string[] })}
              >
                <SimpleGrid columns={{ base: 2, md: 4 }} spacing={2}>
                  {concentradorOptions.map((option) => (
                    <Checkbox key={option} value={option}>
                      {option}
                    </Checkbox>
                  ))}
                </SimpleGrid>
              </CheckboxGroup>
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

export default FortinetSizingQuestionnairePart2
