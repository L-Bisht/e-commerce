import { useDispatch } from "react-redux";
import { TAppDispatch } from "../../../store";

const useAppDispatch = () => useDispatch<TAppDispatch>();

export default useAppDispatch;
