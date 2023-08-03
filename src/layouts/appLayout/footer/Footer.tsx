import Image from "next/image"
import { v4 as newId } from "uuid"

import { MotionElement, MotionLink } from "@/comps"
import { PATHS } from "@/constants"
import { basicStagger, fade, scaleUp, slideBtm, slideUp } from "@/lib/framer-motion/variants"
import type { ImgPropsWithoutDimensions, LinkType } from "@/types"

import { socialIcons } from "./icons"

export interface FooterProps {
	logo: Omit<ImgPropsWithoutDimensions, "alt">
	groups: {
		label: string
		links: LinkType[]
	}[]
	socialLinks: { href: string; icon: string; type?: "Facebook" | "Instagram" | "LinkedIn" }[]
}

export const Footer = ({ logo, groups, socialLinks }: FooterProps) => (
	<MotionElement
		as='footer'
		key={newId()}
		{...basicStagger()}
		viewport={{ once: true }}
		className='w-full bg-primary pt-16 lg:pt-24'>
		<div className='!container mx-auto px-6 pb-8 lg:pb-14'>
			<div className='-mx-4 flex flex-wrap'>
				<div className='w-full px-4 sm:w-2/3 lg:w-3/12'>
					<MotionLink {...scaleUp} href={PATHS.HOME} className='mb-10 block w-max max-w-[160px]'>
						<Image
							src={logo.src}
							alt='Blue.Ai logo'
							width={63}
							height={112}
							placeholder='blur'
							blurDataURL={logo.blurDataURL}
							style={{ marginRight: 20 }}
							loading='lazy'
							className='max-w-full prevent-selection'
							quality={100}
						/>
					</MotionLink>
				</div>

				{groups?.map(({ label, links }) => (
					<div key={label} className='w-full px-4 sm:w-1/2 lg:w-2/12'>
						<div className='mb-10 w-full'>
							<MotionElement as='h4' {...fade} className='mb-6 text-lg font-black text-white'>
								{label}
							</MotionElement>
							<div>
								{links?.map(({ href, label }) => (
									<MotionLink
										{...fade}
										href={href}
										key={label}
										className='animated-underline text-body-color mb-2.5 block w-max text-base text-white transition-opacity duration-300 ease-in-out hover:opacity-80'>
										{label}
									</MotionLink>
								))}
							</div>
						</div>
					</div>
				))}

				<div className='w-full px-4 sm:w-1/2 lg:w-3/12'>
					<div className='mb-10 w-full'>
						<MotionElement as='h4' {...fade} className='mb-6 text-lg font-black text-white'>
							Follow us
						</MotionElement>

						{!!socialLinks?.length && (
							<MotionElement
								key={newId()}
								{...slideUp}
								viewport={{ once: true }}
								className='flex w-max items-center gap-3'>
								{socialLinks?.map(({ href, icon, type = "social media" }) => {
									const Icon = socialIcons[icon as keyof typeof socialIcons]

									return (
										<a
											href={href}
											key={newId()}
											className='transition-custom text-white hover:text-secondary-300'
											rel='noopener noreferrer'
											target='_blank'
											aria-label={`visit our ${type} page, and stay tuned!`}>
											<Icon width={32} height={32} />
										</a>
									)
								})}
							</MotionElement>
						)}
					</div>
				</div>
			</div>
		</div>
		{/* Footer bottom section  */}
		<div className='bg-white py-3 flex-center'>
			<MotionElement as='p' className='text-[17px] leading-5 text-primary lg:leading-6' {...slideBtm()}>
				© {new Date().getFullYear()} Blue.AI All rights reserved
			</MotionElement>
		</div>
	</MotionElement>
)
