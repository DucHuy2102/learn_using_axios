import { useEffect, useState } from 'react';

const BASE_URL = 'https://dummyjson.com';

const TryGetAPI = () => {
    const [search, setSearch] = useState('');
    const [dataFromAPI, setDataFromAPI] = useState([]);
    const [error, setError] = useState();
    // console.log(search);
    console.log('data:', dataFromAPI);

    useEffect(() => {
        const fakeAPI = async () => {
            try {
                const res = await fetch(`${BASE_URL}/products?limit=10`);
                const data = await res.json();
                setDataFromAPI(data.products);
            } catch (error) {
                setError('Something went wrong! Please try again later.');
            }
        };
        fakeAPI();
    }, []);

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center'>
            {/* input */}
            <div className='pb-5'>
                <input
                    type='text'
                    placeholder='Search here'
                    className='w-96 text-xl px-5 py-2 rounded-lg border border-black'
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* display */}
            <div>
                {error ? (
                    <p className='text-xl text-red-500'>{error}</p>
                ) : (
                    <ul>
                        {dataFromAPI.map((item) => {
                            return <li key={item.id}>{item.title}</li>;
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default TryGetAPI;
