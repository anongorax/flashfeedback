
function Hero({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className='flex justify-center items-start pt-20 bg-slate-200
         w-full h-screen'>
            <div className="flex flex-col gap-2 bg-white w-10/12 h-[40%] justify-center
            items-center border-1 rounded-lg">
                {children}
            </div>
        </main>
    )
}

export default Hero