import Head from 'next/head'
import Link from "next/link";
import Layout, {siteTitle} from "./components/layout";
import utilStyle from "../styles/utils.module.css"
import {getStoredPostsData} from "../lib/posts"
import Date from "./components/date";

export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyle.headingMd}>
                <p>I'm Arm. I'm a software engineer who write a program every day 😂.</p>
                <p>
                    (This is a sample website - you'll be building a site like this on {' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>)
                </p>
            </section>

            <section className={`${utilStyle.headingMd} ${utilStyle.padding1Px}`}>
                <h2 className={utilStyle.headingLg}>Blog</h2>
                <ul className={utilStyle.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyle.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                {title}
                            </Link>
                            <br/>
                            <small className={utilStyle.lightText}>
                                <Date dateString={date}/>
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getStoredPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
