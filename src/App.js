import React,{useState} from 'react';
import {Header} from './__components__/layout/Header';
import { Content } from './__components__/layout/Content';

import { ProjectsProvider, SelectedProjectProvider} from './context';

export const App = ({darkModeDefault=false}) =>  {
  const[darkMode, setDarkMode] = useState(darkModeDefault);
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          data-test-id = "application"
          className = {darkMode ? 'darkmode': undefined}
          >
          <Header darkMode = {darkMode} setDarkMode = {setDarkMode}/>
          <Content/>
          </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
    );
};