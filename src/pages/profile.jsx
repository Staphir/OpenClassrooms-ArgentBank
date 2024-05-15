import { Helmet } from "react-helmet-async";
import Account from "../components/account";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../selectors";
import { useState } from "react";
import { editName } from "../services";
import { setUser } from "../store";

function Profile() {
    const userSelector = useSelector(getUser);
    const dispatch = useDispatch();
    const [onEditName, setOnEditName] = useState(false)
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: ''
    });
    
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
    
    function handleInputChange(e){
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
          });
    }

    function saveEditName(e) {
        e.preventDefault();
        editName(formData);
        dispatch(setUser(formData));
        setOnEditName(false);
    }

    function cancelEditName(e) {
        e.preventDefault();
        toggleEditName();
    }

    function toggleEditName() {
        setOnEditName(!onEditName);
    }

    return(
        <>
        <Helmet>
            <title>Argent Bank - Profile</title>
        </Helmet>
        <main className="bg-[#12002b] flex flex-col items-center">
            <div className="text-white mb-8">        
                {onEditName === false ?
                    (
                    <>
                    <h1 className="text-3xl font-bold my-5">
                        Welcome back
                        <br/>
                        {userSelector.firstname} {userSelector.lastname} !
                    </h1>
                    <button className="bg-[#00bc77] text-white font-bold p-2" onClick={toggleEditName}>Edit Name</button>
                    </>
                    ) : (
                    <>
                    <h1 className="text-3xl font-bold my-5">Welcome back</h1>
                    <form className="flex justify-between flex-col gap-4" onSubmit={saveEditName}>
                        <div className="flex justify-center">
                            <label className='font-bold' htmlFor='firstname'></label>
                            <input required className='w-full mx-3 text-xl text-[#ccc] p-1 ring-1 rounded-sm ring-[#ccc]' type='text' id='firstname' name='firstname' defaultValue={userSelector.firstname} onChange={handleInputChange}/>
                            <label className='font-bold' htmlFor='lastname'></label>
                            <input required className='w-full mx-3 text-xl text-[#ccc] p-1 ring-1 rounded-sm ring-[#ccc]' type='text' id='lastname' name='lastname' defaultValue={userSelector.lastname} onChange={handleInputChange}/>
                        </div>
                        <div className="flex justify-center gap-6">
                            <button className="bg-white text-[#00bc77] font-bold p-2 w-24 tablet:w-36 desktop:w-44 border border-[#00bc77] rounded-sm" type="submit">Save</button>
                            <button className="bg-white text-[#00bc77] font-bold p-2 w-24 tablet:w-36 desktop:w-44 border border-[#00bc77] rounded-sm" onClick={cancelEditName}>Cancel</button>
                        </div>
                    </form>
                    </>
                    )}
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