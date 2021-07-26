import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AxiosResponse } from 'axios';

export const myContext = createContext({}); //Like Redux, global state
function Context(props: any) {
    const [userObject, setUserObject] = useState<any>();
    useEffect(()=>{ //withCredentials makes sure the server knows the cookies in the browser
        axios.get("https://oauthraytonbackend.herokuapp.com/getuser", {withCredentials: true }).then((res: AxiosResponse) => {
            if (res.data) {
                console.log(res);
                setUserObject(res.data);
            }
        })
    },[])
  return (
    <div>
        <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
    </div>
  );
}

export default Context;
