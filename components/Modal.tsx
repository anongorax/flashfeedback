'use client'
import { createSite } from '@/lib/firestore'
import { Dialog, DialogPanel, DialogTitle, Field, Fieldset, Input, Label, Transition, TransitionChild } from '@headlessui/react'
import { useForm, SubmitHandler } from "react-hook-form"
import Notification from './Notification'
import { useState } from 'react'
import { useAuth } from '@/lib/auth'
import useSWR, { mutate } from "swr"
import { fetcher } from '@/utils/fetcher'


interface ModalProps {
    show: boolean,
    onClose: () => void
}

type Inputs = {
    name: string
    link: string
}

export type Site = {
    name: string
    site: string
    authorId: string | undefined
    createdAt: string
}

function Modal({ show, onClose }: ModalProps) {
    const [notify, setNotify] = useState(false);
    const auth = useAuth()

    const showNotification = () => {
        setNotify(true)
        return new Promise<void>((resolve) => setTimeout(() => {
            setNotify(false)
            resolve()
        }, 1500));

    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm<Inputs>()
    // const {data} = useSWR('/api/sites', fetcher)
    const onSubmit: SubmitHandler<Inputs> = async (input) => {
        if (auth) {
            let payload: Site = {
                name: input.name,
                site: input.link,
                authorId: auth.user?.uid,
                createdAt: new Date().toISOString()
            };
            await createSite(payload);
            await showNotification();
            mutate('/api/sites',
                async (data:any) => {
                    return {sites: data?.sites.concat(payload)}  
                },
                false
            )
            reset();
            onClose();
        } else {
            alert('Please login to add a site')
        }
    }

    return (
        <Transition show={show}>
            <Dialog className="relative z-10" onClose={onClose}>
                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center">
                    <Transition
                        show={notify}
                        enter="transition ease-out duration-300"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-200"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <div className="absolute right-0 top-0 flex items-center justify-end">
                            <Notification />
                        </div>
                    </Transition>
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-md">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <div className="mb-5">
                                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                        Add Site
                                                    </DialogTitle>
                                                </div>
                                                <div className="mt-2">
                                                    <Fieldset className="flex flex-col gap-4">
                                                        <Field>
                                                            <Label>Name</Label>
                                                            <Input className="mt-1 block w-full border-slate-200 border-2 rounded-md px-2" placeholder="My App" {...register('name')} />
                                                        </Field>
                                                        <Field>
                                                            <Label>Link</Label>
                                                            <Input className="mt-1 block w-full border-slate-200 border-2 rounded-md px-2" placeholder="www.example.com" {...register("link", { required: true })} />
                                                            {errors.link &&
                                                                <div className="mt-2">
                                                                    <span className="text-red-500">This field is required</span>
                                                                </div>
                                                            }
                                                        </Field>
                                                    </Fieldset>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="submit"
                                            className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 sm:ml-3 sm:w-auto"
                                        >
                                            Cretae
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:mt-0 sm:ml-3 sm:w-auto"
                                            onClick={onClose}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Modal;
