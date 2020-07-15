import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import Link from 'next/link'
import { Date } from './posts/[id]'

import { getSortedPostsData } from "../lib/posts";

import {GetStaticProps} from 'next'

export default function Home({ allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>


    </Layout>
  )
}

export const getStaticProps:GetStaticProps = async ()=> {
  const allPostsData = getSortedPostsData()
  // const date = +(new Date)
  // console.log(allPostsData)
  return { props: { allPostsData } }
}
// 不可同时使用
// export async function getServerSideProps(context) {
//   const date = (new Date).toString()
//   // console.log(context.header)
//   return { props: { date, context: '{a:1}' } }
// }