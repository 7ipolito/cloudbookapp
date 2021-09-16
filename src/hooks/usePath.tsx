import React,{createContext, ReactNode, useContext, useEffect, useState} from 'react';

interface IPathContextData{
    title:string;
    path:string;
    imageTab:string;
    setTitle:(title:string)=>void;
    setPath:(path:string)=>void;
    setImagePathTab:(image:string)=>void;
   
}

interface PathProviderProps{
    children: ReactNode;
}

export const PathContext = createContext({} as IPathContextData)

function PathProvider({children}:PathProviderProps){

    const[title,setTitle]=useState('')
    const[path,setPath]=useState('')
    const[imagePathTab,setImagePathTab]=useState('')

    return(
        <PathContext.Provider value={{
            path,
            title,
            imageTab:imagePathTab,
            setTitle,
            setImagePathTab,
            setPath
            }}>
            {children}
        </PathContext.Provider>
    )


}

function usePath(){
    const context = useContext(PathContext);

    return context;
}

export {PathProvider,usePath}