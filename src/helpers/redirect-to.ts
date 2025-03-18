import { Href, Router } from "expo-router";

export const  redirectTo = (router:Router, route:Href, timeToReditect:number = 1300) =>{
    setTimeout(() => {
        router.replace(route);
    }, timeToReditect);
}