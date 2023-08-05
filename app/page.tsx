import ThemeToggleButton from '@/app/components/buttons/ThemeToggleButton';

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-between min-h-screen p-24'>
			<h1>HOMEPAGE</h1>
			<ThemeToggleButton />
		</main>
	);
}
