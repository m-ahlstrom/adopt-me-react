const Footer = () => {
  return (
    <footer className="mx-auto flex w-full content-center items-center justify-center bg-background-color p-10 dark:bg-zinc-700 dark:text-white">
      <div>
        2024 © mahlstrom -{' '}
        <a
          href="https://github.com/m-ahlstrom/adopt-me-react/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}

export default Footer
