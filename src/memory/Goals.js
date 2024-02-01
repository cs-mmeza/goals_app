import React from "react";
import { createContext, useReducer } from "react";

// const memoria = localStorage.getItem('metas');
const initState = {
    order: [],
    objects: {},
};
// memoria ? JSON.parse(memoria) : {
//     orden: [],
//     objetos: {}
// };

function reductor(state, action) {
    switch (action.type) {
        case "place": {
            const goals = action.goals;
            const newState = {
                order: goals.map((goal) => goal.id),
                objects: goals.reduce(
                    (object, goal) => ({ ...object, [goal.id]: goal }),
                    {},
                ),
            };
            // localStorage.setItem('goals', JSON.stringify(newState))
            return newState;
        }

        case "create": {
            const id = action.goal.id; //String(Math.random()); //creating random ids to simulate backend ids.
            const newState = {
                order: [...state.order, id],
                objects: {
                    ...state.objects,
                    [id]: action.goal,
                },
            };
            // localStorage.setItem('goals', JSON.stringify(newState))
            return newState;
        }
        case "update": {
            const id = action.goal.id;
            state.objects[id] = {
                ...state.objects[id],
                ...action.goal,
            };
            const newState = { ...state };
            // localStorage.setItem('goals', JSON.stringify(newState))
            return newState;
        }
        case "remove": {
            const id = action.id;
            const newOrder = state.order.filter((item) => item !== id);
            delete state.objects[id];
            const newState = {
                order: newOrder,
                objects: state.objects,
            };
            // localStorage.setItem('goals', JSON.stringify(newState))
            return newState;
        }
        default:
            throw new Error();
    }
}
// reductor(initState, { type: 'place', goals: listMock });

export const ContextGoals = createContext(null);

function MemoryGoals({ children }) {
    const value = useReducer(reductor, initState);
    return (
        <ContextGoals.Provider value={value}>
            {children}
        </ContextGoals.Provider>
    );
}

export default MemoryGoals;
