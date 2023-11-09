import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './globalStyle';
import Routes from './routes'

createRoot(document.getElementById('root')).render(<>
<Routes />
< GlobalStyle />
</>);


