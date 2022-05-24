import React from "react";
import { useDispatch } from "react-redux";
import { DeleteProfile } from "../redux/actions/profileActions";

function RowDetails({_id, user, city, country, bio}) {
   const dispatch =  useDispatch()
    const DeleteHandler = (id)=>{
      dispatch(DeleteProfile(id))
    }
  return (
    <tr>
      <th>{user.nom}</th>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{city}</td>
      <td>{country}</td>
      <td>{bio}</td>
      <td>
        <button class="btn btn-outline-danger" onClick={()=>DeleteHandler(_id)}>Delete</button>
      </td>
    </tr>
  );
}

export default RowDetails;