import { useContext } from "react";
import Goal from "./Goal";
import { ContextGoals } from "../../../memory/Goals";
import { Outlet } from "react-router-dom";


function List() {
    const [goals] = useContext(ContextGoals);

    return (
        <>
            {goals.order.map(id => (
                <Goal key={id} {...goals.objects[id]}></Goal>
            ))}
            <Outlet />
        </>
    );
}

export default List;