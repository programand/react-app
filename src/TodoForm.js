import { useState } from "react"

export function TodoForm( {addTodo} ) {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        if(!value) return;
        addTodo(value);
        setValue("")
    }
   
    return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={value}
            onChange = {e => setValue(e.target.value)} //e é o evento e o target é o alvo do evento que no caso é o value
        />
    </form>
    )
}