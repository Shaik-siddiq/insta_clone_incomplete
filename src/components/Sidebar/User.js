import React,{memo} from 'react'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const User = ({username, fullname}) => 
    !username || !fullname ?(
        <Skeleton count={1} height={61} />
    ) :(
        <>
       <Link to={`/p/${username}`} className="grid grid-cols-4 gap-4 mb-4 items-center">
        <div className='flex items-center justify-between col-span-1'>
            <img 
             className="rounded-full h-8 w-8 flex"
                   src={`/images/avatars/${username}.jpg`}
                   alt={`sid profile`}
            />
        </div>
    <div className="col-span-3">
        <p className='font-bold text-sm'>{username}</p>
        <p className='font-bold text-sm'>{fullname}</p>
    </div>
    </Link> 
    </>
  
)

export default memo(User)
User.propTypes = {
   username: PropTypes.string,
   fullname: PropTypes.string,
}
