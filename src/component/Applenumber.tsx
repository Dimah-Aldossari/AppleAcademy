import { useTranslation } from "react-i18next";

function Applenumber() {
  const {t} = useTranslation()
  return (
  <section className="flex flex-col items-center justify-center bg-[#242424] px-12 py-16">
      
      <p className="mb-14 text-center text-[28px] font-semibold text-white">
      {t("global.section_title")}
      </p>

      <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-24 text-white">
        <div className="flex max-w-xs flex-col items-center md:pr-12 text-center mb-6 md:mb-0">
          <p className="md:text-5xl font-semibold leading-none ">{t("global.apps.count")}</p>
          <p className="md:mb-4 text-2xl font-medium">{t("global.apps.label")}</p>
          <p className="md:text-sm leading-6 text-white/80">
          {t("global.apps.description")}
          </p>
        </div>

        <div className="hidden md:block h-32 w-px bg-white/40" />

        <div className="flex max-w-xs flex-col items-center md:pr-12 text-center mb-6 md:mb-0">
          <p className="md:text-[40px] font-semibold leading-none">{t("global.companies.count")}</p>
          <p className="md:mb-4 text-[22px] font-medium">{t("global.companies.label")}</p>
          <p className="md:text-sm leading-6 text-white/80">
          {t("global.companies.description")}
          </p>
        </div>

        <div className="hidden md:block h-32 w-px bg-white/40" />

        <div className="flex max-w-xs flex-col items-center text-center">
          <p className="md:text-[40px] font-semibold leading-none">{t("global.nationalities.count")}</p>
          <p className="md:mb-4 text-[22px] font-medium">{t("global.nationalities.label")}</p>
          <p className="md:text-sm leading-6 text-white/80">
          {t("global.nationalities.description")}
          </p>
        </div>

      </div>
    </section>
  )
  
}

export default Applenumber