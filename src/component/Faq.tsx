import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";

const faqItems = [
  {
    id: 1,
    question: "faq.q1",
    answer: "faq.a1"
  },
  {
    id: 2,
    question: "faq.q2",
    answer: "faq.a2"
  },
  {
    id: 3,
    question: "faq.q3",
    answer: "faq.a3"
  }
];
function Faq() {
    const [openId, setOpenId] = useState<number | null>(null)
    const {t} = useTranslation()
  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-100 bg-[#1c1c1e]">
      <h2 className="font-ibm-bold font-semibold mb-4 text-center text-white">{t("faq.title")}</h2>
      {faqItems.map((item) => {  
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="border-b border-gray-300 pb-4 mb-4 w-full max-w-2xl mx-auto">
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between text-left text-white"
            >
              <span className="flex items-center gap-2">
                {t(item.question)}
              </span>
              <IoIosArrowDown
                className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                color="#fff"
              />
            </button>
            {isOpen && (
              <p
                className="mt-4 text-center font-[IBM Plex Sans Arabic] text-[#585353]"
              >
                {t(item.answer)}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Faq