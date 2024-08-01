import Header from "../components/AuthHeader"
import Login from "../components/Login"

export default function LoginPage(){
    return(
        <>
            <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/register"
            />
            <Login/>
        </>
    )
}