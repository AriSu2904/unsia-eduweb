import {useState} from 'react';
import {loginFields} from "../../constants/FormField.js";
import FormAction from "./FormAction.jsx";
import Input from "../shared/Input.jsx";
import {loginRequest} from "../../services/authApi.js";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import Loading from "../shared/Loading.jsx";
import {setToken, setUser} from "../../actions/authAction.js";
import AlertDialog from "../shared/Alert.jsx";


const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginState, setLoginState] = useState(fieldsState);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setLoginState({...loginState, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        setIsLoading(true);
        e.preventDefault();
        authenticateUser().catch(console.log);
    }

    const authenticateUser = async () => {
        try {
            const {data} = await loginRequest(loginState);

            const userInformation = {
                email: data.email,
                role: data.role,
            }

            dispatch(setUser(userInformation));
            dispatch(setToken(data.token));

            localStorage.setItem("token", data.token);
            localStorage.setItem("email", data.email);
            localStorage.setItem("role", data.role);

            navigate('/dashboard');
        } catch (error) {
            const {data: {errors}} = error;
            await AlertDialog({
                title: 'Failed Login',
                text: errors,
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            {isLoading && <Loading/>}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="-space-y-px">
                    {
                        fields.map(field =>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={loginState[field.id]}
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
                </div>
                <FormAction handleSubmit={handleSubmit} text="Login"/>

            </form>
        </div>

    )
}