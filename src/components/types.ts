export interface SecurityFeatures {
  firewall: boolean;
  antivirus: boolean;
  filtroWeb: boolean;
  ipsecVpn: boolean;
  antiSpam: boolean;
  dlp: boolean;
  sslVpn: boolean;
  idsIps: boolean;
  proxyExplicito: boolean;
  inspecaoSsl: boolean;
  controleAplicacao: boolean;
}

export interface AdditionalServices {
  autenticacaoUsuario: boolean;
  segurancaIpv6: boolean;
  controladorSwitches: boolean;
  snmp: boolean;
  sdWan: boolean;
  controladoraWireless: boolean;
  nac: boolean;
  sFlowNetflow: boolean;
  loggingReporting: boolean;
  tokenMfa: boolean;
  integracaoEndpoint: boolean;
  identificacaoDispositivo: boolean;
  qosTrafficShaping: boolean;
  integracaoIaasNuvens: boolean;
  outros: string;
}

export interface NetworkConfiguration {
  singleSignOn: boolean;
  maxAdUsers: string;
  roteamentoDinamico: boolean;
  protocolosRoteamento: string;
  topologiaAtual: string;
  vpnSiteToSite: boolean;
  maxPeerSites: string;
  sslVpnRequerido: boolean;
  maxSslVpnUsers: string;
  duploFatorVpn: boolean;
  volumeUsuariosVpn: string;
}

export interface IFormInputs {
  nome: string;
  email: string;
  telefone: string;
  site: string;
  mensagem: string;
  securityFeatures: SecurityFeatures;
  additionalServices: AdditionalServices;
  networkConfiguration: NetworkConfiguration;
} 