import Modal from './Modal'
import useModal from '@/app/hooks/useModal';

function EmptyState() {
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <>
            <h4 className='text-2xl font-bold'>You haven't added any sites.</h4>
            <p>Welcome 👋 lets get started</p>
            <button className='mt-3 bg-black text-white py-4 px-3
                rounded-lg border-1'
                onClick={openModal}
            >Add your first site</button>
            <Modal show={isOpen} onClose={closeModal} />
        </>
    )
}

export default EmptyState