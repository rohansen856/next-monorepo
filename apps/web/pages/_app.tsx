import '../styles/global.css'
import React, { useState } from 'react'
import type { AppProps } from 'next/app'
import { Session, createBrowserSupabaseClient, SessionContextProvider } from 'supabase'
import Head from 'next/head'

function MyApp({
    Component,
    pageProps,
}: AppProps<{
    initialSession: Session
}>) {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient())

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content="a simple app for registered users to publish their novel or parody for free"
                />
                <meta
                    name="keywords"
                    content="parody, novel, author, publish novel, anime parody, storyover, whatif"
                />
                <meta httpEquiv="X-UA-Compatible" content="IE=7" />
                <meta name="theme-color" content="#000000" />
            </Head>
            <SessionContextProvider
                supabaseClient={supabaseClient}
                initialSession={pageProps.initialSession}
            >
                <Component {...pageProps} />
            </SessionContextProvider>
        </>
    )
}

export default MyApp
