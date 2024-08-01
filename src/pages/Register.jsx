import Header from "../components/AuthHeader";
import Signup from "../components/Register";

export default function RegisterPage(){
    return(
        <>
            <Header
                heading="Signup to create an account"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl="/"
            />
            <Signup/>
        </>
    )
}