import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import { parseISO, format } from 'date-fns'

import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingX1}>
                    {postData.title} </h1>
                <div className={utilStyles.lightText}><Date dateString={postData.date} />  </div>
                {/* {postData.id} */}

                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export function Date({ dateString }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d,yyyy')}</time>
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return { paths, fallback: false }
}
export async function getStaticProps({ params, ...rest }) {
    console.log(params, rest)
    const postData = await getPostData(params.id)
    return { props: { postData } }
}