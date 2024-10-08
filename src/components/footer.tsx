import styles from '@/styles/footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerCol}>
        <h3>Pygame Community Edition</h3>
        <p>
          pygame - Community Edition is a free open-source Python library for multimedia applications (like games).
          Built on top of the excellent SDL library.
        </p>
      </div>
      <div className={styles.footerCol}>
        <h3>Social Media</h3>
        <ul>
          <li>
            <Link href="https://twitter.com/pygamecommunity" target="_blank" rel="noopener noreferrer">Twitter</Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/@pygamecommunity" target="_blank" rel="noopener noreferrer">YouTube</Link>
          </li>
          <li>
            <Link href="https://github.com/pygame-community" target="_blank" rel="noopener noreferrer">GitHub</Link>
          </li>
          <li>
            <Link href="https://discord.gg/pygame" target="_blank" rel="noopener noreferrer">Discord</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
