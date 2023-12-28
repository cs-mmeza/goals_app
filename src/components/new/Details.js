import { useEffect, useState, useContext } from "react";
import styles from "./Details.module.css";
import { Context } from "../../services/Memory";
import { useNavigate, useParams } from "react-router-dom";
import { createGoal, removeGoal, updateGoal } from "../../services/Requests";

function Details() {



    const { id } = useParams();

    const [form, setForm] = useState({
        details: "",
        frequency: 1,
        term: 'weekly',
        icon: '🏃',
        goal: 52,
        end_date: '2030-01-01',
        completed: 0
    });

    const [state, dispatch] = useContext(Context);

    const { details, frequency, term, icon, goal, end_date, completed } = form;

    //1. write on setForm and update the previous state with the new state.
    //2. copy all elements from previous state.
    //3. And update the prop that change the object value in event.target.value is the input's value.
    const onChange = (event, prop) => {
        setForm(state => {
            console.log("Previous State:", state);
            return { ...state, [prop]: event.target.value };
        });
    };

    const navegate = useNavigate();

    const goalMemory = state.objects[id];

    useEffect(() => {
        console.log("Current Form State:", form);
        if (!id) return;
        if (!goalMemory) {
            return navegate("/404");
        }
        setForm(goalMemory);
    }, [id, goalMemory, navegate])

    const create = async () => {
        const newGoal = await createGoal(form);
        dispatch({ type: 'create', goal: newGoal });
        navegate("/list");
    }

    const update = async () => {
        const updatedGoal = await updateGoal(form);
        dispatch({ type: 'update', goal: updatedGoal });
        navegate("/list");
    }

    const remove = async () => {
        await removeGoal(form.id);
        dispatch({ type: 'remove', id: form.id });
        navegate("/list");
    }

    const cancel = () => {
        navegate("/list");
    }

    const icons = ["💻", "✈️", "⚽", "📚", "💵", "🏃"];
    const frequencies = ["daily", "weekly", "monthly", "annually"];

    return (
        <div className="card">
            <form className="p-4">
                <label className="label">
                    describe you new goal?
                    <input
                        className="input"
                        placeholder="ex. run 62 times in a year"
                        value={details}
                        onChange={e => onChange(e, 'details')}
                    />
                </label>
                <label className="label">
                    How long would it take in your own peace?{" "}
                    <span>(ex. 1 time weekly)</span>
                    <div className="flex mb-6">
                        <input
                            type="number"
                            className="input mr-6"
                            value={frequency}
                            onChange={(e) => onChange(e, "frequency")}
                        />
                        <select
                            className="input"
                            value={term}
                            onChange={e => onChange(e, "term")}
                        >
                            {frequencies.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </label>
                <label className="label">
                    How many time do you want to complete this goal?
                    <input
                        className="input"
                        type="number"
                        value={goal}
                        onChange={e => onChange(e, 'goal')} />
                </label>
                <label className="label">
                    Whats your deadline?
                    <input
                        type="date"
                        className="input"
                        value={end_date}
                        onChange={e => onChange(e, 'end_date')}
                    />
                </label>
                <label className="label">
                    How many have you completed this goal?
                    <input
                        className="input"
                        type="number"
                        value={completed}
                        onChange={e => onChange(e, 'completed')} />
                </label>
                <label className="label">
                    You an icon that suits this goal better.
                    <select className="input"
                        value={icon}
                        onChange={e => onChange(e, 'icon')} >
                        {icons.map(option => <option key={option} value={option}>{option}</option>)}
                    </select>
                </label>
            </form>
            <div className={styles.buttons}>
                {!id && <button
                    className="button button--black"
                    onClick={create}
                >Create
                </button>}
                {id && <button
                    className="button button--black"
                    onClick={update}
                >Update
                </button>}
                {id && <button
                    className="button button--red"
                    onClick={remove}
                >Delete
                </button>}
                <button
                    className="button button--gray"
                    onClick={cancel}
                >Cancel
                </button>
            </div>
        </div>
    );
}

export default Details;