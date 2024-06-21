
function Notification() {
    return (
        <div className="flex items-start justify-center mt-4 mr-4">
            <div className="relative max-w-sm mx-auto p-4 bg-white rounded shadow-md">
                <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-700">Successfully saved!</p>
                        <p className="text-sm text-gray-500">You can now view the site in your dashboard..</p>
                    </div>
                </div>
                {/* <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button> */}
            </div>
        </div>
    )
}

export default Notification