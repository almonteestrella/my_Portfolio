import { Poppins } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

import Footer from '@/components/Footer';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '900'],
});

export const metadata = {
    title: 'Juan Almonte Portfolio',
    description:
        'Welcome to the freelance portfolio of Juan Almonte, a skilled web developer specializing in front-end and back-end technologies. Explore a showcase of projects, skills, and experiences.',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body
                className={`${poppins.className} bg-[#F3F8FF] dark:bg-[#192333]`}
            >
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    <main className=''>{children}</main>
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
