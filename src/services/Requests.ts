import { GoalType } from "../types/GoalType";

export async function requestGoals() : Promise<GoalType[]> { // ts working with promises.
    const response = await fetch("/api/goals");
    const goals: GoalType[] = await response.json();
    return goals;
}

export async function requestGoal(id: number) : Promise<GoalType>{ //returning just one type
    const response = await fetch(`/api/goals${id}`);
    const goal: GoalType = await response.json();
    return goal;
}

export async function createGoal(goal: GoalType) : Promise<GoalType>{
    const response = await fetch("/api/goals", {
        method: "POST",
        body: JSON.stringify(goal),
        headers: {
            "content-type": "application/json; charset=UTF-8",
        }
    });

    const goalCreated: GoalType = await response.json();
    console.log("New goal created!", goalCreated);
    return goalCreated;
}

export async function updateGoal(goal: GoalType): Promise<GoalType> {
    const response = await fetch(`/api/goals/${goal.id}`, {
        method: "PUT",
        body: JSON.stringify(goal),
        headers: {
            "content-type": "application/json; charset=UTF-8",
        },
    });
    const updatedGoal: GoalType = await response.json();
    console.log("goal updated", updatedGoal);
    return updatedGoal;
}

export async function removeGoal(id: number): Promise<void> {
    await fetch(`/api/goals/${id}`, {
        method: "DELETE",
    });
    console.log("goal removed", id);
}
