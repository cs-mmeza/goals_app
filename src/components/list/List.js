import Goal from "./Goal";

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


function List() {
    return (
         listMock.map(goal => <Goal {...goal}></Goal>)
    );
}

export default List;