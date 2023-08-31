import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../../components/Navbar'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function contact() {
  return (
    <>
      <MainLayout>
        <h1>Contact</h1>
        <Link href='/'>Home</Link>
      </MainLayout>
    </>
  )
}
