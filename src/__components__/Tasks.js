import React, {useEffect } from 'react';
import { Checkbox } from './Checkbox';
import { useTasks } from '../hooks';
import { collatedTasks} from '../constants';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';
import { useSelectedProjectValue, useProjectsValue } from '../context'; 

export const Tasks = () => {
    const { selectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    const { tasks } = useTasks(selectedProject);
    let projectName = '';

    if (projects && selectedProject && !collatedTasksExist(selectedProject)){
        projectName = getTitle(projects, selectedProject).name;
        // basically the custom projects that we make
        console.log("projectName 1: ", projectName);
    }
    if ( collatedTasksExist(selectedProject) && selectedProject) {
        projectName = getCollatedTitle(collatedTasks, selectedProject ).name;
        // bascially we get one of INBOX< TODAY< NEXT7
        console.log("projectName 2: ", projectName);

    }
    useEffect(() => { 
        document.title = `${projectName}: Todoist`;

    });

    console.log('tasks', tasks); 
    return (
        <div className = "tasks" data-testid = "tasks">
            <h2 data-testid="project-name">{projectName}</h2>
            
            <ul className="tasks__list">
                {tasks.map((task) =>(
                    <li key={`${task.id}`}>
                    <Checkbox id = {task.id} />

                    <span>{task.task}</span>
                    
                    </li>

                ))}
            </ul>
        </div>
    );
};