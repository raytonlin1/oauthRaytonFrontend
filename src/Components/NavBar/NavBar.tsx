import React,{useContext} from 'react';
import styles from './NavBar.module.css';
import {Link} from 'react-router-dom';
import axios,{AxiosResponse} from 'axios';
import {myContext} from '../../Context';
import {IUser} from '../../types/maintypes';

function Loginpage() {
  const userObject = useContext(myContext) as IUser;
const logout = () => {
  axios.get("http://localhost:4000/auth/logout", {
    withCredentials: true,
  }).then((res:AxiosResponse)=>{
    if (res.data === "done") {
      window.location.href = "/";

    }
  })
}

  return (
    <div className={styles.navBarWrapper}>
        <ul className={styles.navBar}>
            <li><Link to='/'>Home</Link></li>
            {userObject ? null : <li><Link to='/login'>Login</Link></li>}
            {userObject ? <li onClick={logout}>Logout</li> : null}
        </ul>
    </div>
  );
}

export default Loginpage;
