import { Button } from "@/comps"
import { PATHS } from "@/constants"
import { TransitionRoot } from "@/lib/headlessui"

export default function NotFound() {
	return (
		<TransitionRoot as='main' appear show className='flex min-h-full flex-col px-6 py-6 sm:py-32 lg:px-8'>
			<div className='mb-8 flex-col gap-4 text-center flex-center'>
				<p className='text-[12rem] font-extrabold leading-[24rem] text-gray-200 md:text-[22rem]'>404</p>
				<p className='text-2xl font-bold text-black md:text-3xl'>You have found a secret place.</p>
				<p className='mx-auto max-w-lg text-gray-500'>
					Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to
					another URL.
				</p>
			</div>

			<div className='gap-x-6 flex-center'>
				<Button
					as='Link'
					variant='primary'
					href={PATHS.HOME}
					className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
					Go back home
				</Button>

				<Button
					as='Link'
					variant='primary-outlined'
					href={PATHS.CONTACT_US}
					className='text-sm font-semibold text-gray-900'
					aria-hidden='true'>
					Contact support
					<span>&rarr;</span>
				</Button>
			</div>
		</TransitionRoot>
	)
}
