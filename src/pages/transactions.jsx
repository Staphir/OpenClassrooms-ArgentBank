import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";

function Transactions() {
    const {state} = useLocation();
    const account = state.account;
    console.log(state);

    return(
        <>
        <Helmet>
            <title>Argent Bank - Transactions</title>
        </Helmet>
        <main className="bg-stone-200 flex flex-col justify-around items-center">
            <section className="bg-white flex flex-col w-full text-center">
                <h1 className="text-base mt-4">{account.title}</h1>
                <p className="text-3xl leading-normal font-bold">{account.amount}</p>
                <p className="text-sm leading-normal mb-4">{account.description}</p>
            </section>
            <section className="flex flex-col mx-8">
                <div className="flex flex-row justify-between">
                    <p className="text-lg">DATE</p>
                    <p className="text-lg">DESCRIPTION</p>
                    <p className="text-lg">AMOUNT</p>
                    <p className="text-lg">BALANCE</p>
                </div>
            </section>
        </main>
        </>
    )
}

export default Transactions;