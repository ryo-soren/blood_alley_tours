import "../index.css"

const FormErrors = props => {
    const { errors= [], forField } = props;

    let filteredErrors = errors;

    if(forField){
        console.log(`Errors: ${filteredErrors}, forField: ${forField}`)
        filteredErrors = errors.filter(
            err => err.field === forField
        )
    }

    return(
        <ul className="FormErrors">
            {
                filteredErrors.map((error, i) => {
                    return <li key={i}>{error.field}: {error.message}</li>
                })
            }
        </ul>
    )
}

export default FormErrors;


