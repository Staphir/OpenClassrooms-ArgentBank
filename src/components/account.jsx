import { useNavigate } from "react-router";

function Account({account}) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        navigate('/transactions', {state: {account}});
      };

    return(
        <section className="flex flex-col justify-between items-center border border-solid border-black bg-white w-4/5 my-0 mx-auto p-6 box-border text-left mb-8 tablet:flex-row">
            <div className="w-full flex-1">
                <h3 className="m-0 p-0 text-base font-normal">
                    {account.title}
                </h3>
                <p className="m-0 text-4xl font-bold">
                    {account.amount}
                </p>
                <p className="m-0">
                    {account.description}
                </p>
            </div>
            <div className="w-full flex-1 tablet:flex-grow-0">
                <button className="block w-full p-2 text-lg font-bold mt-4 bg-[#00bc77] text-white  tablet:w-48" onClick={handleClick}>View transactions</button>
            </div>
        </section>
    )
}

export default Account;