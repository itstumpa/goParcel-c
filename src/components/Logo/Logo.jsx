import { FaTruck } from 'react-icons/fa';
import { Link } from 'react-router';

const Logo = ({ textColor = "text-black", iconColor = "text-[#34d399]" }) => {
  return (
    <Link to="/" className="flex items-center gap-3 bg-amber-700">
      <div className="relative">
        <FaTruck className={`absolute left-1 bottom-1 text-2xl ${iconColor}`} />
      </div>
      <h1 className={`text-2xl absolute font-black ${textColor}`}>
        goParcel
      </h1>
    </Link>
  );
};

export default Logo;
