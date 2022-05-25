import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RowDetails from '../component/RowDetails'
import { GetProfiles } from '../redux/actions/profileActions'

function Admin() {
  
  const profiles = useSelector(state => state.profiles)
  const dispatch  = useDispatch()
  useEffect(()=>{
   dispatch(GetProfiles())
  },[])
   
  
  return (
    
     
      <div className="container mt-4" style={{marginBottom:300}}>
        <div className="row justify-content-evenly mt-4">
           
           <div className="col-lg-8 col-md-12 mt-4">
               <div className="d-flex">
                <i className="fa-solid fa-user fs-1 mx-2"></i> <h2>Profiles list</h2>
               </div>
               <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor: "white"}}>
                <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Nom Prénom</th>
                        <th scope="col">Email</th>
                        <th scope="col">role</th>
                        <th scope="col">Téléphone</th>
                        <th scope="col">City</th>
                        <th scope="col">Country</th>
                        <th scope="col">Bio</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                   <tbody>
                      {
                        profiles.profiles.map(({_id, user, tel, city, country, bio})=>(
                           <RowDetails _id={_id} user={user} tel={tel} city={city} country={country} bio={bio} />
                        ))
                      }
                      
                    </tbody> 
                  
                  </table>
            </div>
           </div>
       </div>
   </div>
   
  )
}

export default Admin