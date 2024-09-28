import {useEffect, useState} from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm( {handleSubmit, btnText, projectData} ){

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState([projectData || {} ]) //array or object clean

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            setCategories(data)
        })
        .catch(error => console.log(error))
    }, [])

    const submit=(e) => {
        e.preventDefault()
        handleSubmit(project)
        //console.log(project)
    }

    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e){
        setProject({ ...project, categories:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text, 
        }  })
    }

    return(
        <form onSubmit={submit}  className={styles.form} >
            <Input
                type='text'
                text='Project name'
                placeholder='Enter project name'
                name='name'
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input
                type='number'
                text='Total budget'
                placeholder='Enter total budget'
                name='budget'
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select 
                name="categoryId" 
                text="Select Category" 
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : '' }
            />
            <SubmitButton 
                text={btnText} 
            />
        </form>
    )
}

export default ProjectForm