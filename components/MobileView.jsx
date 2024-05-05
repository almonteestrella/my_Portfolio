import { navLinks } from '@/app/utils';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { AlignLeft } from 'lucide-react';
import Link from 'next/link';

export function MobileView() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className='lg:hidden'>
                <Button variant='outline' size='icon'>
                    <AlignLeft />
                    <span className='sr-only'>toggle links</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align='start'
                sideOffset={20}
                className='w-56 lg:hidden'
            >
                {navLinks.map(({ text, path }, index) => (
                    <DropdownMenuItem
                        key={index}
                        className='py-2 custom-transition rounded-xl hover:text-white mb-1'
                    >
                        <Link href={path} className='px-2 capitalize'>
                            {text}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
