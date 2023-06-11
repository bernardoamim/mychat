'use client'
import { useState, type FC } from 'react'
import Button from '../ui/Button'
import Image from 'next/image'

interface IPageProps {}

const Login: FC<IPageProps> = () => {
  const [isLoading, setIsLoading] = useState(false)

  async function loginWithGoogle() {}

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">
            logo
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <Button
              isLoading={isLoading}
              type="button"
              className="max-w-sm mx-auto w-full gap-2"
              onClick={loginWithGoogle}
            >
              <Image
                src="/google_g_logo.svg"
                width={18}
                height={18}
                alt="Google Logo"
              />
              Google
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
