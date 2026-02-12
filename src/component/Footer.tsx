import group from '../assets/group.svg'
import X from '../assets/x-icon.svg'
import Instagram from '../assets/instagram.svg'
import LinkedIn from '../assets/linkedin.svg'
import Location from '../assets/location.svg'  
import { useTranslation } from "react-i18next";

function Footer() {
  const {t} = useTranslation()
  return (
    <footer className="w-full bg-black px-12 py-10">
      
      <div className="mb-10">
        <img src={group} alt="Developer Academy Logo" />
      </div>

      <div className="md:flex items-start justify-between text-white">
        
        <div className="mb-4 md:max-w-md ">
          <p className="text-sm">
         {t("footer.address")}
          </p>
        </div>
<div className="flex flex-col items-end gap-6 text-white w-full">
  <div className="flex flex-row gap-4 md:gap-16 text-sm font-semibold w-full md:w-auto">
    <span>{t("navigation.about")}</span>
    <span>{t("navigation.programs")}</span>
    <span>{t("navigation.stories")}</span>
    <span>{t("navigation.faq")}</span>
    <span>{t("navigation.contact")}</span>
  </div>
  <div className="flex gap-4 md:gap-8">
    <img src={X} alt="X Icon" className="h-6 w-6" />
    <img src={Instagram} alt="Instagram Icon" className="h-6 w-6" />
    <img src={LinkedIn} alt="LinkedIn Icon" className="h-6 w-6" />
    <img src={Location} alt="Location Icon" className="h-6 w-6" />
  </div>
</div>

      </div>
    </footer>
  )
}

export default Footer