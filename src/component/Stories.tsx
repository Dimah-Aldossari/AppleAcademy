import { useTranslation } from "react-i18next";

import Raghad from '../assets/raghad.png';
function Stories() {
  const {t} = useTranslation()
  return (
  <div className="w-full px-6 md:py-16">
  <div className="mx-auto max-w-6xl rounded-4xl bg-[#FAFAFA] px-12 py-14">
    <h2 className="text-center text-[24px] font-semibold mb-12">
 {t("stories.title")}
    </h2>

    <div className="md:flex items-center justify-between gap-16">
      <article className="flex-1">
        <p className="text-[20px] font-semibold leading-7 mb-6">
          <span className="text-blue-600 text-3xl leading-none">“ </span>
        {t("stories.quote")}
        </p>

        <p className="text-[12px] md:text-[16px] leading-7 text-[#3E3E3E]">
    {t("stories.body")}
          <span className="text-blue-600 text-3xl leading-none"> ”</span>
        </p>
      </article>

      <div className="flex flex-col items-center">
        <div className="w-65 h-80 rounded-2xl bg-gray-300 overflow-hidden">
          <img
            src={Raghad}
            alt="Raghad"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <p className="mt-4 font-semibold text-[16px]">
          Cohort 2022 Alumni Raged Alshehri,
        </p>
        <p className="text-sm text-gray-500">
          Information System
        </p>
      </div>
    </div>

   
  </div>
</div> )
}

export default Stories