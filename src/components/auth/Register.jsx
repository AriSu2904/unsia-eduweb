import { useState } from 'react';
import { signupFields } from "../../constants/FormField.js"
import FormAction from "./FormAction.jsx";
import Input from "../shared/Input.jsx";
import {registerRequest} from "../../services/authApi.js";
import Loading from "../shared/Loading.jsx";
import {useNavigate} from "react-router-dom";
import AlertDialog from "../shared/Alert.jsx";

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Register(){
    const navigate = useNavigate();

    const [signupState,setSignupState]=useState(fieldsState);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsLoading(true);

        createAccount().catch(console.log);
    }

    const createAccount= async ()=>{
        try {
            const data = await registerRequest(signupState);
            if(data) {
                await AlertDialog({
                    title: 'Success',
                    text: 'Successfully Registered',
                    icon: 'success',
                    confirmButtonText: 'Login Now!'
                })
                navigate('/');
            }
        }catch (error) {
            const {data: { errors }} = error;
            await AlertDialog({
                title: 'Failed',
                text: errors,
                icon: 'error',
                confirmButtonText: 'Try Again'
            })
            throw error;
        }finally {
            setIsLoading(false);
        }
    }

    return(
        <div>
            {isLoading && <Loading />}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="">
                    {
                        fields.map(field =>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={signupState[field.id]}
                                labelText={field.labelText}
                                labelFor={field.labelFor}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                isRequired={field.isRequired}
                                placeholder={field.placeholder}
                            />
                        )
                    }
                    <FormAction handleSubmit={handleSubmit} text="Signup"/>
                </div>


            </form>
        </div>
    )
}