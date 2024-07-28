import { createContext } from "react";
import { getUserData } from "../../integratedDataServer/apis/user";


const userDataContext = createContext(getUserData())