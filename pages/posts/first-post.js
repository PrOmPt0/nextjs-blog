import Link from "next/link";
import Head from 'next/head'
import Layout from "../../components/layout";
import Alert from "../../components/alert";

export default function FirstPost() {
    return (

        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2><Link href='/'><a >back home</a></Link></h2>
            <Alert type='error'><h3>Success</h3></Alert>
        </Layout>
    )
}