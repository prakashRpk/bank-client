import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

export default function Alldata() {
  let [data, setData] = useState([]);
  let [editId, setEditId] = useState(null);
  let [formData, setFormData] = useState({ name: "", email: "", password: "", amount: "" });


  useEffect(() => {
    async function axiosProd() {
        try {
            const response = await axios.get('https://bank-server-hvtc.onrender.com/data');
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    axiosProd();
}, []);

  async function handleDelete(id) {
    try {
      await axios.delete(`https://bank-server-hvtc.onrender.com/delete/${id}`);
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting:", error);
    }
  }

  function handleEdit(item) {
    setEditId(item._id);
    setFormData({userid : item.userid, name: item.name, email: item.email, password: item.password, amount: item.amount });
  }

  async function handleUpdate() {
    try {
      await axios.put(`https://bank-server-hvtc.onrender.com/update/${editId}`, formData);
      setData(data.map((item) => (item._id === editId ? { ...item, ...formData } : item)));
      setEditId(null);
      alert("Updated successfully!");
    } catch (error) {
      console.error("Error updating:", error);
    }
  }

  return (
    <>
      <h1>Alldata</h1>
      <table className="table" >
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Balance</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.amount}</td>
              <td>
                <Button variant="success" onClick={() => handleEdit(item)}>Edit</Button>
                <Button  variant="danger" onClick={() => handleDelete(item._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editId && (
        <div>
          <h2>Edit Data</h2>
          <input  type="text"  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
          <input type="number" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
    </>
  );
}