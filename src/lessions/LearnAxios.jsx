import axios from 'axios';
import { useEffect, useState } from 'react';
import { Comments, Posts, Todos, Users } from '../components/index';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const buttonValue = [
    { content: 'Post', path: 'posts' },
    { content: 'Todo', path: 'todos' },
    { content: 'Comment', path: 'comments' },
    { content: 'User', path: 'users' },
];

const LearnAxios = () => {
    const [colorChanged, setColorChanged] = useState('text-black');
    const [searchValue, setSearchValue] = useState('');
    const [dataFromAPI, setDataFromAPI] = useState([]);
    const [error, setError] = useState();
    const [nameComponent, setNameComponent] = useState('');
    // console.log(dataFromAPI);

    // khi nào mở lên cần data mà không cần tương tác thì dùng useEffect, còn không cần thì thôi
    // useEffect(() => {
    //     const getAPI = async () => {
    //         try {
    //             const res = await axios.get(`${BASE_URL}/${searchValue}`);
    //             setDataFromAPI(res.data);
    //         } catch (e) {
    //             setError(e);
    //         }
    //     };
    //     getAPI();
    // }, [searchValue]);

    // change color of Axios title page
    // useEffect(() => {
    //     const timeOut = setTimeout(() => {
    //         setColorChanged(colorChanged === 'text-black' ? 'text-red-500' : 'text-black');
    //     }, 2500);
    //     return () => {
    //         clearTimeout(timeOut);
    //     };
    // }, [colorChanged]);

    // get API
    const handleGetAPI = async (path) => {
        try {
            const res = await axios.get(`${BASE_URL}/${path}`);
            setDataFromAPI(res.data);
        } catch (e) {
            setError(e);
        }
        setSearchValue(path);
    };

    // get input value
    const handleGetButtonValue = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    };

    // clear data
    const handleClearDataAPI = () => {
        setDataFromAPI([]);
        setSearchValue('');
        setNameComponent('');
    };

    return (
        <div className='h-screen w-screen'>
            {/* search */}
            <div className='mt-5 mb-5 flex items-center justify-center '>
                {/* button ...  */}

                {/* title page */}
                <h1 className='italic text-center text-3xl'>
                    Learn using{' '}
                    <span
                        className={`font-bold  transition-colors duration-1000 hover:text-yellow-500 hover:cursor-pointer ${colorChanged}`}
                    >
                        Axios
                    </span>
                </h1>

                {/* button Clear data */}
                <button
                    onClick={handleClearDataAPI}
                    className='bg-black text-white hover:bg-red-600 hover:text-2xl hover:border-none hover:text-white text-xl h-10 w-32 rounded-lg absolute ml-[46rem]'
                >
                    Clear Data
                </button>
            </div>

            {/* search */}
            <form onSubmit={handleGetButtonValue} className='flex justify-center items-center relative'>
                <input
                    autoFocus
                    type='text'
                    placeholder='Search here'
                    className='border border-black text-lg px-5 py-1 rounded-l-lg w-[50%]'
                />
                <button
                    type='submit'
                    className='bg-black text-white border border-black text-lg px-5 py-1 rounded-r-lg'
                >
                    Search
                </button>
            </form>

            {/* selection button */}
            <div className='mt-2 flex items-center gap-x-5 justify-center'>
                {buttonValue.map((item, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => {
                                handleGetAPI(item.path);
                                setNameComponent(item.path);
                            }}
                            className={`h-10 w-32 rounded-lg text-xl hover:text-2xl hover:cursor-pointer border border-black ${
                                item.path === searchValue ? 'bg-black text-white' : ''
                            }`}
                        >
                            {item.content}
                        </button>
                    );
                })}
            </div>

            {/* show API */}
            <div className='mt-5 bg-white'>
                {error && <h1 className='text-red-600 pt-60 font-bold text-center text-5xl'>Something went wrong!</h1>}
                {nameComponent === '' ? (
                    <div className='h-[37rem] pt-52'>
                        <h1 className='text-center text-black font-bold text-5xl py-10'>Please select a component</h1>
                    </div>
                ) : (
                    <>
                        {nameComponent === 'users' && <Users dataUsers={dataFromAPI} />}
                        {nameComponent === 'posts' && <Posts dataPosts={dataFromAPI} />}
                        {nameComponent === 'comments' && <Comments dataComments={dataFromAPI} />}
                        {nameComponent === 'todos' && <Todos dataTodos={dataFromAPI} />}
                    </>
                )}
            </div>
        </div>
    );
};

export default LearnAxios;
