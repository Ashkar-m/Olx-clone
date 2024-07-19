import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import Upload from '../../upload.jpg';
import { AuthContext } from '../../contexts/firebaseContext';
import Firebase, { auth } from '../../firebase/config';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name,setName]=useState('');
  const [category,setCategory] =useState('');
  const [price,setPrice]=useState('')
  
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const {user}=useContext(AuthContext);
  const firestore = getFirestore(Firebase);
  const storage=getStorage(Firebase)

  const navigate=useNavigate('')

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageFile(file);
      setImageUrl(url);
    }
  };
  
  const handleSubmit = async () => {
    const date = new Date();
    try {
      const storageRef = ref(storage, `/image/${imageFile.name}`);
      const snapshot = await uploadBytes(storageRef, imageFile);
      const url = await getDownloadURL(snapshot.ref);
      await addDoc(collection(firestore, 'products'), {
        name,
        category,
        price,
        url,
        userId: auth.currentUser.uid,
        createdAt: date.toDateString(),
      });
  
      alert('File uploaded and data added successfully!');
      navigate('/')
    } catch (error) {
      console.error('Error uploading file and adding data:', error);
      alert('Error uploading file and adding data:', error.message);
    }
  };
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price}
              onChange={(e)=>setPrice(e.target.value)} />
            <br />
          
          <br />
          {imageUrl && <img width="200px" height="200px" src={imageUrl} alt="Uploaded" />}
          
            <br />
            <input type="file" accept='image/*' 
              onChange={handleImageChange} />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
