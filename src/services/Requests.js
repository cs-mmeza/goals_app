export async function requestGoals() {
    const response = await fetch("/api/goals");
    const goals = await response.json();
    return goals;
}

export async function requestGoal(id) {
    const response = await fetch(`/api/goals${id}`);
    const goal = await response.json();
    return goal;
}

export async function createGoal(goal) {
    const response = await fetch("/api/goals", {
        method: "POST",
        body: JSON.stringify(goal),
        headers: {
            "content-type": "application/json; charset=UTF-8",
        },
    });

    const goalCreated = response.json();
    console.log("New goal created!", goalCreated);
    return goalCreated;
}

export async function updateGoal(goal) {
    const response = await fetch(`/api/goals/${goal.id}`, {
        method: "PUT",
        body: JSON.stringify(goal),
        headers: {
            "content-type": "application/json; charset=UTF-8",
        },
    });
    const updatedGoal = await response.json();
    console.log("goal updated", updatedGoal);
    return updatedGoal;
}

export async function removeGoal(id) {
    await fetch(`/api/goals/${id}`, {
        method: "DELETE",
    });
    console.log("goal removed", id);
}
