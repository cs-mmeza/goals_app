function Details() {
    const icon = ["💻", "✈️", "⚽", "📚", "💵"];
    return (
        <div>
            <form>
                <label>
                    What's you new goal?
                    <input placeholder="ex. run 62 times in a year"/>
                </label>
                <label>
                    How long would it take in your own peace? <span>(ex. 1 time weekly)</span>
                    <input type="number"/>
                    <select>
                        <option value="day">daily</option>
                        <option value="week">weekly</option>
                        <option value="month">monthly</option>
                        <option value="year">yearly</option>
                    </select>
                </label>
                <label>
                    Do you have a deadline?
                    <input type="date"/>
                </label>
                <label>
                    How many times have you achive this goal before?
                    <input type="number" />
                </label>
                <label>
                    You can chose the icon that you thing fits better this goal.
                    <input/>
                    <select>
                        {icon.map(option => <option value={option}></option>)}
                    </select>
                </label>
            </form>
            <div>
                <button>Create</button>
                <button>Cancel</button>
            </div>
        </div>
    );
}

export default Details;