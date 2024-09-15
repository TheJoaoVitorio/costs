import styles from './Select.module.css'

function Select({text, name, options, handleOnChange, value}){
    return(
        <div>
            <label htmlFor={name}> {text}: </label> 
            <select className={styles.selectForm} name={name} id={name}>
                <option>Select option</option>
            </select>
        </div>
    )
}

export default Select