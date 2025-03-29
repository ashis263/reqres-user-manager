import { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);
    //another array of users just for search functionality
    const [fetchedUsers, setFetchedUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();

    useEffect(() => {
        //get token from local storage
        const token = localStorage.getItem('token');
        if (token) {
            //set user to some value
            setIsAuthenticated(true);
            setIsLoading(false);
        }
        else {
            setIsLoading(false);
        }
    }, []);

    //universal toast for alert
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    });

    //data to be provided
    const data = {
        isAuthenticated,
        setIsAuthenticated,
        Toast,
        isLoading,
        setIsLoading,
        users,
        setUsers,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        fetchedUsers,
        setFetchedUsers
    };

    return (
        //provide data to children
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
