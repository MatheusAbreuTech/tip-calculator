import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 50%;
  padding: 2rem;
  background: ${(props) => props.theme.colors.Very_dark_cyan};
  border-radius: 15px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .results {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .results > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 1rem;
    }

    span {
      font-size: 0.8rem;
      color: ${(props) => props.theme.colors.Strong_cyan};
    }

    h2 {
      font-size: 2.8rem;
      color: ${(props) => props.theme.colors.Strong_cyan};
    }
  }

  button {
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 700;
    background: ${(props) => props.theme.colors.Strong_cyan};
    color: ${(props) => props.theme.colors.Very_dark_cyan};
  }
`;
