import styles from "./Details.module.css";
function Details() {
    const icon = ["💻", "✈️", "⚽", "📚", "💵", "🏃"];
    return (
        <div className="card">
            <form className="p-4">
                <label className="label">
                    What's you new goal?
                    <input 
                        className="input"
                        placeholder="ex. run 62 times in a year"/>
                </label>
                <label className="label">
                    How long would it take in your own peace? <span>(ex. 1 time weekly)</span>
                    <div className="flex mb-6">
                        <input 
                            className="input mr-6"
                            type="number"/>
                        <select className="input">
                            <option value="day">daily</option>
                            <option value="week">weekly</option>
                            <option value="month">monthly</option>
                            <option value="year">yearly</option>
                        </select>
                    </div>  
                </label>
                <label className="label">
                    Do you have a deadline?
                    <input 
                        className="input"
                        type="date"/>
                </label>
                <label className="label">
                    How many times have you achive this goal before?
                    <input 
                        className="input"
                        type="number" />
                </label>
                <label className="label">
                    You can chose the icon that you thing fits better this goal.
                    <select className="input">
                        {icon.map(option => <option value={option}>{option}</option>)}
                    </select>
                </label>
            </form>
            <div className={styles.buttons}>
                <button className="button button--black">Create</button>
                <button className="button button--gray">Cancel</button>
            </div>
        </div>
    );
}

export default Details;