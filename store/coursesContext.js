import { createContext } from "react";

export const CoursesContext = createContext({
    courses:[],//idyi dinamik oluşturucam o yüzden yok
    addCourse:({description,amount,date})=>{},
    deleteCourse:(id)=>{},
    updateCourse:(id,{description,amount,date})=>{}
});

