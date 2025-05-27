import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { getAuthSession } from '@/lib/auth'
import React from 'react'

const Page = async() => {
  const session = await getAuthSession();
  return (
    <MaxWidthWrapper className='mt-16'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl bg-gradient-to-b from-zinc-300 to-zinc-500 bg-clip-text text-transparent'>Dashboard</h1>
      <p>{session?.user.email}</p>
    </MaxWidthWrapper>
  )
}

export default Page