import React from 'react';
import {Header} from './__components__/layout/Header';
import { Content } from './__components__/layout/Content';

import { ProjectsProvider, SelectedProjectProvider} from './context';

export const App = () =>  (
    <SelectedProjectProvider>
      <ProjectsProvider>
    <div className="App">
    <Header />
    <Content/>
    
    </div>
    </ProjectsProvider>
    </SelectedProjectProvider>
    );