import styled, { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      Strong_cyan: string;
      Very_dark_cyan: string;
      Dark_grayish_cyan: string;
      Grayish_cyan: string;
      Light_grayish_cyan: string;
      Very_light_grayish_cyan: string;
      White: string;
    };
  }
}
