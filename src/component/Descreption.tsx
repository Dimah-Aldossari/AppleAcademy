import AppleLogo from '../assets/AppleLogo.svg'
import { useTranslation } from "react-i18next";

function Description() {
const { t } = useTranslation();
  return (
<section className="min-h-screen md:flex items-center justify-center">
  <div className="flex flex-col items-center justify-center pt-8.25 pr-6 pb-8 pl-6">
    <div className="bg-[#FAFAFA] w-full md:w-6xl flex flex-col items-center justify-center p-10 rounded-3xl m-10 h-115">
      <div className="flex flex-col items-center justify-center gap-4 p-10">
        <img src={AppleLogo} alt="Apple Logo" />
        <h2 className="font-ibm-bold text-[20px] md:text-[32px] leading-9 text-center whitespace-nowrap">
        {t("academy.title")}
        </h2>
        <p className='font-ibm-regular text-[14px] leading-6 text-center  md:text-[20px] md:text-[#3E3E3E] md:max-w-2xl max-w-xs  '>
          {t("academy.subtitle")}
        </p>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center gap-6 p-10">
      <h1 className='font-ibm-bold text-[32px] leading-9 text-center'>{t("academy.section_title")}</h1>
      <p className='text-[#3E3E3E] text-[20px] font-ibm-regular leading-6 md:max-w-4xl max-w-xs text-justify'>
        {t("academy.description")}
      </p>
    </div>
  </div>
</section>
  )
}

export default Description