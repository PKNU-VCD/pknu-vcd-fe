import { ThemeProvider } from '@emotion/react';
import type { Preview } from '@storybook/react';
import React from 'react';
import GlobalStyle from '../src/styles/globalStyles';
import { theme } from '../src/styles/theme';

const preview: Preview = {
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Story />
        </>
      </ThemeProvider>
    ),
  ],
};

export default preview;
