import React from 'react';

const Posts = ({ dataPosts }) => {
    console.log('Posts:', dataPosts);
    return (
        <div className='px-36'>
            <div className='bg-gray-200 h-20 w-full flex flex-grow items-center rounded-lg'>
                <div className='h-full w-[40%] bg-gray-300 shadow self-start flex items-center rounded-l-lg'>
                    <p className='text-white bg-black flex justify-center items-center h-full w-14 rounded-l-lg text-2xl'>
                        1
                    </p>
                    <p className='w-full text-2xl flex justify-center items-center'>Name Post</p>
                </div>
                <p className='pr-5 flex-grow'></p>
            </div>
        </div>
    );
};

export default Posts;
