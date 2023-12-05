import { createContext, useReducer } from "react";

const memory = localStorage.getItem('goals');
const initState = memory
    ? JSON.parse(memory)
    : {
    order: [],
    objects: {}
};

function reductor(state, action) {
    switch (action.type) {
        case 'place': {
            const goals = action.goals;
            const newState = {
                order: goals.map(goal => goal.id),
                objects: goals.reduce((object, goal) => ({ ...object, [goal.id]: goal }), {})
            };
            localStorage.setItem('goals', JSON.stringify(newState))
            return newState;
        };

        case 'create': {
            const id = String(Math.random()); //creating random ids to simulate backend ids.
            const newState = {
                order: [...state.order, id],
                objects: {
                    ...state.objects,
                    [id]: action.goal
                }
            };
            localStorage.setItem('goals', JSON.stringify(newState))
            return newState;
        };
        case 'update': {
            const id = action.goal.id;
            state.objects[id] = {
                ...state.objects[id],
                ...action.goal
            };
            const newState = { ...state };
            localStorage.setItem('goals', JSON.stringify(newState))
            return newState;
        };
        case 'remove': {
            const id = action.id;
            const newOrder = state.order.filter(item => item !== id);
            delete(state.objects[id]);
            const newState = { 
                order: newOrder,
                objects: state.objects 
            };
            localStorage.setItem('goals', JSON.stringify(newState))
            return newState;
        };
        default:
            throw new Error(); 
    }
}
// reductor(initState, { type: 'place', goals: listMock });

export const Context = createContext(null);

function Memory({ children }) {
    const [state, dispatch] = useReducer(reductor, initState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
}

export default Memory;
