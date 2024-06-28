
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { checkUser } from "@/lib/CheckUser";

async function Header() {
    const user = await checkUser();
    console.log(user);
    
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2>Expense Tracker</h2>
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
      </div>
    </nav>
  )
}

export default Header
