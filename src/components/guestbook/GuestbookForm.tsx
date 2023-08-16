'use client'

import { AiOutlineSend } from 'react-icons/ai'
import { useGuestbookWrapper } from '@/hooks/useGuestbookWrapper'
import { GuestbookEntry } from '@/components/guestbook/GuestbookEntry'
import { SignIn, SignOut } from '../ui/auth-buttons'
import LoadingSpinner from '../ui/loading-spinner'
import SuccessMessage from '../ui/success-message'

/**
 * user login: useSession
 *   - sign in and sign out buttons
 * guestbook entries: useEntries
 *   - pull data from api, and display it (via planetscale + prisma)
 * form submission: useForm
 *   - customed Form, with a text area and a submit button
 *
 * State: + isLoading, + showSuccessMessage
 */
export default function GuestbookForm() {
  /* Hooks */
  const {
    isLoading,
    showSuccessMessage,

    register,
    session,
    entries,

    formOnSubmit,
    hanleEntryCreate,

    handleEntryDelete,
    // handleDeleteClick,
    /* Something something */
  } = useGuestbookWrapper()

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="font-dosis text-lg leading-6 text-gray-900 dark:text-gray-100">
          {`Journey back to the 90's technologies guestbook! Leave your mark and let me know you were here in this retro digital oasis. `}
        </div>
        {session?.user ? <SignOut /> : null}
      </div>

      {/* Form and already sign-in */}
      {session?.user && (
        <div className="flex w-full items-center justify-end pt-2">
          {/* <SignOut /> */}
          <div className="mx-auto my-2 w-full rounded-xl border border-gray-200 bg-slate-200 px-6 py-2 shadow-xl shadow-gray-400 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
            <div className="items-center text-center">
              <form onSubmit={hanleEntryCreate(formOnSubmit)} className="mb-3 flex flex-row items-center space-y-3">
                <label htmlFor="content" className="sr-only">
                  Your Message
                </label>
                <textarea
                  {...register('content', { required: true })}
                  id="content"
                  aria-label="Your message"
                  placeholder="君の名は。"
                  required
                  rows={1}
                  maxLength={500}
                  className="w-11/12 rounded-md border-2 border-gray-300 bg-slate-200 p-3 text-xs shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white dark:focus:border-gray-700 dark:focus:ring-neutral-600"
                />
                <button
                  type="submit"
                  className="ml-5 flex w-20 flex-row place-items-center justify-center rounded-lg bg-slate-300 pb-2 pt-0.5 font-dosis text-sm font-semibold  tracking-wider ring-gray-300 transition-all hover:bg-slate-300 hover:ring-2 dark:bg-gray-600"
                  disabled={!session?.user || isLoading} // Disable the button when user is not signed in or when loading is in progress
                >
                  {isLoading ? (
                    <LoadingSpinner stuff="...Submitting" />
                  ) : (
                    <>
                      <AiOutlineSend className="mr-0.5 mt-0.5 h-4 w-4 -rotate-45" />
                      <span className=" mt-1">Sign</span>
                    </>
                  )}
                </button>
              </form>
              {showSuccessMessage && <SuccessMessage>Thanks for signing my guestbook! 💮</SuccessMessage>}
            </div>
          </div>
        </div>
      )}

      {/* not sign-in */}
      {!session?.user && (
        <div className="flex w-full justify-center text-center">
          <SignIn />
        </div>
      )}

      {/* All entries there is */}
      {entries?.length === 0 ? (
        <>
          <LoadingSpinner stuff="...Chottomattekudasai" />
        </>
      ) : (
        <div className="w-full">
          {entries?.map((entry) => (
            <GuestbookEntry key={entry.id.toString()} entry={entry} user={session?.user} handleEntryDelete={ handleEntryDelete}/>
          ))}
        </div>
      )}
    </>
  )
}
