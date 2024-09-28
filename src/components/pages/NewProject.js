import { useNavigate } from 'react-router-dom';

import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject(){
    const navigate = useNavigate();

    function createPost(project){
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type':'application.json',
            },
            body:JSON.stringify(project)
        })
        .then(res => res.json())
        .then( (data) => {
            console.log(data)
            navigate('/projects');
            //history.push('/projects', {message : 'Project created with success!'} )
        })
        .catch(err => console.log(err))
    }

    return(
        <div className={styles.newProjectContainer} >
            <h1>Create Project</h1>
            <p>Create your project and then add the services.</p>
            <ProjectForm 
                handleSubmit={createPost}
                btnText="CreateProject" 
            />
        </div>
    )
}

export default NewProject