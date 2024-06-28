import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/components/Guest";

async function HomePage() {
  const user = await currentUser();
  if(!user) {
    return <Guest></Guest>
  }
  return (
    <main>
      <h1>Welcome, {user.firstName} </h1>
    </main>
  )
}

export default HomePage;
