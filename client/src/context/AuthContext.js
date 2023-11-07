import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer.js"

const INITIAL_STATE = {
    user:{
        _id: "6547368431d3067caac53ca8",
        username:"smit",
        email: "smit@gmail.com",
        profilePicture: "person/1.jpeg",
        coverPicture: "",
        isAdmin: false,
        followers: [],
        followings: [],
    },
    isFetching: false,
    error: false,
};
export const AuthContext = createContext(INITIAL_STATE)


export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}