import Link from 'next/link'
import { headers, cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Loginform from '../navbar/loginform'

export default function Login({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  const signIn = async (formData: FormData) => {
    'use server'

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }

    return redirect('/')
  }

 
  

  const signUp = async (formData: FormData) => {
    'use server'

    const origin = headers().get('origin')
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      return redirect('/login?message=Could not authenticate user')
    }

    return redirect('/login?message=Check email to continue sign in process')
  }

  return (
   <div className='justify-center flex '>
     <div className="flex-1 pt-2  flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
    
      <h3 className="text-3xl font-extrabold mb-8 max-md:text-center">
              Sign in
            </h3>

      <form
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action={signIn}
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
         <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="jajvascript:void(0);" className="text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>
        <button className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2">
          Sign In
        </button>
        <button
          formAction={signUp}
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
        >
          Sign Up
        </button>
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
      <p className="my-4 text-sm text-gray-400 text-center">or continue with</p>
      <Loginform/>
    </div>
   </div>
  )
}
 