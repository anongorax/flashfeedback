import useModal from "@/app/hooks/useModal";
import Modal from "./Modal"
import { useAuth } from "@/lib/auth";

function Breadcrumb() {
    const auth = useAuth();
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <div className="flex justify-between items-center bg-slate-200 px-16">
        <div className='flex flex-col '>
            <p>Sites/</p>
            <h3 className='text-4xl mt-2 font-semibold'>My Sites</h3>
        </div>
        {auth?.user &&
            <div>
              <button className='bg-black text-white text-sm py-1 px-3  
              rounded-sm'
              onClick={openModal}
          >+ Add site</button>
          <Modal show={isOpen} onClose={closeModal} />
          </div>}
          </div>
    )
}

export default Breadcrumb