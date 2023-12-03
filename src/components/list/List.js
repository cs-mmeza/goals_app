import { useContext } from "react";
import Goal from "./Goal";
import { Context } from "../../services/Memory";


function List() {
    const [state, dispatch] = useContext(Context);
    
    return (
         state.order.map(id => <Goal key={id} {...state.objects[id]}></Goal>)
    );
}

export default List;