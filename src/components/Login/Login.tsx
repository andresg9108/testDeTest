import {
    useState
} from 'react'
import validate from '../../validations/LoginValidations'
import {
    getAuth
} from '../../functions/auth'

function Login(){
    const [error, setError] = useState<string>('')
    const [input, setInput] = useState<{
        user: string;
        password: string;
    }>({
        user: '',
        password: ''
    })

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    }

    async function handleSubmit (event: React.FormEvent<HTMLFormElement>): void{
        event.preventDefault()

        try{
            await validate(input)
            await getAuth()

            alert(`Login:\n\n${JSON.stringify(input)}`)
        }catch(e){
            setError((e as Error).message)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="user"
                placeholder="User"
                onChange={handleChange}
            />
            <input 
                type="password" 
                name="password"
                placeholder="Password"
                onChange={handleChange}
            />
            <button type="submit" name='Login'>Login</button>

            {
                error && (
                    <>
                        <br />
                        <span style={{
                            color: 'orange'
                        }}>{error}</span>
                        <br />
         </>
       )
            }
        </form>
    )
}

export default Login
