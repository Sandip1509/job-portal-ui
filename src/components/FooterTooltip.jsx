import { useId } from "react";

export const FooterTooltip = ({ label, tooltip }) => {
  const tooltipId = useId();

  return (
    <a
      role="button"
      tabIndex={0}
      aria-describedby={tooltipId}
      className="group relative inline-flex cursor-default rounded-sm
                 hover:text-white focus:outline-none
                 focus-visible:text-white focus-visible:ring-2
                 focus-visible:ring-primary-400 focus-visible:ring-offset-2
                 focus-visible:ring-offset-gray-900
                 transition-colors duration-300"
    >
      <span className="relative z-10">{label}</span>

      <div className="absolute -inset-2 rounded-lg bg-gradient-to-r
                       from-primary-600/20 to-purple-600/20 opacity-0
                       transition-opacity duration-300
                       group-hover:opacity-100 group-focus-visible:opacity-100" />

      <div
        id={tooltipId}
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3
                   w-max max-w-[200px] -translate-x-1/2 scale-95 origin-bottom
                   rounded-xl border border-gray-700/60 bg-gray-900
                   px-3 py-2 text-center text-xs text-gray-300 shadow-2xl
                   opacity-0 transition-all duration-300
                   group-hover:opacity-100 group-hover:scale-100
                   group-focus-visible:opacity-100 group-focus-visible:scale-100"
      >
        <span className="mb-0.5 block bg-gradient-to-r from-primary-400
                          to-purple-400 bg-clip-text font-semibold text-transparent">
          {label}
        </span>
        {tooltip}
        <div className="absolute left-1/2 top-full -mt-1 h-2 w-2 -translate-x-1/2
                         rotate-45 border-b border-r border-gray-700/60 bg-gray-900" />
      </div>
    </a>
  );
};
