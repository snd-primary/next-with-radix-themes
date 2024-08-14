import { css } from '@/styled-system/css'

export default function Home() {
  return (
    <main>
      <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'text' })}>
        main contents
      </p>
    </main>
  )
}
