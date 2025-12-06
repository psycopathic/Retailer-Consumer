import { Button } from '@/components/ui/button';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React from 'react'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
      <h1 className={`text-6xl font-bold font-playwrite-nz`}>
        The Ultimate Platform for <span className="text-primary">E-commerce</span>
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
        Discover a new way to manage your projects and collaborate with your team. Re-Con provides all the tools you need to succeed.
      </p>
      <div className="mt-8 flex gap-4">
        <Button asChild size="lg">
          <Link href="/sign-up">Get Started for Free</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">Contact Sales</Link>
        </Button>
      </div>
    </div>
  )
}

export default page