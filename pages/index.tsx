import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import { MainLayout } from '../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MainLayout>
        <h1>Home</h1>
        <Link href='/about'>About</Link>
      </MainLayout>
    </>
  )
}
