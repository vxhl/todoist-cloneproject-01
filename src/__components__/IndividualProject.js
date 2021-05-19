import React, {useState} from 'react';
import { useSelectedProjectValue, useProjectsValue} from '../context';
import { FaTrashAlt} from 'react-icons/fa';

import { firebase } from 'firebase';

export const IndividualProject = ({project}) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const { projects, setProjects} = useProjectsValue();
    const {setSelectedProject} = useSelectedProjectValue();
    
    const deleteProject = docId => {
        firebase
        .firestore()
        .collection('projects')
        .doc(docId)
        .delete()
        .then(()=> {
            setProjects([...projects]); // So this here sets the projects so that it forces the 
            // But if we did not have the JSOM.stringify thing then it will run in an infinite loop
            setSelectedProject('INBOX');
        });

    };
    return (
        <>
        <span className='sidebar__dot'>•</span>
        <span className = 'sidebar__project-name'>{project.name}</span>
        <span 
        className = 'sidebar__project-delete'
        data-testid = "delete-project"
        onClick={() => setShowConfirm(!showConfirm)}
        >
            <FaTrashAlt/>
            {showConfirm && (
                <div className = "project-delete-modal">
                <div className = "project-delete-modal__inner">
                    <p> Are you sure you want to delete this project?</p>
                    <button
                    type = "button"
                    onClick= {() =>deleteProject(project.docId)}
                    >
                        Delete
                        <span onClick={() =>setShowConfirm(!showConfirm)}>Cancel</span>
                        </button>
                    
                    </div>
                </div>
            )}        
        </span>
        </>
    );

};