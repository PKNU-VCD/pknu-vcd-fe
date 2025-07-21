'use client';

import { Global } from '@emotion/react';
import { reset } from './reset';
import { global } from './global';

const GlobalStyle = () => <Global styles={[reset, global]} />;

export default GlobalStyle;
