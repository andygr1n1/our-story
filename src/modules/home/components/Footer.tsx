import { Tooltip } from 'react-tooltip'

export const Footer = () => {
    return (
        <>
            <div className='w-full h-full flex-col min-h-[200px] gap-4 flex justify-center items-center'>
                <div
                    id='telegram-link'
                    data-tooltip-id='telegram-link'
                    data-tooltip-content='Telegram group'
                    className='custom-icon w-fit h-fit rounded-full max-w-[40px] max-h-[40px]'
                >
                    <span className='simple-icons--telegram max-w-[40px] max-h-[40px] w-full h-full'></span>
                </div>
                <div>Daria & Andrei</div>
            </div>
            <Tooltip id='telegram-link' />
        </>
    )
}
