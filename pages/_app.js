import '@/styles/globals.css';
import { CategoriasProvider } from '@/context/CategoriasProvider';
import { AdminProvider } from '@/context/AdminProvider';

export default function App({ Component, pageProps }) {
  return (
    <CategoriasProvider>
      <AdminProvider>
        <Component {...pageProps} />
      </AdminProvider>
    </CategoriasProvider>
  );
}
