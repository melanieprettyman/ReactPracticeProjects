// Create a context to share search-related state across the component tree.
import { createContext, ReactNode, useState } from "react";

// Define the shape of the context data and its default value.
// This context will hold the current search query, functions to update it, and flags to indicate if a search query is active.
export const Context = createContext<{
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    handleSearch: (query: string) => void;
    isSearchQuery: boolean;
    setIsSearchQuery: React.Dispatch<React.SetStateAction<boolean>>;
} | undefined>(undefined);

// Define a provider component that encapsulates the state logic and provides it to its children.
// This provider will be wrapped around any part of the app that needs access to the search context.
export const SearchContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // State to store the current search query string.
    const [searchQuery, setSearchQuery] = useState('');

    // State to determine if the search mode is active, initialized to true.
    const [isSearchQuery, setIsSearchQuery] = useState(true);

    // Function to handle updates to the search query.
    // It sets the search query state and marks the search query as active.
    const handleSearch = (query: string) => {
        setIsSearchQuery(true);
        setSearchQuery(query);
    };

    // Render the provider with the context value that includes the search state and the handler functions.
    // The `children` prop will be the main app.
    return (
        <Context.Provider value={{
            searchQuery, setSearchQuery,
            handleSearch,
            isSearchQuery, setIsSearchQuery
        }}>
            {children}
        </Context.Provider>
    );
};
