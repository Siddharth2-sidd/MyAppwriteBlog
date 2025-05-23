import React,{useState, useEffect} from 'react';
import {Container} from '../index';
import {PostCard} from '../index';
import services from '../../appwrite/config';

export default function AllPost(){
    const[post, SetPost] = useState([]);
    
    services.getPosts([]).then((post)=>{
            if(post){
                SetPost(post.documents);
            }
    })
    return(
        <div className='w-full py-8'>
            <Container >
                <div className='flex flex-wrap'>
                     {post.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
                </div>
            </Container>
        </div>
    )
}
