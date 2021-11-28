import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {ActionCreaters} from "../store";


export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreaters, dispatch)
}