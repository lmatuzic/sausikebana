import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui/Sheet';
import { Menu } from 'lucide-react';

export default function MobileNavigation() {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu />
			</SheetTrigger>

			<SheetContent>
				<SheetHeader className='mt-6'>
					<SheetTitle>Are you sure absolutely sure?</SheetTitle>
				</SheetHeader>

				<SheetDescription>
					This action cannot be undone. This will permanently delete your account and remove your
					data from our servers.
				</SheetDescription>
			</SheetContent>
		</Sheet>
	);
}
