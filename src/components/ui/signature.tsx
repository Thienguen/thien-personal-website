'use client'

import Typewriter from 'typewriter-effect'

export default function Signature() {
  return (
    <>
      {/* Typewriter */}
      <div className="my-2 animate-fade-in-2 text-center font-signature text-2xl text-slate-800 dark:text-gray-200">
        <Typewriter
          options={{
            strings: ['Dreams', 'Thien Van Ky Nguyen'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </>
  )
}
