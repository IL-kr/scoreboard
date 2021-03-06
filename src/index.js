import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';

import {PLAYERS} from './helpers';

render(<App initialPlayers={PLAYERS}/>, document.getElementById('root'));
