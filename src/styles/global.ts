import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: #c5e4e7;
  font-family: 'Space Mono', monospace;
  color: #fff;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body, input, select, button {
  font: 400 1rem "Space Mono", monospace;
}

button{
  cursor: pointer;
}
`;
