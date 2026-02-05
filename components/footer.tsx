export function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-[#0a0a0a]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-neutral-400 md:flex-row">
        <p>
          &copy; {new Date().getFullYear()} Cygnuz AI. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a href="/privacy-policy" className="hover:text-lime-300 transition-colors">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-lime-300 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}
