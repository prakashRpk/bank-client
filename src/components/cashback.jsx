import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Deposit() {
    let [dep, setDep] = useState(0);
    let [bal, setBal] = useState(0);
    let [product, setProducts] = useState([]);

    useEffect(() => {
        async function axiosProd() {
            try {
                const response = await axios.get('https://bank-server-hvtc.onrender.com/data');
                setProducts(response.data);
                if (response.data[1]) {
                    setBal(response.data[1].amount); // Set initial balance
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        axiosProd();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        let deposit = Number(dep);
        let updatedBalance = Number(bal) - deposit;
        setBal(updatedBalance);

        try {
            await axios.put(`https://bank-server-hvtc.onrender.com/update/${product[1]._id}`, {
                amount: updatedBalance
            });
            alert("Updated successfully!");
        } catch (error) {
            console.error("Error updating:", error);
        }
    }

    return (
        <>
            <div id='Trans'>
                <h1>Cashback</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Amount :</label><br />
                    <input type="number" onChange={(e) => setDep(e.target.value)} placeholder='RS: Amount' /> <br /><br />
                    <button type="submit">Submit</button>
                </form>
                <h2>Balance : {bal} </h2>
            </div>
        </>
    );
}
