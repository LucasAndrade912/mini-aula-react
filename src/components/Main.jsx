import Title from './Title'
import { useState, useEffect } from 'react'

export default function Main() {
  const [texto, setTexto] = useState('')

  useEffect(() => {
    console.log('TEXTO MUDOU')
  }, [texto])

  return (
    <main>
      <Title text="Main" />

      <input type="text" onChange={(event) => setTexto(event.target.value)} />

      <h3>Usuario digitou: {texto}</h3>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa magni consequuntur officiis doloremque dicta. Pariatur velit et impedit nostrum temporibus, ex iusto voluptates quasi laborum, assumenda fugit, officiis reiciendis?</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat ut quod tempora. Natus quia repellendus at eos architecto magni laudantium distinctio! Officia nesciunt in vero sit, iusto accusantium doloremque?</p>
    </main>
  )
}