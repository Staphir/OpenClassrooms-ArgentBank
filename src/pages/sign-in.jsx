import { Helmet } from "react-helmet-async";
import SignInForm from "../components/signInForm";

function SignIn() {
    return (
        <>
        <Helmet>
            <title>Argent Bank - Sign in</title>
        </Helmet>
        <main className="bg-[#12002b] flex flex-col items-center">
            <SignInForm></SignInForm>
        </main>
        </>
    )
}

export default SignIn;