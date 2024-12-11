import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser, clearUser, setLoading } from "../features/user/userSlice";
import { useEffect } from "react";

const AuthListener = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const auth = getAuth();
        dispatch(setLoading(true));

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser(user)); // Store user data in Redux
            } else {
                dispatch(clearUser());   // Clear user data if logged out
            }
            dispatch(setLoading(false));
        });

        return () => unsubscribe(); // Cleanup listener
    }, [dispatch]);

    return null; // This component does not render anything
};

export default AuthListener;
