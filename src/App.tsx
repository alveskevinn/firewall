import { ChakraProvider } from '@chakra-ui/react';
import CompleteFortinetQuestionnaireFinal from './components/complete-fortinet-questionnaire-final';
// import FortinetSizingQuestionnaire from './components/FormComponent';
// import FortinetSizingQuestionnairePart2 from './components/fortinet-sizing-questionnaire-part2';
// import FortinetSizingQuestionnairePart3 from './components/fortinet-sizing-questionnaire-part3';

function App() {
  return (
    <ChakraProvider resetCSS>
      <CompleteFortinetQuestionnaireFinal />
    </ChakraProvider>
  );
}

export default App; 