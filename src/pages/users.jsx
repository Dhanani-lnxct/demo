import React from 'react';
import { useReactMediaRecorder, ReactMediaRecorder } from 'react-media-recorder';
import '../css/image.css'



function Tests() {

  const { status, startRecording,stopRecording, mediaBlobUrl} = useReactMediaRecorder({video:true});
    return (
        <>

            <div className=' container mt-2 mx-4 my-4 ' >
                <div className="border p-5">

                    <div className=" mx-2 my-2 d-flex"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                            height: '500px'
                        }}
                    >

                        <div className=" col-xs-4 text-success h6 mx-4 my-2 d-flex">Upload Video</div>
                        <div className=' col col-xs-4 mx-4   '>

                            <p>{status}</p>

                            <button className='mx-4' onClick={startRecording}>Start Video</button>

                            <button className='mx-4' onClick={stopRecording}>Stop Video</button>
                           
                            <video src={mediaBlobUrl} controls autoPlay loop />

                           

                        </div>
                        {/* <ReactMediaRecorder
                            video
                            render={({ status, startRecording, stopRecording,  mediaBlobUrl }) => (
                                <div>
                                    <p>{status}</p>
                                    <button onClick={startRecording}>Start Recording</button>
                                    <button onClick={stopRecording}>Stop Recording</button>
                                    <video src={mediaBlobUrl} controls autoPlay loop />
                                </div>
                            )}
                        /> */}
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