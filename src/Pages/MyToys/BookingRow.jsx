
const BookingRow = ({booking}) => {
  const {sellerName,email,picture,description,availbleQuantity,price} = booking
  console.log(booking)
  return (
    <tr>
    <th>
      <label>
        <input type="checkbox" className="checkbox" />
      </label>
    </th>
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="rounded w-12 h-12">
            {picture && <img src={picture} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </div>
    </td>
    <td>
    {sellerName}
     
    </td>
    <td>{email}</td>
    <td>{price}</td>
    <td>{availbleQuantity}</td>
    <td>{description}</td>
    <th>
      <button className="btn btn-secondery btn-xs">Update</button>
    </th>
    <th>
      <button className="btn btn-secondery btn-xs">Deleted</button>
    </th>
  </tr>
  );
};

export default BookingRow;