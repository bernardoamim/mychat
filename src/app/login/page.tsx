'use client'
import { useState, type FC } from 'react'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'

interface IPageProps {}

const Login: FC<IPageProps> = () => {
  const [isLoading, setIsLoading] = useState(false)

  async function loginWithGoogle() {
    setIsLoading(() => true)
    try {
      await signIn('google')
    } catch (error) {
      toast.error('Something went wrong with your login.')
    } finally {
      setIsLoading(() => false)
    }
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">
            <Image
              src="/google_g_logo.svg"
              width={18}
              height={18}
              alt="Chat Logo"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <Button
              isLoading={isLoading}
              type="button"
              className="max-w-sm mx-auto w-full gap-2"
              onClick={loginWithGoogle}
            >
              {!isLoading ? (
                <Image
                  src="/google_g_logo.svg"
                  width={18}
                  height={18}
                  alt="Google Logo"
                />
              ) : null}
              Google
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
