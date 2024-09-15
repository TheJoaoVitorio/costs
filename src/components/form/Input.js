import styles from './Input.module.css'

function Input( {type, text, name, placeholder, handleOnChange, value} ){
    return (
        <div>
            <label htmlFor={name}> {text}: </label>
            <input
                className={styles.formControl} 
                type={type} 
                placeholder={placeholder} 
                name={name} 
                id={name} 
                onChange={handleOnChange} 
                value={value}    
            />
        </div>
    )
}

export default Input