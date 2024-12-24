import { InvitationImage } from '@/modules/home/components/InvitationImage'
import { useInvitationId } from '@/modules/home/hooks/useInvitationId'
import type { PropsWithChildren } from 'react'

export const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
    useInvitationId()

    return (
        <div>
            <InvitationImage />
            {children}
        </div>
    )
}
