import { Button } from "ui";
import { useSession, useSupabaseClient } from "supabase"

export default function Web() {
  const session = useSession()
  const supabase = useSupabaseClient()
  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "rohansen856@gmail.com",
      password: "qwerty"
    }, {
      expiresIn: 60 * 60 * 24 * 365
    })
  }
  const handleLogOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div>
      {!session ? "user Logged out" : "user Logged in"}
      <h1>Web</h1>
      <Button />
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogOut}>logout</button>
    </div>
  );
}
