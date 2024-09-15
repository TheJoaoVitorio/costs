import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm( {btnText} ){
    return(
        <form>
            <Input
                type='text'
                text='Project name'
                placeholder='Enter project name'
                name='name'
            />
            <Input
                type='number'
                text='Total budget'
                placeholder='Enter total budget'
                name='budget'
            />
            <Select 
                name="categoryId" 
                text="Select Category" 
            />
            <SubmitButton 
                text={btnText} 
            />
        </form>
    )
}

export default ProjectForm