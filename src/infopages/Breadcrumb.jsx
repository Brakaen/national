import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Breadcrumb = ({ items = [] }) => {
  const navigate = useNavigate();

  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <Fragment key={index}>
              <li>
                {isLast ? (
                  
                  <span className="text-red-400 font-medium">
                    {item.label}
                  </span>
                ) : (
                  // Clickable link
                  <button
                    onClick={() => navigate(item.path)}
                    className="text-white hover:underline bg-transparent border-none cursor-pointer"
                  >
                    {item.label}
                  </button>
                )}
              </li>

            
              {!isLast && (
                <li className="text-white opacity-50">
                  /
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
