import { Outlet, Navigate, useLocation, useSearchParams } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


const Requiredauth = ({ children }) => {
    const user = getAuth().currentUser;

    if (!user) {
        // If the user is not logged in, redirect to the login page
        return <Navigate to="/login" />;
    } else {
        // If the user is logged in, render the requested component
        return children;
    }

};

export default Requiredauth
