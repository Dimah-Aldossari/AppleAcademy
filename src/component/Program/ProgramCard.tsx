
import { useTranslation } from "react-i18next";

interface ProgramCardProps {
    title: string;
    description: string;
    duration: string;
    seats: string;
    status: string;
    statusColor: string;
}
function ProgramCard(props: ProgramCardProps) {
    const { t } = useTranslation(); 
  const { title, description, duration, seats, status, statusColor } = props;
  return (
  <div className="mx-2 rounded-[20px] border border-[#E5E5E5] p-8 w-full max-w-75 h-79">
      <h3 className="text-xl font-semibold">{t(title)}</h3>

      <div className="mt-4 text-sm  text-gray-600 space-y-1">
        <p>{t(duration)}</p>
        <p>{t(seats)}</p>
      </div>

      <p className={`mt-4 text-sm ${statusColor}`}>
        {t(status)}
      </p>

      <p className="mt-4 text-sm leading-6 text-gray-700 line-clamp-4">
  {t(description)}      </p>
    </div>
  )
}

export default ProgramCard