import React from 'react'
import { useTranslation } from 'react-i18next';
import "../../../i18n"

interface Props {
    link?: string;
  }

function Button({link}:Props) {
  const { t, i18n } = useTranslation();
  const cambiarIdioma = (nuevoIdioma:string) => {
    i18n.changeLanguage(nuevoIdioma);
  };

  return (
    <div>
        <button type='submit' value={"Enviar"} className='mt-4 h-8 w-72 rounded-md bg-customGreen items-center p-1 text-white focus:placeholder-transparent focus:outline-none hover:bg-customGreenDark'>
            {t('form_button_text')}
        </button>
    </div>
  )
}

export default Button