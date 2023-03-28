export default function Navbar() {


    return (

        <>

        <nav className="hidden sm:flex items-center justify-center w-full bg-white z-50 fixed ">
            
            <div className="flex flex-row h-14 justify-end items-center text-[#6a3463] font-semibold">
                <a href="/" className="w-40 hidden sm:flex items-center h-7 md:-ml-4">
                    <img className="w-10" src="./src/images/logo.png" alt="Logo" />
                </a>

                <div className="flex items-center gap-4 h-10 justify-end">
                    <a className="rounded-md px-1.5 flex flex-col items-center hover:text-[#f4b1b1] hover:bg-[#6a3463]" href="#">
                        
                        <span className="rounded-lg py-4 px-1.5">PÁGINA INICIAL</span>
                    </a>
                    <a className="rounded-md px-1.5 flex flex-col items-center hover:text-[#f4b1b1] hover:bg-[#6a3463]" href="#">
                        
                        <span className="rounded-lg py-4 px-1.5">SOBRE</span>
                    </a>
                    <a className="rounded-md px-1.5 flex flex-col items-center hover:text-[#f4b1b1] hover:bg-[#6a3463]" href="#">
                        
                        <span className="rounded-lg py-4 px-1.5">PROGRAMAS</span>
                    </a>
                    <a className="rounded-md px-1.5 flex flex-col items-center hover:text-[#f4b1b1] hover:bg-[#6a3463]" href="#">
                        
                        <span className="rounded-lg py-4 px-1.5">OPORTUNIDADES</span>
                    </a>
                    <a className="rounded-md px-1.5 flex flex-col items-center hover:text-[#f4b1b1] hover:bg-[#6a3463]" href="#">
                        
                        <span className="rounded-lg py-4 px-1.5">FAÇA PARTE</span>
                    </a>
                    <a className="rounded-md px-1.5 flex flex-col items-center hover:text-[#f4b1b1] hover:bg-[#6a3463]" href="#">
                        
                        <span className="rounded-lg py-4 px-1.5">NEWSLETTER</span>
                    </a>
                    <a className="rounded-md px-1.5 flex flex-col items-center hover:text-[#f4b1b1] hover:bg-[#6a3463]" href="#">
                        
                        <span className="rounded-lg py-4 px-1.5">FAQ</span>
                    </a>
                </div>

            </div>
            
        </nav>
        </>
    )
};