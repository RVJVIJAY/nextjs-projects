
import getSinglePost from '@/lib/getSinglePost'
import type { Metadata } from 'next'

import React from 'react'
interface Param{
    params:{
        id:number
    }
}
/* export  const  metadata:Metadata={
    title:"singledata"
}
 */
export async function generateMetadata({ params }: Param): Promise<Metadata> {
  const singlepost: Post = await getSinglePost(params.id);
  return {
    title: `post ${singlepost.id}`,  
    description: singlepost.title, 
  };
} //dynamic meta data

const SinglePost = async({params}:Param) => {
    const singlepost:Promise<Post>=getSinglePost(params.id);
    
    const data=await singlepost;
  return (
    <div className='single-post'>
      <ul>
        <li>{data.id}</li>
        <li>{data.title}</li>
        <li>{data.body}</li>
      </ul>
    </div>
  )
}

export default SinglePost
