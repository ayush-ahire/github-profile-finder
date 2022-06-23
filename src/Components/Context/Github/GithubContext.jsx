import React from "react";
import { createContext, useReducer } from "react";
//import { useSearchParams } from "react-router-dom";
import githubReducers from "./GithubReducers";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialstate = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducers, initialstate);
  const searchUsers = async (text) => {
    // const params= new useSearchParams({q:text})
    setLoading();
    const response = await fetch(
      `https://api.github.com/search/users?q=${text}`,
      {
        headers: {
          Authorization: `token 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`,
        },
      }
    );
    const { items } = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };
  // set loading
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });
  // set clear users
  const clearUsers = () =>
    dispatch({
      type: "CLEAR_USERS",
    });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
