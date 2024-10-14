import getAllUser from '@/lib/getAllUser'
import React from 'react'

const User = async() => {
    const data:Promise<User[]>= getAllUser();
    const alluserdata=await data
  return (
    <div className='user-data'>
      {
        alluserdata.map((item,index)=>{
            return(
                <>
                    <ul>
                        <li key={index}>{item.id} --- {item.username}</li>
                    </ul>
                </>
            )
        })
      }
    </div>
  )
}

export default User
