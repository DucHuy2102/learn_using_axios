import { Fragment, useState } from 'react';
import { ModalUser } from './index';
import { images } from '../utils/randomImage';

const Users = ({ dataUsers }) => {
    const [savedUser, setSavedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleToggleModal = (user, avatar) => {
        user.avatar = avatar;
        setSavedUser(user);
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='flex justify-center'>
            <div className='grid grid-cols-4 gap-8'>
                {dataUsers.map((data) => {
                    const avatar = images.find((item) => item.id === data.id)?.url || images[0].url;
                    return (
                        <div key={data.id} className='bg-white border shadow-md rounded-lg h-56 w-52 flex flex-col'>
                            {/* avatar user */}
                            <div className='h-[70%]'>
                                <img src={avatar} alt='avatar' className='h-full w-full object-cover rounded-t-lg' />
                            </div>

                            {/* name & button view info user */}
                            <div className='h-[30%] flex flex-col justify-center items-center relative'>
                                <button
                                    onClick={() => handleToggleModal(data, avatar)}
                                    className='absolute bottom-0 top-0 w-full text-lg text-white bg-black bg-opacity-75 hover:bg-gray-300 hover:text-black rounded-b-lg transition-colors duration-300 ease-in-out'
                                >
                                    {data.name}
                                </button>
                            </div>
                        </div>
                    );
                })}
                <ModalUser isOpen={isModalOpen} onClose={handleToggleModal} dataModal={savedUser} />
            </div>
        </div>
    );
};
export default Users;
