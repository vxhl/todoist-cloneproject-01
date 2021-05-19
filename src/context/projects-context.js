import React, { createContext, useContext } from 'react';
// Provides us where to pass data down thorugh the component tree without having to use props
import { useProjects} from '../hooks';

export const ProjectsContext = createContext();
export const ProjectsProvider = ({children}) => {
 // Provider and Consumer. Provider at top level and consumer at bottom level for passing data
 const { projects, setProjects } = useProjects();

 
 return (
        <ProjectsContext.Provider value = {{projects, setProjects}}>
            {children}
        </ProjectsContext.Provider>
    );
};
export const useProjectsValue = () => useContext(ProjectsContext);
// So we gonna use the provider and when we pull out projects value
// we will be returned with whatever
