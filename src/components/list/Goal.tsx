import { Link } from 'react-router-dom';
import styles from './Goal.module.css';
import { GoalType } from '../../types/GoalType';


interface GoalProps extends GoalType {}
function Goal({ id, icon, frequency, term, details, goal, completed }: GoalProps) {
    return (
        <Link to={`/list/${id}`} className={styles.goal + " card"}>
            <div className='flex items-center'>
                <div className={styles.icon}>{icon}</div>
                <p className='text-xl ml-5 mr-10'>{frequency}
                    <sub className='text-xs text-gray-500 ml-1'>/ {term}</sub></p>
                <p>{details}</p>
            </div>
            <div className='flex'>
                <div className='relative m-2 mx-5'>
                    <p className='text-center'>{completed} of {goal}</p>
                    <div className={styles.bar1}>
                        <div
                            style={{ width: `${Math.round((completed / goal) * 100)}%` }}
                            className={styles.bar2}>
                        </div>
                    </div>
                </div>
            </div>
            <button className='button button--black'>Completed</button>
        </Link>
    );
}

export default Goal;