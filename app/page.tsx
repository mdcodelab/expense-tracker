import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/components/Guest";
import AddTransactions from "@/components/AddTransactions";

async function HomePage() {
  const user = await currentUser();
  if(!user) {
    return <Guest></Guest>
  }
  return (
    <main>
      <h1>Welcome, {user.firstName} </h1>
      <AddTransactions></AddTransactions>
    </main>
  )
}

export default HomePage;
