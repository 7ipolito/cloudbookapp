import React,{createContext, ReactNode, useContext, useEffect, useState} from 'react';

interface IPathContextData{
    titleRepository:string;
    pathRepository:string;
    imageTabRepository:string;
    setTitleRepository:(title:string)=>void;
    setPathRepository:(path:string)=>void;
    setImagePathTabRepository:(image:string)=>void;
    titleSubject:string;
    pathSubject:string;
    imageTabSubject:string;
    setTitleSubject:(title:string)=>void;
    setPathSubject:(path:string)=>void;
    setImagePathTabSubject:(image:string)=>void;
   
    
}

interface PathProviderProps{
    children: ReactNode;
}

export const PathContext = createContext({} as IPathContextData)

function PathProvider({children}:PathProviderProps){

    const[titleRepository,setTitleRepository]=useState('')
    const[pathRepository,setPathRepository]=useState('')
    const[imageTabRepository,setImagePathTabRepository]=useState('')

    const[titleSubject,setTitleSubject]=useState('')
    const[pathSubject,setPathSubject]=useState('')
    const[imageTabSubject,setImagePathTabSubject]=useState('')

    return(
        <PathContext.Provider value={{
            imageTabRepository,
            imageTabSubject,
            pathRepository,
            pathSubject,
            setImagePathTabRepository,
            setImagePathTabSubject,
            setPathRepository,
            setPathSubject,
            setTitleRepository,
            setTitleSubject,
            titleRepository,
            titleSubject
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