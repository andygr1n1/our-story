import { useRoot$ } from '@/modules/app/mst/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export const Logout = observer(() => {
    const { t } = useTranslation()
    const { handleLogout } = useRoot$()

    return (
        <Button size='lg' type='button' className='w-full error-button-bg' onClick={handleLogout}>
            <span className='caveat-500 text-2xl'>{t('Logout')}</span>
        </Button>
    )
})
