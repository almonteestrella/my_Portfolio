import { CustomThemeProvider } from '@/components/ThemeProvider';
import GlobalStyles from '@/styles/globals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
    return (
        <>
            <CustomThemeProvider>
                <ToastContainer />
                <GlobalStyles />
                <Component {...pageProps} />
            </CustomThemeProvider>
        </>
    );
}
