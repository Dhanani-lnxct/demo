import React, { useState } from "react";
import ImageUploading from 'react-images-uploading';
import '../css/image.css'


function Tests() {
    const [images, setImages] = useState([]);
    const maxNumber = 69;
   
    const onchange = (imageList, addUpdateIndex) => {

        console.log(imageList,addUpdateIndex);
        setImages(imageList);
    }
    return (
        <>
       
            <div className=' container mt-2 mx-4 my-4 ' >
                <div className="border p-5 "  >

                    <div className=" mx-2 my-2 d-flex"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                            height: '300px'
                        }}
                    >


                        <div className=" col-xs-4 text-success h6 mx-4 my-2 d-flex">Upload Video</div>
                        <div className=' col col-xs-4 mx-4  '>
                            <ImageUploading
                                multiple
                                value={images}
                                onChange={onchange}
                                maxNumber={maxNumber}
                                dataURLKey="data_url"
                            >
                                {({
                                    imageList,
                                    onImageUpload,                             
                                    onImageRemoveAll,
                                    onImageUpdate,
                                    onImageRemove,
                                    isDragging,
                                    dragProps,
                                }) => (

                                    <div className="upload__image-wrapper">

                                        <button type="button" className="btn  w-20 border btn rounded-pill text-black " style={{ background: "#E6E6E9" }}
                                            onClick={onImageUpload}
                                            {...dragProps}
                                        >
                                        Choose

                                        </button>


                                        {imageList.map((image, index) => (
                                            <div key={index} className="image-item">
                                                <img src={image['data_url']} alt="" />

                                            </div>
                                        ))}
                                    </div>
                                )}
                            </ImageUploading>
                        </div>
                        <div className="col col-xs-4 mx-4 ">
                            <button type="button" className="btn  w-20 border btn rounded-pill  text-black  " style={{ background: "#E6E6E9" }}>upload</button>

                        </div>


                    </div>
                   

                </div>

            </div>

        </>

    )
}

export default Tests;