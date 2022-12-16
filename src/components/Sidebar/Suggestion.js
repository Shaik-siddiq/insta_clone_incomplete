import React,{useState, useEffect} from 'react'
import PropTypes from "prop-types";
import Skeleton from 'react-loading-skeleton';
import { getSuggestedProfiles } from '../../services/UserExists';

const Suggestion = ({userId}) => {
    const [profiles, setProfiles] = useState(null)
  useEffect(()=>{
    async function sugggestedProfiles(){
        const response = await getSuggestedProfiles(userId)
        setProfiles(response);
    }
    console.log("userId", userId)
    if(userId){
        sugggestedProfiles()
    }
  },[])
  return !profiles? (
    <Skeleton count={1} height={150} className="mt-5" />
   ) : profiles.length > 0 ? (
        <div className='rounded flex flex-col'>
            <div className='text-sm flex items-center alig-items justify-between mb-2'>
                <p className='font-bol text-gray-base'> suggesions for u</p>
            </div>
        </div>
    ): null
}

export default Suggestion