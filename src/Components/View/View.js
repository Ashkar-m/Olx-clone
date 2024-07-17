import React, { useContext, useEffect, useState } from 'react';

import './View.css';
import PostContext, { ViewContext } from '../../contexts/viewContext';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
function View() {
  const [userDetails,setUserDetails]=useState('');
  const{postDetails}=useContext(ViewContext);

  const db=getFirestore();
  useEffect(() => {
    const fetchUserDetails = async () => {
      if (postDetails && postDetails.userId) {
        const { userId } = postDetails;
        const q = query(collection(db, 'users'), where('id', '==', userId));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
          setUserDetails(doc.data());
        });
      }
    };
    fetchUserDetails();
  }, [postDetails, db]);

  console.log(userDetails);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img 
        style={{ width: '800px', height: '600px' }}
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.displayName}</p>
          <p>{userDetails.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
