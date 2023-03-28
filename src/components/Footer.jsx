import React, { useContext } from "react";
import ContextOptions from "./ContextOptions";

export default function Footer() {
    const { classDisplay } = useContext(ContextOptions);

    return (

          <ContextOptions.Consumer>

            {(context) =>
            <div className={classDisplay}>
              <div className="bg-[#6a3463] flex flex-col flex-wrap content-center text-white text-base pt-5 py-3">
                <img className="block mx-auto w-16 h-16" src="./src/images/M.png" alt="logo" />
                <p className="py-1">mulherandoomundo@gmail.com</p>
                <p>&#169; 2020 - MULHERANDO O MUNDO</p>
              </div>
            </div>

            }

          </ContextOptions.Consumer>

    )
};
