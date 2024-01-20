export default function useMarks() { 
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
    
    const getMarks = () => {
        try {
            const dataFromLocalStorage = localStorage.getItem("marks")
            if(dataFromLocalStorage == null) return []

            // TODO: add decript
            const marks = isValidMarks(JSON.parse(dataFromLocalStorage))
            
            if(marks == null) throw new Error();
            return marks
        }

        catch(err) {
            // TODO: add encript
            localStorage.setItem("marks", JSON.stringify([]))
            return []
        }
    }

    return getMarks
}