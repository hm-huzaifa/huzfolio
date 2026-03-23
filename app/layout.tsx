import type { Metadata } from 'next';
import { Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import LoadingScreen from '@/components/LoadingScreen';

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['200', '400', '600', '800'],
    variable: '--font-manrope',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-jetbrains-mono',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Huzaifa | Software Engineer',
    description: 'Senior Software Engineer portfolio',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={`${manrope.variable} ${jetbrainsMono.variable} bg-base min-h-screen text-text font-sans selection:bg-accent selection:text-white`}>
        <LoadingScreen />
        {children}
        </body>
        </html>
    );
}

