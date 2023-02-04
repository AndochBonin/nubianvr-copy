import Head from 'next/head'
import Image from 'next/image'
import Categories from '../components/hero section/categories'
import Hero from '../components/hero section/hero'
import NewIn from '../components/hero section/newIn'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Hero/>
      <Categories/>
      <NewIn/>
    </div>
  )
}
