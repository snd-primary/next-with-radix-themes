import { css } from '@/styled-system/css';

export default function Home() {
  return (
    <main
      className={css({
        display: 'grid',
        maxW: 'full',
        w: 'full',
        h: 'full',
        px: { base: 'none', md: 2 },
        background: 'foreground'
      })}
    >
      <p
        className={css({
          fontSize: '2xl',
          fontWeight: 'bold',
          color: 'text'
        })}
      >
        main contents
      </p>
    </main>
  );
}
