import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'

export default function About() {
  return (
    <>
      <h1>About</h1>
      <Link href='/'>Home</Link>
    </>
  )
}



About.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
