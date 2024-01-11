import { useState } from "react";

export default function useMarks() {
    const [errorMessage, setErrorMessage] = useState("")
    
    const isValidMarks = (data: unknown): TMark[] | null => {
        if(!Array.isArray(data)) return null
        
        for(const mark of data) {
            if(typeof mark !== "object" || !mark) return null

            // Checking uuid
            if(!("uuid" in mark)) return null
            if(typeof mark.uuid !== "string") return null

            //Checking name
            if(!("name" in mark)) return null
            if(typeof mark.name !== "string") return null

            //Checking weight
            if(!("weight" in mark)) return null
            if(typeof mark.weight !== "number") return null

            //Checking number
            if(!("number" in mark)) return null
            if(typeof mark.number !== "number") return null
        }

        return data;
    }
    
    //TODO: add encript
    const getMarks = () => {
        try {
            const dataFromLocalStorage = localStorage.getItem("marks")
            if(dataFromLocalStorage == null) return null

            const marks = isValidMarks(JSON.parse(dataFromLocalStorage))
            if(!marks) throw new Error("Invalid marks")

            return marks;
        }

        catch(err) {
            setErrorMessage((err as Error).message)
            return null 
        }
    }

    return [ getMarks, errorMessage ] as const
}