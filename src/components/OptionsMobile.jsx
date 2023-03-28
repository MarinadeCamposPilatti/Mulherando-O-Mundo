import CloseIcon from '@mui/icons-material/Close';

import { Link } from 'react-router-dom';


export default function OptionMobile() {


  /*const [visible, setVisible] = useState(true);

  const handleClick = () => {
      setVisible(false);
  }

  const handleClick2 = () => {
    setVisible(true)
  }

  function handleMultipleFunction () {
    if(visible){
        handleClick()
    }else{
        handleClick2()
    }
    toggleMenu()

  }

  const changeClass = visible ? ' ' : 'hidden'*/

    return (
        <>

        <div className='text-[#6a3463] sm:hidden'>
          <Link to="/"><button className='mt-10 mx-10'><CloseIcon /></button></Link>

          <div className='mt-20 text-2xl'>

            <h1 className='mb-6 mx-10 font-bold hover:bg-[#6a3463] hover:text-[#f4b1b1] hover:mx-0 hover:px-10 hover:py-4'>PÁGINA INICIAL</h1>
            <h1 className='mb-6 mx-10 font-bold hover:bg-[#6a3463] hover:text-[#f4b1b1] hover:mx-0 hover:px-10 hover:py-4'>SOBRE</h1>
            <h1 className='mb-6 mx-10 font-bold hover:bg-[#6a3463] hover:text-[#f4b1b1] hover:mx-0 hover:px-10 hover:py-4'>PROGRAMAS</h1>
            <h1 className='mb-6 mx-10 font-bold hover:bg-[#6a3463] hover:text-[#f4b1b1] hover:mx-0 hover:px-10 hover:py-4'>OPORTUNIDADES</h1>
            <h1 className='mb-6 mx-10 font-bold hover:bg-[#6a3463] hover:text-[#f4b1b1] hover:mx-0 hover:px-10 hover:py-4'>FAÇA PARTE</h1>
            <h1 className='mb-6 mx-10 font-bold hover:bg-[#6a3463] hover:text-[#f4b1b1] hover:mx-0 hover:px-10 hover:py-4'>NEWSLETTER</h1>
            <h1 className='mx-10 font-bold hover:bg-[#6a3463] hover:text-[#f4b1b1] hover:mx-0 hover:px-10 hover:py-4'>FAQ</h1>

          </div>

        </div>


        </>
    )
}
