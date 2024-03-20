import React, { useEffect, useRef, useState } from 'react';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const LearnGetAPI = () => {
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [page, setPage] = useState(0);
    // console.table(post);

    const abortControllerRef = useRef(null);
    useEffect(() => {
        const fetchPosts = async () => {
            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();
            setIsLoading(true);

            try {
                const res = await fetch(`${BASE_URL}/posts?page=${page}`, {
                    signal: abortControllerRef.current?.signal,
                });
                const posts = await res.json();
                setPost(posts);
            } catch (e) {
                if (e.name === 'AbortError') {
                    console.log('Aborted');
                    return;
                }
                setError(e);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPosts();
    }, [page]);

    if (error) {
        return <h1 className='text-center text-red-500 text-2xl font-bold py-5'>Something went wrong!</h1>;
    }

    return (
        <div className='h-screen w-screen'>
            <h1 className='text-center text-2xl font-bold py-5'>Data fetching in React</h1>
            <button
                className='border border-black px-3 py-1 mx-auto block mb-5 rounded-lg'
                onClick={() => setPage(page + 1)}
            >
                Increase page {page}
            </button>
            {isLoading && <h1 className='text-center text-2xl font-bold py-5'>Loading...</h1>}
            {!isLoading && (
                <ul className='px-60 list-decimal bg-gray-200'>
                    {post.map((item) => {
                        return <li key={item.id}>{item.title}</li>;
                    })}
                </ul>
            )}
        </div>
    );
};

export default LearnGetAPI;
