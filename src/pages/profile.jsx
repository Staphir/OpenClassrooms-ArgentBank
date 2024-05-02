import { Helmet } from "react-helmet-async";
import Account from "../components/account";

function Profile() {

    const accounts = [
        {
            title: "Argent Bank Checking (x8349)",
            amount: "$2,082.79",
            description: "Available Balance"
        },
        {
            title: "Argent Bank Savings (x6712)",
            amount: "$10,928.42",
            description: "Available Balance"
        },
        {
            title: "Argent Bank Credit Card (x8349)",
            amount: "$184.30",
            description: "Current Balance"
        }
    ]

    return(
        <>
        <Helmet>
            <title>Argent Bank - Profile</title>
        </Helmet>
        <main className="bg-[#12002b] flex flex-col items-center">
            <div className="text-white mb-8">
                <h1 className="text-3xl font-bold my-5">
                    Welcome back
                    <br/>
                    Tony Stark !
                </h1>
                <button className="bg-[#00bc77] text-white font-bold p-2">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map((account, index) => {
                return <Account key={index} account={account}></Account>
            })}
        </main>
        </>
    )
}

export default Profile;