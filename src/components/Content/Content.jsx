import './Content.css';

export default function Content({ children }) {
  return (
    <main className='content'>
      {children}
    </main>
  );
}
