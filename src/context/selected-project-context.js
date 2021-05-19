import React, { createContext, useContext, useState} from 'react';
// Provides us where to pass data down thorugh the component tree without having to use props
import { useProjects} from '../hooks';

export const SelectedProjectContext = createContext();
export const SelectedProjectProvider = ({children}) => {
 // Provider and Consumer. Provider at top level and consumer at bottom level for passing data
 const [selectedProject, setSelectedProject ] = useState('INBOX');

 
 return (
        <SelectedProjectContext.Provider value = {{selectedProject, setSelectedProject}}>
            {children}
        </SelectedProjectContext.Provider>
    );
};
export const useSelectedProjectValue = () => useContext(SelectedProjectContext);
// So we gonna use the provider and when we pull out projects value
// we will be returned with whatever?>?]g[os,g [pw,m
