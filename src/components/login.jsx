import axios from 'axios';
import { createContext, useState, useEffect } from "react";
import { Button,Nav} from "react-bootstrap";
import Nav_bar from './navbar';
import data from './data.json'


export const navdataContext = createContext();

export default function Login() {
    
    let [name, setName] = useState("");
    let [pass, setPass] = useState("");
    let [product, setProducts] = useState([]);
    let [navdata,setNavData]=useState("hi") 
console.log(data.data.name)
    useEffect(() => {
        async function axiosProd() {
            try {
                const response = await axios.get('https://bank-server-hvtc.onrender.com/data');
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        axiosProd();
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        product.forEach((item) => {
            
            if (name === "hi" && pass === "hi") {

                setNavData("hi")
                // setNavData({
                //     Deposit: <Nav.Link href="#deposit">Deposit</Nav.Link>,
                //     CashBack: <Nav.Link href="#cashback">Cash Back</Nav.Link>,
                //     AllData: <Nav.Link href="#alldata">All Data</Nav.Link>
                // });
                console.log("Admin");
            } else if (name === item.name && pass === item.password) {
                console.log("members");
            } else {
                console.log("User not found");
            }
        });
        console.log(navdata);
    }

    return (
        <>
            {/* <navdataContext.Provider value={navdata}> 
                <Nav_bar/>
            </navdataContext.Provider> */}
            <div id='reg'>
                <form onSubmit={handleSubmit}>
                    <h1>Log in</h1>
                    <input 
                        type="text" 
                        placeholder='Name' 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br /><br />
                    <input 
                        type="password" 
                        placeholder='Password' 
                        value={pass} 
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <br /><br />
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </>
    );
}
