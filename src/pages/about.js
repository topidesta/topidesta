import React from 'react'
import { Link } from 'gatsby'
import Layout from '@components/Layout'
import SEO from '@components/seo'

/* eslint-disable jsx-a11y/accessible-emoji */
const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About me</h1>
    <p>topidesta-dev.me rumah baru dari blog 
    <a 
      href="#"> topidesta.wordpress.com</a> (too much ads, there).
    Kali ini Blog ditenagai oleh beberapa teknologi JavaScript (nodejs) dan bukan lagi PHP (wordpress), berhubung di wordpress terlalu
    <b> BANYAK IKLAN (ads)</b> yang mengganggu, baik pengunjung ataupun saya sebagai penulis merasa terganggu, akhirnya coba cari tau teknologi yang tren saat ini (2019)
    Yes, pertama, hunting domain dulu, kebetulan saya dapat <b>GERATIS alias freee</b>, nanti akan saya tulis juga cara mendapatkannya :) 😁, berikut ini 
    yang gw inget dalam membentuk blog list nyah.
    </p>
    <p>
      Beberapa teknologi pengembangan website sederhana ini: <br />
      1. NAMECHEAP <br />
      2. GITHUB <br />
      3. NETLIFY <br />
      4. GATSBYJS <br />
      5. YARN PACKAGE MANAGER <br />
      6. VSCodium <br />
      7. WINDOWS 10
    </p>

    <p>Untuk pengunjung yang kebetulan lewat, maaf. design masih dalam tahap pengembangan (gw masih belajar dari video ~ dokumentasi gatsbyjs) 
      jadi nikmati dulu suguhan tampilan sekarang ya 😅
    </p>

    <p>Akhir kata, happy coding!</p>
    
    <p>
      Kembali ke &nbsp;
      <span>
        <Link to="/">home</Link>
      </span>
      .
    </p>
  </Layout>
)
/* eslint-enable jsx-a11y/accessible-emoji */

export default AboutPage
