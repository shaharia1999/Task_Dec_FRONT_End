import React, { useEffect, useState } from 'react';
import './Home.css'
import { FaDatabase } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { MdAttachFile } from "react-icons/md";
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState(null)
    const [file, setFile] = useState(null);
    const [id,setId]=useState(null)
    // const [reload, setReload] = useState(false);

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
      document.getElementById('my_modal_1').showModal()
    };
    const handleFileUpload = async () => {
        if (file) {
          try {
            const formData = new FormData();
            formData.append('file', file);
    
            // Make a POST request using Axios
            const response = await axios.put(`https://nodefile-up-odev.onrender.com/comment/${id}`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
             window.location.reload();
            
            setFile(null);
            document.getElementById('my_modal_1').showModal()
            // console.log(document.getElementById('my_modal_1').showModal())
          } catch (error) {
            console.error('Error uploading file:', error.message);
          }
        } else {
          alert('No file selected');
        }
      };
    
    useEffect(() => {
        axios.get('https://nodefile-up-odev.onrender.com/comments').then((res) => {
            setData(res.data)
            // console.log(res)
            
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    const Comments=(id)=>{
        setId(id)
        document.getElementById('my_modal_1').showModal()
    }
    return (
        <div className='home'>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
          
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Upload a File</h3>
                    {/* <p className="py-4"></p> */}
                    <input placeholder='png/jpeg.pdf' type="file"  className='border border-2'
                    onChange={handleFileChange}/>
                    <button onClick={handleFileUpload} className='bg-green-500 text-white'>Upload</button>
                    {/* <button className='btn bg-green-500 text-white'>upload</button> */}
                    <div className="modal-action">
                       
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <div className='cards bg-white shadow-md'>
                <article className='card px-2'>
                    <div className='flex justify-between px-2  py-2 bg-[#F2F4F7]'>
                        <div className='flex justify-center items-center '>
                            <p className='incom'></p>
                            <p className='font-semibold ml-1'>Incomplete</p>
                        </div>
                        <p>0</p>
                    </div>
                    {
                        !data && <h1 className='text-2xl text-center mt-2'>Loading....</h1>
                    }
                    {
                        data && data.map((item, index) => {
                            return (
                                <main className='text-[14px] mt-2 bg-white rounded-sm' key={index}>
                                    <div className='flex justify-between px-2 mt-3 py-3'>
                                        <div className='flex  items-center'>
                                            <img src={item.Imag} alt='img' className='w-5 h-5 rounded-full mr-1' />
                                            <p className='text-[14px] font-medium'>{item.FirstName}</p>
                                        </div>
                                        <div className='flex  items-center'>
                                            <img src={item.Imag2} alt='img' className='w-5 h-5 rounded-full mr-1' />
                                            <p className='text-[14px] font-medium'>{item.LastName}</p>
                                        </div>

                                    </div>
                                    <div className='flex justify-between px-2 py-2'>
                                        <div className='flex items-center'>
                                            <FaDatabase className='mr-1' />
                                            <p>Lorem Ipsum is simply </p>
                                        </div>
                                        <div className='flex items-center'>
                                            <FaCalendarAlt className='mr-1' />
                                            <p>1/2</p>
                                        </div>

                                    </div>
                                    <div className='flex justify-between px-2 py-2'>
                                        <div> <img src={item.Imag} alt='img' className='w-5 h-5 rounded-full' /></div>
                                        <div> <img src={item.Imag2} alt='img' className='w-5 h-5 rounded-full' /></div>
                                        <div><p>12 +</p></div>
                                        <div className='flex gap-1 items-center'><TiMessages /><p>15</p></div>
                                        <div className='flex gap-1 items-center cursor-pointer'onClick={()=>Comments(item._id)}><MdAttachFile />
                                            <p>{item.data.length}</p></div>
                                        <div className='flex gap-1 items-center'><FaCalendarAlt />
                                            <p>30-12-22</p></div>

                                    </div>
                                </main>

                            )
                        })
                    }
                </article>
                <article className='card px-2'>
                    <div className='flex justify-between px-2  py-2 bg-[#F2F4F7]'>
                        <div className='flex justify-center items-center '>
                            <p className='incom1'></p>
                            <p className='font-semibold ml-1'>Doing</p>
                        </div>
                        <p>0</p>
                    </div>
                    {
                        !data && <h1 className='text-2xl text-center mt-2'>Loading....</h1>
                    }
                    {
                        data && data.map((item, index) => {
                            return (
                                <main className='text-[14px] mt-2 bg-white rounded-sm' key={index}>
                                    <div className='flex justify-between px-2 mt-3 py-3'>
                                        <div className='flex  items-center'>
                                            <img src={item.Imag} alt='img' className='w-5 h-5 rounded-full mr-1' />
                                            <p className='text-[14px] font-medium'>{item.FirstName}</p>
                                        </div>
                                        <div className='flex  items-center'>
                                            <img src={item.Imag2} alt='img' className='w-5 h-5 rounded-full mr-1' />
                                            <p className='text-[14px] font-medium'>{item.LastName}</p>
                                        </div>

                                    </div>
                                    <div className='flex justify-between px-2 py-2'>
                                        <div className='flex items-center'>
                                            <FaDatabase className='mr-1' />
                                            <p>Lorem Ipsum is simply </p>
                                        </div>
                                        <div className='flex items-center'>
                                            <FaCalendarAlt className='mr-1' />
                                            <p>1/2</p>
                                        </div>

                                    </div>
                                    <div className='flex justify-between px-2 py-2'>
                                        <div> <img src={item.Imag} alt='img' className='w-5 h-5 rounded-full' /></div>
                                        <div> <img src={item.Imag2} alt='img' className='w-5 h-5 rounded-full' /></div>
                                        <div><p>12 +</p></div>
                                        <div className='flex gap-1 items-center'><TiMessages /><p>15</p></div>
                                        <div className='flex gap-1 items-center cursor-pointer'onClick={()=>Comments(item._id)}><MdAttachFile />
                                            <p>{item.data.length}</p></div>
                                        <div className='flex gap-1 items-center'><FaCalendarAlt />
                                            <p>30-12-22</p></div>

                                    </div>
                                </main>

                            )
                        })
                    }
                </article>
                <article className='card px-2'>
                    <div className='flex justify-between px-2  py-2 bg-[#F2F4F7]'>
                        <div className='flex justify-center items-center '>
                            <p className='incom2'></p>
                            <p className='font-semibold ml-1'>Reveiw</p>
                        </div>
                        <p>0</p>
                    </div>
                    {
                        !data && <h1 className='text-2xl text-center mt-2'>Loading....</h1>
                    }
                    {
                        data && data.map((item, index) => {
                            return (
                                <main className='text-[14px] mt-2 bg-white rounded-sm' key={index}>
                                    <div className='flex justify-between px-2 mt-3 py-3'>
                                        <div className='flex  items-center'>
                                            <img src={item.Imag} alt='img' className='w-5 h-5 rounded-full mr-1' />
                                            <p className='text-[14px] font-medium'>{item.FirstName}</p>
                                        </div>
                                        <div className='flex  items-center'>
                                            <img src={item.Imag2} alt='img' className='w-5 h-5 rounded-full mr-1' />
                                            <p className='text-[14px] font-medium'>{item.LastName}</p>
                                        </div>

                                    </div>
                                    <div className='flex justify-between px-2 py-2'>
                                        <div className='flex items-center'>
                                            <FaDatabase className='mr-1' />
                                            <p>Lorem Ipsum is simply </p>
                                        </div>
                                        <div className='flex items-center'>
                                            <FaCalendarAlt className='mr-1' />
                                            <p>1/2</p>
                                        </div>

                                    </div>
                                    <div className='flex justify-between px-2 py-2'>
                                        <div> <img src={item.Imag} alt='img' className='w-5 h-5 rounded-full' /></div>
                                        <div> <img src={item.Imag2} alt='img' className='w-5 h-5 rounded-full' /></div>
                                        <div><p>12 +</p></div>
                                        <div className='flex gap-1 items-center'><TiMessages /><p>15</p></div>
                                        <div className='flex gap-1 items-center cursor-pointer'onClick={()=>Comments(item._id)}><MdAttachFile />
                                            <p>{item.data.length}</p></div>
                                        <div className='flex gap-1 items-center'><FaCalendarAlt />
                                            <p>30-12-22</p></div>

                                    </div>
                                </main>

                            )
                        })
                    }
                </article>
                <article className='card px-2'>
                    <div className='flex justify-between px-2  py-2 bg-[#F2F4F7]'>
                        <div className='flex justify-center items-center '>
                            <p className='incom3'></p>
                            <p className='font-semibold ml-1'>Complete</p>
                        </div>
                        <p>0</p>
                    </div>
                    {
                        data && data.map((item, index) => {
                            return (
                                <main className='text-[14px] mt-2 bg-white rounded-sm' key={index}>
                                    <div className='flex justify-between px-2 mt-3 py-3'>
                                        <div className='flex  items-center'>
                                            <img src={item.Imag} alt='img' className='w-5 h-5 rounded-full mr-1' />
                                            <p className='text-[14px] font-medium'>{item.FirstName}</p>
                                        </div>
                                        <div className='flex  items-center'>
                                            <img src={item.Imag2} alt='img' className='w-5 h-5 rounded-full mr-1' />
                                            <p className='text-[14px] font-medium'>{item.LastName}</p>
                                        </div>

                                    </div>
                                    <div className='flex justify-between px-2 py-2'>
                                        <div className='flex items-center'>
                                            <FaDatabase className='mr-1' />
                                            <p>Lorem Ipsum is simply </p>
                                        </div>
                                        <div className='flex items-center'>
                                            <FaCalendarAlt className='mr-1' />
                                            <p>1/2</p>
                                        </div>

                                    </div>
                                    <div className='flex justify-between px-2 py-2'>
                                        <div> <img src={item.Imag} alt='img' className='w-5 h-5 rounded-full' /></div>
                                        <div> <img src={item.Imag2} alt='img' className='w-5 h-5 rounded-full' /></div>
                                        <div><p>12 +</p></div>
                                        <div className='flex gap-1 items-center'><TiMessages /><p>15</p></div>
                                        <div className='flex gap-1 items-center cursor-pointer'onClick={()=>Comments(item._id)}><MdAttachFile />
                                            <p>{item.data.length}</p></div>
                                        <div className='flex gap-1 items-center'><FaCalendarAlt />
                                            <p>30-12-22</p></div>

                                    </div>
                                </main>

                            )
                        })
                    }
                </article>
                {/* <article className='card'></article>
                <article className='card'></article>
                <article className='card'></article>
                <article className='card'></article>
                <article className='card'></article>
                <article className='card'></article> */}

            </div>

        </div>
    );
};

export default Home;
