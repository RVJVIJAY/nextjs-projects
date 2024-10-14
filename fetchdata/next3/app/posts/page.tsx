import getAllPost from '@/lib/getAllPost'
import Link from 'next/link';
import React from 'react'

const page = async() => {
    const postdata:Promise<Post[]>=getAllPost();
    const data=await postdata;
  return (
    <div className='post-container'>
      {data.slice(0,10).map((item)=>{
        return (
            <div key={item.id} className='post-list'>
                <ul >
                    <Link href={`/posts/${item.id}`} prefetch={true}><li>{item.id}</li></Link> 
                    <li>{item.title}</li>
                </ul>
            </div>
        )
      })}
    </div>
  )
}

export default page
