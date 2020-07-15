import styles from '../styles/alert.module.css'
import cn from 'classnames'

export default function Alert({ children = null, type = 'success' }) {
    return (
        <div
            className={cn({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error'
            })}
        >
            {children}
        </div>
    )
}