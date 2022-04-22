import { ThemeProvider } from 'styled-components';
import { Form } from '../components/Form';
import { Results } from '../components/Results';

import GlobalStyle from '../styles/global';
import theme from '../styles/themes';
import * as S from './styles';

import logoImg from '../assets/images/logo.svg';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <S.Container>
        <img src={logoImg} alt="" />
        <div className="box-form">
          <Form />
          <Results />
        </div>
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
