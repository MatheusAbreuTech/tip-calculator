import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 2rem;
  width: 50%;
  .selected-bill,
  .selected-people {
    display: flex;
    position: relative;
    align-items: center;
    height: 2.2rem;

    img {
      position: absolute;
      left: 1rem;
      height: 1rem;
    }

    input {
      flex: 1;
      border: none;
      background: ${(props) => props.theme.colors.Very_light_grayish_cyan};
      outline: none;
      text-align: right;
      font-size: 1.5rem;
      font-weight: 700;
      padding: 0 1rem;
      color: ${(props) => props.theme.colors.Very_dark_cyan};
      border-radius: 5px;
      cursor: pointer;

      &[type='number'],
      &::-webkit-inner-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        -moz-appearance: textfield;
      }
    }

    input:focus {
      border: 2px solid ${(props) => props.theme.colors.Strong_cyan};
      border-radius: 5px;
    }
  }
  .title {
    color: ${(props) => props.theme.colors.Dark_grayish_cyan};
    font-size: 0.8rem;
    line-height: 3rem;
  }

  .tips {
    div {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
      gap: 1rem;

      button {
        height: 40px;
        background: ${(props) => props.theme.colors.Very_dark_cyan};
        border: none;
        color: ${(props) => props.theme.colors.White};
        border-radius: 5px;
        font-size: 18px;
        font-weight: 700;

        &:hover {
          background: ${(props) => props.theme.colors.Strong_cyan};
        }

        &::selection {
          background: ${(props) => props.theme.colors.Strong_cyan};
        }

        &.active {
          background: ${(props) => props.theme.colors.Strong_cyan};
          color: ${(props) => props.theme.colors.Very_dark_cyan};
        }
      }

      input {
        height: 40px;
        border: none;
        color: ${(props) => props.theme.colors.Very_dark_cyan};
        font-weight: 700;
        font-size: 18px;
        background: ${(props) => props.theme.colors.Very_light_grayish_cyan};
        padding: 0.5rem;
        cursor: pointer;
        text-align: right;
        outline: none;
        border-radius: 5px;

        &::placeholder {
          text-align: center;
        }

        &:focus {
          border: 2px solid ${(props) => props.theme.colors.Strong_cyan};
          border-radius: 5px;
        }

        &[type='number'],
        &::-webkit-inner-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          -moz-appearance: textfield;
        }
      }
    }
  }
`;
