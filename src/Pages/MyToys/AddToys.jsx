import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddToys = () => {
  const service = useLoaderData();

  // console.log(service)
  const {name} = service;

  const {user} = useContext(AuthContext);

  const handleAddToys = event => {
      event.preventDefault();

      const form = event.target;
      const name = form.name.value;
      const email = user?.email;
      const price = form.price.value;
      const quantity = form.quantity.value;
      const description = form.description.value;
      console.log(name, email, price, quantity, description)
      const booking = {
        seller: name,
        email,
        price: price,
        availbleQuantity: quantity,
        description: description
      }
      console.log(booking);

      fetch('https://toy-car-server-gamma.vercel.app/bookings', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(booking)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      })

  }

  return (
    <div className="">
      <h2 className="text-center text-3xl"> Check Out : {name} </h2>
      <form onSubmit={handleAddToys} className="w-3/4 mx-auto">
        <div className=" gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" name="price" placeholder="price" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="number" name="quantity"  placeholder="Quantity" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name="description"  placeholder="description" className="input input-bordered" />
        </div>
        
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary btn-block" type="submit" value="AddToys" />
        </div>
      </form>
      <div className="card-body">
       
      </div>
    </div>
  );
};

export default AddToys;