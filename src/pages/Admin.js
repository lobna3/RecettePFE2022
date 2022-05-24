import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import RowDetails from '../component/RowDetails'
//import { GetProfiles } from '../redux/actions/profileActions'

function Admin() {
  
  const profiles = useSelector(state => state.profiles)
  const dispatch  = useDispatch()
  /*useEffect(async()=>{
    await dispatch(GetProfiles())
  },[])
   */
  
  return (
    
     
      <div className="container p-4 mt-4">
        <div className="row justify-content-evenly mt-4">
           
           <div className="col-lg-6 col-md-6 mt-4">
               <div className="d-flex">
                <i className="fa-solid fa-user fs-1 mx-2"></i> <h2>Profiles list</h2>
               </div>
               <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor: "white"}}>
                <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">nom</th>
                        <th scope="col">email</th>
                        <th scope="col">role</th>
                        <th scope="col">telephone</th>
                        <th scope="col">city</th>
                        <th scope="col">country</th>
                        <th scope="col">bio</th>
                        <th scope="col">actions</th>
                      </tr>
                    </thead>
                    {/*  <tbody>
                      {
                        profiles.profiles.map(({_id, user, tel, city, country, bio})=>(
                           <RowDetails _id={_id} user={user} tel={tel} city={city} country={country} bio={bio} />
                        ))
                      }
                      
                    </tbody> */}
                  
                  </table>
            </div>
           </div>
       </div>
   </div>
   
  )
}

export default Admin