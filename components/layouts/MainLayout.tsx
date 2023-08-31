import Head from 'next/head'
import Link from 'next/link'
import React, { FC, ReactNode } from 'react'
import { Navbar } from '../Navbar'

interface MyComponentProps {
  children: ReactNode;
}

export const MainLayout: FC<MyComponentProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}
