import { createContext, useReducer } from "react";

const listMock = [{
    "id": "1",
    "details": "40 min run daily",
    "period": "year",
    "events": 1,
    "icon": "🏃",
    "goal": 365,
    "end date": "2030-01-01",
    "completed": 5
},
{
    "id": "2",
    "details": "Travel to national parks",
    "period": "month",
    "events": 1,
    "icon": "✈️",
    "goal": 2,
    "end date": "2030-01-01",
    "completed": 0
},
{
    "id": "3",
    "details": "Read a book",
    "period": "year",
    "events": 1,
    "icon": "📕",
    "goal": 7,
    "end date": "2030-01-01",
    "completed": 4
}];
const initState = {
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
            return newState;
        };
        case 'create': {
            const id = Math.random(); //creating random ids to simulate backend ids.
            const newState = {
                order: [...state.order, id],
                objects: {
                    ...state.objects,
                    [id]: action.goal
                }
            };
            return newState;
        };
        case 'update': {
            const id = action.goal.id;
            state.objects[id] = {
                ...state.objects[id],
                ...action.goal
            };
            const newState = { ...state };
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
            return newState;
        };

    }
}
const goals = reductor(initState, { type: 'place', goals: listMock });

export const Context = createContext(null);

function Memory({ children }) {
    const [state, dispatch] = useReducer(reductor, goals);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
}

export default Memory;
