export async function requestGoals() {
    const response = await fetch('goals.json');
    const goals = await response.json();
    return goals;
}

export async function newGoal() {
    const response = await fetch('/goal.json');
    const createdGoal = await response.json();
    console.log('goal created', createdGoal)
    return createdGoal;
}

export async function createGoal(){
    const response = await fetch('/goal.json');
    const goalCreated = response.json();
    console.log('New goal created!', goalCreated);
    return goalCreated;
}

export async function updateGoal() {
    const response = await fetch('/goal.json');
    const updatedGoal = await response.json();
    console.log('goal updated', updatedGoal)
    return updatedGoal;
}

export async function removeGoal() {
    const response = await fetch('/goal.json');
    const removedGoal = await response.json();
    console.log('goal removed', removedGoal.id)
    return removedGoal.id;
}