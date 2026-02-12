import { useState } from "react";
import Logo from '../assets/logos.svg'
import { useTranslation } from "react-i18next";
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

const [langouge, setLangouge] = useState(false)

const { t, i18n } = useTranslation();
  return (
    <nav className="flex p-4 gap-4 justify-around">
      <div className="hidden sm:flex border-l-2 border-t-2 border-b-2 rounded-[25px] p-4 gap-4 items-center justify-around w-[60%]">
        <button className="bg-[#007AFF] w-35.5 h-8.75 rounded-[8.0769px] text-white">{t("navigation.register_now")}</button>
        <ul className="flex gap-4 text-black">
          <li>{t("navigation.about")}</li>
          <li>{t("navigation.programs")}</li>
          <li>{t("navigation.stories")}</li>
          <li>{t("navigation.faq")}</li>
          <li>{t("navigation.contact")}</li>
   <div className="relative">
  <button className="cursor-pointer" onClick={() => setLangouge(!langouge)}>
    <li>{t("navigation.language")}</li>
  </button>

  {langouge && (
    <ul className="absolute top-full mt-2 bg-white shadow rounded p-2">
      <li className="cursor-pointer" onClick={() => { i18n.changeLanguage("ar"); setLangouge(false); }}>
        عربي
      </li>

      <li className="cursor-pointer" onClick={() => { i18n.changeLanguage("en"); setLangouge(false); }}>
        English
      </li>
    </ul>
  )}
</div>
        </ul>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
      </div>


{/* هنا تصميم الجوال  */}
      <div className="flex  w-full justify-between mx-5 gap-4 sm:hidden relative">
        <button className="bg-[#007AFF] w-35.5 h-8.75 rounded-[8.0769px] text-white">{t("navigation.register_now")}</button>
        <button
          className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-xl">☰</span>
        </button>
        {menuOpen && (
          <ul className="absolute top-12 right-0 bg-white text-black rounded shadow-lg p-4 flex flex-col gap-2 z-50 min-w-35 ">
        <li>{t("navigation.about")}</li>
          <li>{t("navigation.programs")}</li>
          <li>{t("navigation.stories")}</li>
          <li>{t("navigation.faq")}</li>
          <li>{t("navigation.contact")}</li>
           <button className="cursor-pointer" onClick={() => setLangouge(!langouge)}>
    <li>{t("navigation.language")}</li>
  </button>

  {langouge && (
    <ul className="absolute top-full mt-2 bg-white shadow rounded p-2">
      <li className="cursor-pointer" onClick={() => { i18n.changeLanguage("ar"); setLangouge(false); }}>
        عربي
      </li>

      <li className="cursor-pointer" onClick={() => { i18n.changeLanguage("en"); setLangouge(false); }}>
        English
      </li>
    </ul>
  )}
          </ul>
        )}
        
      </div>

    </nav>
  )
}

export default Nav