import {useState} from 'react'
import axios from 'axios'

export default function Addproduct() {
  const [Image,setImage]=useState('');
  const formData = new FormData()
  formData.append('image',Image)
     async function createImages(e) {
       e.preventDefault();
       try {
         axios.post('http://localhost:5000/productData/images',formData,{
          headers: {
            "Content-Type": "multipart/form-data"
          },
         }).then((res)=> console.log(res.data))
        
       } catch (error) {
        console.log({error:error.message})
       }
     }
     console.log(Image)
  return (
    <section>
      <h1>Add product</h1>
      <form className='form-data' onSubmit={createImages} encType="multipart/form-data">
      <input type="file" name="image" onChange={(e)=> setImage(e.target.files[0])}/>
      <button>Submit</button>
      </form>
    </section>
  );
}
