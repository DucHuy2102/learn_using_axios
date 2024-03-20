const cssLiTag = 'text-center italic text-lg';

const ModalUser = ({ isOpen, onClose, dataModal }) => {
    if (!isOpen) return null;

    return (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-600 bg-opacity-50'>
            <div className='bg-white w-[30rem] h-[30rem] rounded-lg flex'>
                {/* avatar user */}
                <div className='w-[50%] h-full'>
                    <img src={dataModal.avatar} alt='avatar' className='h-full w-full object-cover rounded-t-lg' />
                </div>

                {/* infomation */}
                <div className='w-[50%] flex flex-col items-center relative'>
                    <div className='w-full px-2 py-5 flex-grow'>
                        <h1 className='font-bold text-xl text-center'>Infomation Detail</h1>
                        <div className='border border-b-1'></div>
                        <div className='mt-2 pt-3'>
                            <ul>
                                <li className='font-bold'>Full Name:</li>
                                <li className={cssLiTag}>{dataModal.name}</li>
                            </ul>
                            <ul>
                                <li className='font-bold'>Email:</li>
                                <li className={cssLiTag}>{dataModal.email}</li>
                            </ul>
                            <ul>
                                <li className='font-bold'>Number Phone:</li>
                                <li className={cssLiTag}>{dataModal.phone}</li>
                            </ul>
                            <ul>
                                <li className='font-bold'>Address:</li>
                                <li className={cssLiTag}>{dataModal.address.city}</li>
                            </ul>
                            <ul>
                                <li className='font-bold'>Website:</li>
                                <li className={cssLiTag}>
                                    {dataModal.website.substring(0, dataModal.website.indexOf(' x'))}
                                </li>
                            </ul>
                            <ul>
                                <li className='font-bold'>Job:</li>
                                <li className={cssLiTag}>Job to do</li>
                            </ul>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className='w-full h-12 text-lg bg-gray-500 hover:text-xl text-white hover:bg-black hover:text-white'
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalUser;
