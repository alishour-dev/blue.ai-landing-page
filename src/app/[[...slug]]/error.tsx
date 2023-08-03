"use client"

import { Button } from "@/comps"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
	console.log(error)
	return (
		<div className='h-screen w-screen flex-center'>
			<div className='flex-col gap-4 rounded-md border-2 border-red-600 p-4 flex-center'>
				<h2 className='text-2xl font-bold text-red-600'>Something went wrong!</h2>
				<Button onClick={() => reset()} variant='error' className='rounded-md'>
					Try again
				</Button>
			</div>
		</div>
	)
}
