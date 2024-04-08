// AuthService.js (helper function for managing authentication)

export const login = (userData) => {
    // Assuming userData contains authentication token or user information
    sessionStorage.setItem('userData', JSON.stringify(userData));
    console.log('user data')
};

export const logout = () => {
    sessionStorage.removeItem('userData');
};

export const isAuthenticated = () => {
    return sessionStorage.getItem('userData') !== null;
};
