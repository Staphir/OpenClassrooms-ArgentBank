import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";
import Collapse from "../components/collapse";

function Transactions() {
    const {state} = useLocation();
    const account = state.account;

    const transactions = [
        {
            date: 'June 20th, 2020',
            description: 'Golden Sun Bakery',
            amount: '$5.00',
            balance: '$2082.79'
        },
        {
            date: 'June 20th, 2020',
            description: 'Golden Sun Bakery',
            amount: '$10.00',
            balance: '$2087.79'
        },
        {
            date: 'June 20th, 2020',
            description: 'Golden Sun Bakery',
            amount: '$20.00',
            balance: '$2097.79'
        },
        {
            date: 'June 20th, 2020',
            description: 'Golden Sun Bakery',
            amount: '$30.00',
            balance: '$2117.79'
        },
        {
            date: 'June 20th, 2020',
            description: 'Golden Sun Bakery',
            amount: '$40.00',
            balance: '$2147.79'
        },
        {
            date: 'June 20th, 2020',
            description: 'Golden Sun Bakery',
            amount: '$50.00',
            balance: '$2187.79'
        }
    ]

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
            <section className="flex flex-col w-full px-6 mt-20 mb-5">
                <div className="flex flex-row justify-between gap-3 w-full pl-8 pr-2">
                    <p className="text-xs w-1/4 text-nowrap overflow-hidden text-ellipsis">DATE</p>
                    <p className="text-xs w-1/4 text-nowrap overflow-hidden text-ellipsis">DESCRIPTION</p>
                    <p className="text-xs w-1/6 text-nowrap overflow-hidden text-ellipsis">AMOUNT</p>
                    <p className="text-xs w-1/6 text-nowrap overflow-hidden text-ellipsis">BALANCE</p>
                </div>
                {transactions.map((transaction, index) => {
                    return <Collapse key={index} transaction={transaction}></Collapse>
                })}
            </section>
        </main>
        </>
    )
}

export default Transactions;