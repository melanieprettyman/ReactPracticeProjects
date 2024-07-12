import React, { createContext, useContext, useState, useCallback } from 'react';

interface NodeData {
    id: string;
    type: 'scene' | 'decision';
    title?: string;
    description: string;
    imageUrl?: string;
    fileName?: string;
}

interface ContextType {
    nodesInfo: { [id: string]: NodeData };
    updateNode: (id: string, nodeData: Partial<NodeData>) => void;
    publishData: () => void;
    publish:boolean,
}

const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [nodesInfo, setNodes] =useState<{ [id: string]: NodeData }>({});
    const [publish, setPublish] = useState(false);

     const updateNode = useCallback((id: string, nodeData: Partial<NodeData>) => {
        setNodes(prev => ({
            ...prev,
            [id]: { ...prev[id], ...nodeData }
        }));
    }, []);

    const publishData = useCallback(() => {
        setPublish(true);
        Object.entries(nodesInfo).forEach(([id, data]) => {
            console.log(`ID: ${id}, Type: ${data.type}, Title: ${data.title}, Description: ${data.description}, Image URL: ${data.imageUrl}, File Name: ${data.fileName}`);
        });
    }, [nodesInfo]);

    return (
        <Context.Provider value={{ nodesInfo, updateNode, publishData, publish }}>
            {children}
        </Context.Provider>
    );
};

export const useAppContext = (): ContextType => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('useAppContext must be used within a ContextProvider');
    }
    return context;
};
