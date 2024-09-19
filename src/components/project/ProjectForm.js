import {useEffect, useState} from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm( {btnText} ){

    const [categories, setCategories] = useState([])

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

    return(
        <form className={styles.form} >
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
                options={categories}
            />
            <SubmitButton 
                text={btnText} 
            />
        </form>
    )
}

export default ProjectForm