"use client";
import { useEffect } from 'react';
import Cookies from 'js-cookie';

function LogoutPage() {
    useEffect(() => {
        // Remove the authToken cookie
        Cookies.remove('authToken');
        // Remove other cookies if necessary
        Cookies.remove('userID');
        Cookies.remove('username');

        // Redirect to the root page
        window.location.href = '/';
    }, []);

    return null; // No need to render anything
}

export default LogoutPage;
