import React from 'react'

interface LeftTimelineProps {
  year?: string
  title?: string
  description?: string
  url?: string
  since?: string
  primaryColor?: string
  secondaryColor?: string
}

const LeftTimeline: React.FC<LeftTimelineProps> = ({ year, title, description, url, since, primaryColor, secondaryColor }) => {
  return (
    <div className="flex flex-row-reverse md:contents">
      {/* Container box */}
      <div className="col-start-1 col-end-5 my-4 ml-4 rounded-xl border p-4 font-dosis shadow-2xl transition-transform hover:translate-y-[3px]">
        <a className="cursor-pointer" /* href={url} */ rel="noreferrer" target="_blank">
          <div className="mb-1 font-dosis text-lg dark:font-light text-black dark:text-white">
            <span
              style={{
                backgroundImage: `linear-gradient(135deg, ${primaryColor ?? ''} 0%, ${secondaryColor ?? ''} 100%)`,
                backgroundSize: '100% 0.075em',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 92%',
                transition: 'background-size 0.25s ease-in, opacity 0.25s ease-in',
              }}
            >
              {title}
            </span>
          </div>
        </a>
        <p className="text-justify text-sm leading-tight text-black dark:text-white">{description}</p>
        <p className="mt-1 text-justify font-dosis text-sm leading-tight text-black dark:text-white">{since}</p>
      </div>

      {/* The vertical thingy */}
      <div className="relative col-start-5 col-end-6 md:mx-auto">
        {/* The bar itself */}
        <div className="flex h-full w-6 items-center justify-center">
          <div className="pointer-events-none h-full w-1 bg-slate-500 dark:bg-slate-300"></div>
        </div>

        {/* If year is provided, render the box. */}
        {year ? (
          <div className="animate-pulse2 animate-pulse4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-cell items-center justify-center rounded-md border-2 bg-slate-200 px-2 py-1 shadow-lg hover:shadow-xl dark:bg-slate-700">
            <div className="font-dosis text-sm font-medium text-black dark:text-white">{year}</div>
          </div>
        ) : (
          <div className="absolute top-1/2 -mt-2 ml-1 h-4 w-4 cursor-cell rounded-full bg-slate-500 shadow dark:bg-slate-400"></div>
        )}
      </div>
    </div>
  )
}

export default LeftTimeline
