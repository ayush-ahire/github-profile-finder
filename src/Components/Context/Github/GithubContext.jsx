import React from "react";
import { createContext, useReducer } from "react";
import githubReducers from "./GithubReducers";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialstate = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducers, initialstate);
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
  const GITHUB_API = process.env.REACT_APP_GITHUB_API;
  const searchUsers = async (text) => {
    const params = new URLSearchParams({ q: text });
    setLoading();
    const response = await fetch(` ${GITHUB_API}search/users?${params}`, {
      headers: {
        Authorization: `${GITHUB_TOKEN}`,
      },
    });
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
