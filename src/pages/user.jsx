import React, { useEffect, useRef } from "react";


import '../css/image.css'



function Test() {
    let videoRef = useRef(null);

    let photoRef = useRef(null)

   const getVideo= () => {
        navigator.mediaDevices
            .getUserMedia({
                video: true
            })
            .then((stream) =>{
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const takePicture = () => {
        const width = 400
        const height = width / (16 / 9)

        let video = videoRef.current

        let photo = photoRef.current

        photo.width = width

        photo.height = height

        let ctx = photo.getContext('2d')

        ctx.drawImage(video, 0, 0, width, height)

    }

    const clearImage = () => {
        let photo = photoRef.current

        let ctx = photo.getContext('2d')
        ctx.clearImage(0,0, photo.width, photo.height)
    }
   
  
    useEffect(() =>{
        getVideo();
    }, [videoRef]);
      

    
    
     
  


    return (
        <>
            <div className=' container mt-2 mx-4 my-2 ' >
                <div className="border p-5 "  >

                    <div className=" mx-2 my-2 d-flex"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                            height: '100vh'
                        }}
                    >


                        <div className=" col-xs-4 text-primary h6 mx-4 my-2 d-flex">Upload doc</div>
                        <div className=' col col-xs-4 mx-4  '>
                            {/* <h1 className="text-center">Camera Selfie App in React</h1> */}

                            <video ref={videoRef} className="conatiner"></video>

                            <button onClick={takePicture} className="btn btn-danger container">Take Picture</button>

                            <canvas  className="container" ref={photoRef}></canvas>

                            <button onClick={clearImage} className="btn btn-primary container">Capture camera</button>

                            <br /><br />

                        </div>
                        <div className="col col-xs-4 mx-4 ">
                            <button type="button" className="btn  w-20 border btn rounded-pill text-black  " style={{ background: "#E6E6E9" }}>upload</button>

                        </div>


                    </div>
                    <div className="position-relative">
                        <div className="position-absolute  end-0">
                            {/* <NavLink to="/demo" > */}
                            <button type="button" className="btn  w-20 border btn rounded-pill text-white" id="btnb"  >
                                Next &rarr;
                            </button>
                            {/* </NavLink> */}
                        </div>
                    </div>

                </div>

            </div>

        </>

    )
}
export default Test;  