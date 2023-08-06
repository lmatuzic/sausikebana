import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import ThemeToggleButton from '../buttons/ThemeToggleButton';
import MobileNavigation from './MobileNavigation';

export default function Navigation() {
	return (
		<nav className='w-full px-4 py-2 mb-8 border-b'>
			<div className='container flex items-center justify-between'>
				<Link href={'/'} className='hidden sm:flex'>
					Logo
				</Link>

				<ul className='flex justify-between w-full sm:w-auto sm:items-center'>
					<li className='hidden mr-6 sm:flex'>
						<Link href={'/interests'}>Interests</Link>
					</li>

					<li className='hidden mr-6 sm:flex'>
						<UserButton afterSignOutUrl='/' />
					</li>

					<li>
						<ThemeToggleButton />
					</li>

					<li className='flex sm:hidden'>
						<MobileNavigation />
					</li>
				</ul>
			</div>
		</nav>
	);
}
