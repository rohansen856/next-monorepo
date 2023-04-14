import { Button } from "ui";
import { useSession, useSupabaseClient } from "supabase"
import axios from "axios"
import { SQLquery } from "planetscale"

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
  const mongodbTest = async () => {
    // const author = await axios.get("./api/mongotest").then(res => console.log(res))
    const data = await axios.get("./api/getposts").then(res => console.log(res))
  }
  const planetscaleTest = async () => {
    await SQLquery("SELECT").then(res => console.log(res))
  }
  return (
    <div>
      <div>
        <h1>SUPABASE</h1>
        {!session ? "user Logged out" : "user Logged in"}
        <h1>Web</h1>
        <Button />
        <button onClick={handleLogin}>login</button>
        <button onClick={handleLogOut}>logout</button>
      </div>
      <div>
        <h1>MONGODB</h1>
        <button onClick={mongodbTest}>test</button>
      </div>
      <div>
        <h1>PLANETSCALE</h1>
        <button onClick={planetscaleTest}>test</button>
      </div>
    </div>
  );
}
