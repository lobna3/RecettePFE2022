import React from 'react';
import { useDispatch }  from'react-redux';
import   { login,logout }     from '../features/user';
import  {useParams} from 'react-router-dom';

export default function Login() {

    const {id} = useParams()

    const dispatch = useDispatch();

    return(
        <div>
            
            <button

            onClick={() => dispatch(
                login({
                 email: "lobna@test.com",
                 nom: "test", 
                 prenom: "lobna" , 
                 adresse: "tunisie",
            })
            )
        }
            >se connecter{""} {id}
            </button>
            <button

          onClick={() => dispatch(
              logout({})
              )
                 }    
             >se déonnecter{" "}
            </button>
        </div>
    );
}




