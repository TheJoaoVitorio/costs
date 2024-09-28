import styles from './Select.module.css'

function Select({text, name, options, handleOnChange, value}){
    return(
        <div>
            <label htmlFor={name}> {text}: </label> 
            <select className={styles.selectForm} name={name} id={name} onChange={handleOnChange} value={ value || '' } >
                <option value="" >Select option</option>
                    {options.length > 0 && options.map((option) => (
                        <option value={option.id} key={option.id}>
                            {option.name}
                        </option>
                    ))}
            </select>
        </div>
    )
}

export default Select