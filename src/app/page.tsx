import Particles from '@/components/ui/particles'
import Profile from '@/components/ui/profile'
import Signature from '@/components/ui/signature'
import SkillIssues from '@/components/home/skill-issues'

export default function Home() {
  /* Could have put stuff in here put anyway */
  return (
    <>
      {/* Hero Kinda Section */}
      <div className="mb-8 h-full min-h-[500px] w-full sm:mt-32">
        <div className="m-auto flex w-full max-w-screen-lg flex-col items-center justify-center px-5 sm:flex-row">
          {/* Left */}

          <div className="flex flex-col justify-center sm:mr-10">
            <h2 className="text-edge-outline animate-title cursor-default whitespace-nowrap  text-center font-display text-4xl font-bold text-slate-800 duration-1000 dark:text-slate-200 sm:text-4xl md:text-5xl lg:text-6xl">
              {`Thien Nguyen`}
            </h2>
            {/* Description */}
            <div className="mb-2 max-w-md space-y-3 py-5 text-center text-gray-500 dark:text-gray-500">
              <p>A person who loves story-rich RPG-Maker games.</p>
              <p>Often time coding. Sometimes drawing.</p>
              <p>✥ And always learning ✥</p>
            </div>
            {/* Signature */}
            <Signature />
          </div>

          {/* Right */}
          {/* Profile */}
          <Profile />
        </div>
        <SkillIssues />
      </div>
      {/* TODO: kbar will be here Ctrk+K */}
    </>
  )
}
