import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context data type
interface DecisionContextType {
  decisionNumber: number;
  setDecisionNumber: (num: number) => void;
}

// Create the context
const DecisionContext = createContext<DecisionContextType | undefined>(undefined);

// Create a provider component
export const DecisionProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [decisionNumber, setDecisionNumber] = useState(0);

  return (
    <DecisionContext.Provider value={{ decisionNumber, setDecisionNumber }}>
      {children}
    </DecisionContext.Provider>
  );
};

// Custom hook to use the context
export const useDecisionContext = (): DecisionContextType => {
  const context = useContext(DecisionContext);
  if (context === undefined) {
    throw new Error('useDecisionContext must be used within a DecisionProvider');
  }
  return context;
};
