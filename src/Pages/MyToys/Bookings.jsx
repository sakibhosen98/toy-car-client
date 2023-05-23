import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const {user} = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);


  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setBookings(data))
  },[])
console.log(bookings)
  return (
    <div>
      <h3 className="text-5xl font-bold text-center my-8">My Toys</h3>
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Picture</th>
        <th>Seller Name</th>
        <th>Seller Email</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
     {
      bookings.map(booking => <BookingRow
        key={booking._id}
        booking={booking}
      ></BookingRow>)
     }
      
    </tbody>
    
  </table>
</div>
    </div>
  )
};


export default Bookings;
