import Link from 'next/link';
import ThemeToggleButton from '../buttons/ThemeToggleButton';

export default function Navigation() {
	return (
		<nav className='container flex items-center justify-between py-2 mx-auto'>
			<Link href={'/'}>Logo</Link>

			<div className='flex items-center'>
				<ul className='mr-6'>
					<li>
						<Link href={`#`}>Sign in</Link>
					</li>
				</ul>

				<ThemeToggleButton />
			</div>
		</nav>
	);
}
