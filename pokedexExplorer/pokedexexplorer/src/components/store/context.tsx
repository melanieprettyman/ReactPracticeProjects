// Create the context
import {createContext, ReactNode, useState} from "react";

export const Context = createContext<{
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (query: string) => void;
  isSearchQuery: boolean;
  setIsSearchQuery: React.Dispatch<React.SetStateAction<boolean>>;
} | undefined>(undefined);

// Provider component
export const SearchContextProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchQuery, setIsSearchQuery] = useState(true);
  const handleSearch = (query: string) => {
        setSearchQuery(query);
    };



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