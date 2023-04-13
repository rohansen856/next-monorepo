# INFO

Supabase database (Postgres) connector package

# PURPOSE

For globally enabling user SignUp, SignIn, Authentication etc.

# REASON FOR CHOOSING THIS DATABASE

Supabase has good built in authentication method with email, google, github and other providers and it can globally manage user signin state.

# PACKAGES USED

```json
"dependencies": {
    "@supabase/auth-helpers-nextjs": "^0.6.0",
    "@supabase/auth-helpers-react": "^0.3.1",
    "@supabase/supabase-js": "^2.20.0"
  }
```

# METHOD

--1> Wrap Your \_app.tsx like this

```tsx
import type { AppProps } from 'next/app'
import { createBrowserSupabaseClient } from 'supabase'
import { SessionContextProvider } from 'supabase'
import type { Session } from 'supabase'

function MyApp({
    Component,
    pageProps,
}: AppProps<{
    initialSession: Session
}>) {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient())

    return (
            <SessionContextProvider
                supabaseClient={supabaseClient}
                initialSession={pageProps.initialSession}
            >
                <Component {...pageProps} />
            </SessionContextProvider>
    )
```

--2> Use Built In Login and Logout options

```tsx
const supabase = useSupabaseClient();
const handleLogin = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "rohansen856@gmail.com",
    password: "qwerty",
  });
};
const handleLogOut = async () => {
  await supabase.auth.signOut();
};
```

--3> Use Login Credentials in any page freely

```tsx
const session = useSession();
session ? "you are logged in" : "you are logged out. Please login";
```
