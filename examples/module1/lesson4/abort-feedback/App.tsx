import React, { useEffect, useState } from 'react';

interface User {
    id: number;
    name: string;
}

const API_URL = '/api/data/users?timeout=10000';

const App = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        return Promise.race([
            fetch(API_URL).then((res) => res.json()),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout error')), 1000))
        ]).then(({ users }) => {
            setError(null);
            setUsers(users);
        }).catch((error) => {
            console.error(error);
            setError('Error fetching users');
        })
    }

    const handleFetchData = () => {
        fetchData();
    };

    return (
        <div>
            <div className="flex flex-row items-center justify-between py-4">
                <h1 className="text-2xl font-bold">Users</h1>
                <div className="flex flex-row items-center">
                    {error &&
                        <p className="mr-2">
                            Sorry, there seems to be connectivity issues...
                        </p>}
                    <button className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4" onClick={handleFetchData}>
                        Try again
                    </button>
                </div>
            </div>
            <ul className="space-y-2">
                {users.map((user, index) => (
                    <li
                        className="bg-white p-4 rounded-md border border-gray-100"
                        key={index}
                    >
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
