import React from 'react'
import { useTranslation } from 'react-i18next';
import "../../../i18n"

interface Props {
    link?: string;
  }

function Button({link}:Props) {
  const { t } = useTranslation();
  
  return (
    <div>
        <button type='submit' value={"Enviar"} className='mt-4 h-8 w-72 rounded-md bg-green-700 items-center p-1 text-white focus:placeholder-transparent focus:outline-none hover:bg-green-900'>
            {t('form_button_text')}
        </button>
    </div>
  )
}

export default Button