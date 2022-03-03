import GlobalStyle from './styles/global'
import { Routes } from './routes'
import { Toaster } from 'react-hot-toast'

export const App = () => {
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: '#343b41',
            width: '286px',
            height: '69px',
            borderRadius: '4px',
            fontFamily: 'Inter',
            fontSize: '14px',
            lineHeight: '24px',
            fontWeight: 700,
            color: '#f8f9fa',
          },
          success: {
            iconTheme: {
              primary: '#3fe864',
              secondary: '#343b41',
            },
          },
          error: {
            iconTheme: {
              primary: '#e83f5b',
              secondary: '#343b41',
            },
          },
        }}
      />
      <GlobalStyle />
      <Routes />
    </>
  )
}
