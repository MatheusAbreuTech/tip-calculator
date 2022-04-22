import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .box-form {
    max-width: 800px;
    width: 100%;
    height: 400px;
    padding: 2rem;
    background: ${(props) => props.theme.colors.White};
    margin-top: 4rem;
    border-radius: 20px;
    box-shadow: rgb(0 0 0 / 4%) 0px 3px 9.4px -8px, rgb(0 0 0 / 6%) 0px 4.3px 13.9px -8px,
      rgb(0 0 0 / 16%) 0px 5px 32px -8px;

    display: flex;
    justify-content: space-between;
  }
`;
