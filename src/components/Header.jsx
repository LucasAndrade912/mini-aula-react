import Title from './Title'

export default function Header() {
  return (
    <header>
      <Title text="Cabeçalho" />

      <nav>
        <ul>
          <li>home</li>
          <li>sobre</li>
          <li>contato</li>
        </ul>
      </nav>
    </header>
  )
}