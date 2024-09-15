import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject(){
    return(
        <div className={styles.newProjectContainer} >
            <h1>Create Project</h1>
            <p>Create your project and then add the services.</p>
            <ProjectForm btnText="CreateProject" />
        </div>
    )
}

export default NewProject