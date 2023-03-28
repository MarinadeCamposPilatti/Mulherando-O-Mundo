import ChartMom from './Charts-Mom.jsx'

export default function Body() {

    return (
        <>
        <div className="grid justify-around items-center bg-[#6a3463] m-auto pt-10">
            <div className="grid justify-center sm:grid sm:grid-cols-2 sm:items-center sm:p-10">
                <img className="h-auto block mx-auto w-2/4 sm:w-4/5 sm:h-96 sm:ml-8" src="./src/images/M.png" alt="mulherando logo"></img>
                <h1 className="text-[#faab13] text-xl font-bold text-center sm:break-normal sm:tracking-wider sm:text-8xl sm:mr-32 sm:align-middle">MULHERANDO O MUNDO</h1>
            </div>
            <h3 className=" text-white w-96 m-auto text-center font-medium whitespace-pre-wrap break-word pt-6 sm:w-full sm:px-20 sm:text-4xl">DESENVOLVENDO MULHERES CIS/TRANS COM OPORTUNIDADES PROFISSIONAIS E EDUCACIONAIS</h3>

            <div className="grid grid-cols-2 gap-10 py-10 sm:gap-32 sm:py-16">
                <button className="bg-[#faab13] w-28 h-10 sm:w-44 sm:h-16 justify-self-end rounded" type="button">
                    <span className="text-white sm:text-2xl font-semibold">FAÇA PARTE</span>
                </button>
                <button className="bg-white w-28 h-10 sm:w-44 sm:h-16 justify-self-start rounded"type="button">
                    <span className="text-[#faab13] sm:text-2xl font-semibold">PROGRAMAS</span>
                </button>
            </div>

            <div className="bg-white w-96 m-auto rounded-3xl sm:w-11/12 sm:mt-20 sm:px-2 sm:py-10 ">
                <p className="text-[#6a3463] whitespace-pre-wrap break-word text-justify p-10 sm:text-3xl">
                O Mulherando o Mundo é uma organização sem fins lucrativos que busca desenvolver mulheres cis/trans com oportunidades profissionais e educacionais. Nosso principal foco é em grupos minoritários, mulheres de escola pública e/ou baixa renda. Além de informações divulgadas em meios sociais como Instagram, Newsletter e Linkedin, nós também produzimos mentorias de desenvolvimento pessoal e profissional para jovens de países na América Latina e África. Nossa comunidade é o nosso maior forte! Após participar de uma de nossas mentorias, nossa mentorada terá acesso a nossa rede de mulheres e oportunidades fechadas para nossa comunidade, além de eventos e rodas de conversa.
                </p>
            </div>

            <div className="flex flex-col flex-wrap justify-center items-center py-20">
                <h1 className="text-[#1d8590] text-6xl sm:text-9xl">NOSSOS</h1>
                <h1 className="font-playlist-script text-8xl text-[#faab13] sm:text-10xl">Programas</h1>
            </div>

            <div className="bg-white w-96 m-auto rounded-3xl sm:w-11/12 sm:px-2 sm:mt-10 sm:py-5">
                <p className="text-[#1d8590] whitespace-pre-wrap break-word text-justify p-10 sm:text-3xl sm:p-6">
                Nossos programas são iniciativas que priorizam o aprendizado técnico e colaborativo. Oferecemos workshops teóricos e práticos com mentoras de diversos contextos e indentidades para empoderar e profissionalizar cada menina que passa pelos nossos programas.
                </p>
            </div>

            <div className="flex flex-row flex-wrap justify-center py-20">
                <h1 className="font-playlist-script text-[#faab13]">Lugares&nbsp;</h1>
                <h1 className="text-[#faab13]">onde o</h1>
                <h1 className="text-[#ef615d]"><br></br>MOM&nbsp;</h1>
                <h1 className="text-[#faab13]"><br></br>está</h1>
                <h1><br></br></h1>
                <h1 className="font-playlist-script text-[#1d8590] py-10"><br></br>presente</h1>

            </div>

                <div className="bg-white rounded-3xl py-10 w-96 m-auto sm:w-11/12 sm:mx-auto sm:mt-20">
                    <ChartMom />
                </div>

            </div>





        </>
        )
    };
