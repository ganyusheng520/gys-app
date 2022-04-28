import Image from 'next/image'
import styles from '../../styles/404.module.css'

const EmptyPage = () => {
    return (
        <div className={styles.container}>
            <Image src="/404.png" alt="" width={400} height={400} />
        </div>
    );
}

export default EmptyPage;