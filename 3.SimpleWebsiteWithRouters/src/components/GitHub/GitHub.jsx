import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function GitHub() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/thetechmonkin')
    //     .then( res => res.json())
    //     .then( data => setData(data))
    // }, []);
  return (
    <div className='text-center bg-gray-600 text-white text-3xl m-4 p-4'>GitHub Followers: {data.followers}
    <img src={data.avatar_url} alt="github profile pic" height={300} />
    </div>
  )
}

export default GitHub;

export const githubInfoLoader = async () => {
    const response = await  fetch('https://api.github.com/users/thetechmonkin');
    return response.json();
}