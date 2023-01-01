import { Dispatch, SetStateAction } from "react";
interface HeaderInterface {
    isLoggedIn: boolean,
    handleLogin: Dispatch<SetStateAction<boolean>>
}
export default HeaderInterface;