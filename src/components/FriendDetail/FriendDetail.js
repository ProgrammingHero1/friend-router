import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    }, [])
    return (
        <div>
            <p>This is Friend Detail Component: {friendId}</p>
            <h3>{friend.name}</h3>
            <p>email: {friend.email}</p>
            <p>phone: {friend.phone}</p>
            <p>website: {friend.website}</p>
        </div>
    );
};

export default FriendDetail;