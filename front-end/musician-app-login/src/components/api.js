// // api.js
// const BASE_URL = 'http://localhost:3000/';
//
// export const login = async (username, password) => {
//     try {
//         const response = await fetch(`${BASE_URL}/auth/login`);
//         const data = await response.json();
//         if (data.length > 0) {
//             return data[0];
//         } else {
//             throw new Error('Invalid credentials');
//         }
//     } catch (error) {
//         throw new Error('Login failed');
//     }
// };
// api.js
const BASE_URL = 'http://localhost:3000';

export const login = async (username, password) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Login failed');
    }
};
