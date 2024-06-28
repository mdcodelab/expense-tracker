
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function Header() {
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
