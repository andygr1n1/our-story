import { Head } from '@/modules/home/components/Head'
import { useInvitationId } from '@/modules/home/hooks/useInvitationId'
import type { PropsWithChildren } from 'react'
import styles from './RootLayout.module.scss'
export const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
    useInvitationId()

    return (
        <div className={styles['root-layout']}>
            <Head />
            {children}
        </div>
    )
}
