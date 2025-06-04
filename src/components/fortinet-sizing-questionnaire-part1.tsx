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
  useToast,
  Card,
  CardBody,
  SimpleGrid,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"

interface QuestionnaireData {
  cnpj: string
  unidade: string
  funcionalidadesSeguranca: string[]
  servicosAdicionais: string[]
  singleSignOn: string
  maxUsuariosAD: number
  roteamentoDinamico: string
  protocolosRoteamento: string
  vpnSiteToSite: string
  maxPeerSites: number
  sslVpn: string
  maxUsuariosSslVpn: number
  duploFatorVpn: string
  volumeUsuariosVpn: number
  controlePostura: string
  volumeDispositivos: number
  observacoes: string
  responsavel: string
}

const FortinetSizingQuestionnaire: React.FC = () => {
  const [formData, setFormData] = useState<QuestionnaireData>({
    cnpj: "1234567890",
    unidade: "SEDE",
    funcionalidadesSeguranca: ["Firewall", "IPSec VPN", "SSL VPN", "IDS/IPS", "Inspeção SSL", "Controle de Aplicação"],
    servicosAdicionais: ["SD-WAN", "Logging & Reporting", "Token para MFA", "Integração com IaaS / nuvens públicas"],
    singleSignOn: "sim",
    maxUsuariosAD: 200,
    roteamentoDinamico: "não",
    protocolosRoteamento: "",
    vpnSiteToSite: "sim",
    maxPeerSites: 0,
    sslVpn: "sim",
    maxUsuariosSslVpn: 0,
    duploFatorVpn: "sim",
    volumeUsuariosVpn: 0,
    controlePostura: "",
    volumeDispositivos: 0,
    observacoes: "",
    responsavel: "",
  })

  const toast = useToast()

  const funcionalidadesOptions = [
    "Firewall",
    "Antivírus",
    "Filtro Web",
    "IPSec VPN",
    "Anti-Spam",
    "DLP",
    "SSL VPN",
    "IDS/IPS",
    "Proxy Explícito",
    "Inspeção SSL",
    "Controle de Aplicação",
  ]

  const servicosOptions = [
    "Autenticação do usuário",
    "Segurança IPv6",
    "Controlador de Switches",
    "SNMP",
    "SD-WAN",
    "Controladora Wireless",
    "NAC",
    "sFlow/Netflow",
    "Logging & Reporting",
    "Token para MFA",
    "Integração com proteção de Endpoint",
    "Outros",
    "Identificação de dispositivo QoS/Traffic Shaping",
    "Integração com IaaS / nuvens públicas",
  ]
  const handleReset = () => {
    setFormData({
      cnpj: "",
      unidade: "",
      funcionalidadesSeguranca: [],
      servicosAdicionais: [],
      singleSignOn: "",
      maxUsuariosAD: 0,
      roteamentoDinamico: "",
      protocolosRoteamento: "",
      vpnSiteToSite: "",
      maxPeerSites: 0,
      sslVpn: "",
      maxUsuariosSslVpn: 0,
      duploFatorVpn: "",
      volumeUsuariosVpn: 0,
      controlePostura: "",
      volumeDispositivos: 0,
      observacoes: "",
      responsavel: "",
    })
    toast({
      title: "Formulário limpo!",
      description: "Todos os campos foram resetados.",
      status: "info",
      duration: 2000,
      isClosable: true,
    })
  }

  return (
    <Box maxW="4xl" mx="auto" p={6} bg="gray.50" minH="100vh">
      <Card>
        <CardBody>
          <VStack spacing={6} align="stretch">
            {/* Header */}
            <Box>
              
              <Heading size="md" mb={4}>
                Questionário de Sizing
              </Heading>
              <Text fontSize="sm" color="gray.600" mb={4}>
                Com o objetivo de dimensionar o modelo de FortiGate apropriado, por favor preencha o documento de acordo
                com o ambiente atual e considerações de crescimento futuro.
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={6}>
                <FormControl>
                  <FormLabel>CNPJ:</FormLabel>
                  <Input
                    value={formData.cnpj}
                    onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
                    bg="white"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Unidade:</FormLabel>
                  <Input
                    value={formData.unidade}
                    onChange={(e) => setFormData({ ...formData, unidade: e.target.value })}
                    bg="white"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Responsável:</FormLabel>
                  <Input
                    value={formData.responsavel}
                    onChange={(e) => setFormData({ ...formData, responsavel: e.target.value })}
                    bg="white"
                  />
                </FormControl>
              </SimpleGrid>

            
            </Box>

            <Divider />

            <Box>
              <Text fontWeight="bold" mb={3}>
                1. Quais as funcionalidades de segurança são requeridas?
              </Text>
              <CheckboxGroup
                value={formData.funcionalidadesSeguranca}
                onChange={(values) => setFormData({ ...formData, funcionalidadesSeguranca: values as string[] })}
              >
                <SimpleGrid columns={{ base: 2, md: 3 }} spacing={2}>
                  {funcionalidadesOptions.map((option) => (
                    <Checkbox key={option} value={option}>
                      {option}
                    </Checkbox>
                  ))}
                </SimpleGrid>
              </CheckboxGroup>
            </Box>

            <Divider />

            {/* Questão 2 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                2. Quais os serviços adicionais são desejados?
              </Text>
              <CheckboxGroup
                value={formData.servicosAdicionais}
                onChange={(values) => setFormData({ ...formData, servicosAdicionais: values as string[] })}
              >
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
                  {servicosOptions.map((option) => (
                    <Checkbox key={option} value={option}>
                      {option}
                    </Checkbox>
                  ))}
                </SimpleGrid>
              </CheckboxGroup>
            </Box>

            <Divider />

            {/* Questão 3 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                3. Single-Sign-on é requerido com Windows AD?
              </Text>
              <HStack spacing={8} mb={4}>
                <RadioGroup
                  value={formData.singleSignOn}
                  onChange={(value) => setFormData({ ...formData, singleSignOn: value })}
                >
                  <HStack spacing={4}>
                    <Radio value="não">Não</Radio>
                    <Radio value="sim">Sim</Radio>
                  </HStack>
                </RadioGroup>
              </HStack>
              {formData.singleSignOn === "sim" && (
                <FormControl maxW="200px">
                  <FormLabel fontSize="sm">Max usuários AD users:</FormLabel>
                  <NumberInput
                    value={formData.maxUsuariosAD}
                    onChange={(_, value) => setFormData({ ...formData, maxUsuariosAD: value || 0 })}
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

            {/* Questão 4 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                4. Roteamento dinâmico é requerido? Favor compartilhar a topologia atual detalhando WAN e LAN.
              </Text>
              <HStack spacing={8} mb={4}>
                <RadioGroup
                  value={formData.roteamentoDinamico}
                  onChange={(value) => setFormData({ ...formData, roteamentoDinamico: value })}
                >
                  <HStack spacing={4}>
                    <Radio value="não">Não</Radio>
                    <Radio value="sim">Sim</Radio>
                  </HStack>
                </RadioGroup>
              </HStack>
              {formData.roteamentoDinamico === "sim" && (
                <FormControl>
                  <FormLabel fontSize="sm">Protocolos de roteamento:</FormLabel>
                  <Input
                    value={formData.protocolosRoteamento}
                    onChange={(e) => setFormData({ ...formData, protocolosRoteamento: e.target.value })}
                    bg="white"
                    placeholder="Especifique os protocolos"
                  />
                </FormControl>
              )}
            </Box>

            <Divider />

            {/* Questão 5 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                5. VPN Site-to-Site é requerido?
              </Text>
              <HStack spacing={8} mb={4}>
                <RadioGroup
                  value={formData.vpnSiteToSite}
                  onChange={(value) => setFormData({ ...formData, vpnSiteToSite: value })}
                >
                  <HStack spacing={4}>
                    <Radio value="não">Não</Radio>
                    <Radio value="sim">Sim</Radio>
                  </HStack>
                </RadioGroup>
              </HStack>
              {formData.vpnSiteToSite === "sim" && (
                <FormControl maxW="200px">
                  <FormLabel fontSize="sm">Max peer sites:</FormLabel>
                  <NumberInput
                    value={formData.maxPeerSites}
                    onChange={(_, value) => setFormData({ ...formData, maxPeerSites: value || 0 })}
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

            {/* Questão 6 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                6. SSL-VPN é requerido?
              </Text>
              <HStack spacing={8} mb={4}>
                <RadioGroup value={formData.sslVpn} onChange={(value) => setFormData({ ...formData, sslVpn: value })}>
                  <HStack spacing={4}>
                    <Radio value="não">Não</Radio>
                    <Radio value="sim">Sim</Radio>
                  </HStack>
                </RadioGroup>
              </HStack>
              {formData.sslVpn === "sim" && (
                <FormControl maxW="200px">
                  <FormLabel fontSize="sm">Max de usuários:</FormLabel>
                  <NumberInput
                    value={formData.maxUsuariosSslVpn}
                    onChange={(_, value) => setFormData({ ...formData, maxUsuariosSslVpn: value || 0 })}
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

            {/* Questão 7 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                7. Duplo fator de autenticação para VPN cliente é requerido?
              </Text>
              <HStack spacing={8} mb={4}>
                <RadioGroup
                  value={formData.duploFatorVpn}
                  onChange={(value) => setFormData({ ...formData, duploFatorVpn: value })}
                >
                  <HStack spacing={4}>
                    <Radio value="não">Não</Radio>
                    <Radio value="sim">Sim</Radio>
                  </HStack>
                </RadioGroup>
              </HStack>
              {formData.duploFatorVpn === "sim" && (
                <FormControl maxW="200px">
                  <FormLabel fontSize="sm">Volume de usuários:</FormLabel>
                  <NumberInput
                    value={formData.volumeUsuariosVpn}
                    onChange={(_, value) => setFormData({ ...formData, volumeUsuariosVpn: value || 0 })}
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

            {/* Questão 8 */}
            <Box>
              <Text fontWeight="bold" mb={3}>
                8. Controle de postura para o dispositivo remoto é necessário (podemos detalhar melhor este item em uma
                chamada)? Ex: adicione tag para dispositivos Windows como Compliance para acessar recursos corporativos
                de modo remoto via integração entre solução de endpoint com o Firewall.
              </Text>
              <FormControl mb={4}>
                <Textarea
                  value={formData.controlePostura}
                  onChange={(e) => setFormData({ ...formData, controlePostura: e.target.value })}
                  bg="white"
                  placeholder="Descreva os requisitos de controle de postura..."
                  rows={3}
                />
              </FormControl>
              <FormControl maxW="200px">
                <FormLabel fontSize="sm">Volume de dispositivos:</FormLabel>
                <NumberInput
                  value={formData.volumeDispositivos}
                  onChange={(_, value) => setFormData({ ...formData, volumeDispositivos: value || 0 })}
                  bg="white"
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

            {/* Observações */}
            <Box>
              <FormControl>
                <FormLabel fontWeight="bold">Observações adicionais:</FormLabel>
                <Textarea
                  value={formData.observacoes}
                  onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
                  bg="white"
                  placeholder="Adicione qualquer informação adicional relevante..."
                  rows={4}
                />
              </FormControl>
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

export default FortinetSizingQuestionnaire
