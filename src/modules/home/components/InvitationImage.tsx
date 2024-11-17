import invitation from '/img/invitation.jpeg'

export const InvitationImage = () => {
    return (
        <div className='w-full h-full z-[20] relative'>
            <img src={invitation} alt='invitation' className='w-full h-full min-h-[200px] max-h-[400px] object-cover' />
        </div>
    )
}
