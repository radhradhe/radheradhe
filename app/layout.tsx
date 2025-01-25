import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Sessioprovider from '@/components/session-provider'
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from '@/components/Navbar';
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Home finderr',
  description: 'The fastest way to find homes in Goa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <meta  name="google-adsense-account" content="ca-pub-7557474007097933">

      </meta>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
            </meta>
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7557474007097933"
     crossOrigin="anonymous"></script>
     <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
      </head>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <main className='w-full   mx-4'>
              <Analytics/>
              <SpeedInsights/>
            </main>
            <Navbar/>
          {children}
          </ThemeProvider>
          <Toaster />
          <Sessioprovider/>
      </body>
    </html>
  )
} 
