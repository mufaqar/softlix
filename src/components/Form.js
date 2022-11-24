import { useState } from "react"

export default function Form() {
    const [form, setForm] = useState(false);  

    return (
        <>
            <div className="relative flex justify-center">
                <button className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                    onClick={() => {
                        setForm(!form)
                    }}>
                    Open Modal
                </button>

                <div className={`flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0 ${form ? 'flex sm:block bg-black/30 fixed inset-0 z-10 overflow-y-auto' : 'hidden'}`}
                    aria-labelledby="modal-title" role="dialog" aria-modal="true"
                    onClick={() => {
                        setForm(!form)
                    }}>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-lg rounded-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:p-6">

                        <div className="w-full">
                            <div className="text-center">
                                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Get Started gor free</h2>

                                <p className="mt-3 text-gray-500 dark:text-gray-300">Complete Form access your account</p>
                            </div>

                            <div className="mt-8">
                                <form>
                                    <div className="flex items-center justify-between md:gap-0 gap-2">
                                        <div>
                                            <input type="first_name" name="first_name" id="first_name" placeholder="First Name" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>
                                        <div>
                                            <input type="las_name" name="las_name" id="las_name" placeholder="Last Name" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <input type="email" name="email" id="email" placeholder="E-mail" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div className="mt-6">
                                        <input type="phone" name="phone" id="phone" placeholder="Phone" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div className="mt-6">
                                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            Sign in
                                        </button>
                                    </div>

                                </form>

                                <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
