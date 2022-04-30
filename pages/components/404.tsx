import Image from 'next/image'
import styles from '../../styles/404.module.css'
import React from 'react';
import LoggerFactory from '../../lib/Log';
const Logger = LoggerFactory.initNS('EmptyPage');

const EmptyPage = () => {
    React.useEffect(() => {
        Logger.info('load EmptyPage')
    }, []);
    return (
        <div className={styles.container}>
            <Image src="/404.png" alt="" width={500} height={355}/>
        </div>
    );
}

export default EmptyPage;