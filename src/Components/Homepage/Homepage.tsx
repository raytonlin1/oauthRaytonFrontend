import React, {useContext} from 'react';
import {myContext} from '../../Context'
import {IUser} from '../../types/maintypes';

function Homepage() {
  const context = useContext(myContext) as IUser;
  return (
    <div>
        {context ? <h1> Welcome back to Rayton Lin's OAuth app, {context.username}</h1> : <h1>You are not logged in to Rayton Lin's Oauth app.</h1>}
    </div>
  );
}

export default Homepage;
