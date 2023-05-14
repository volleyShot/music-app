import i18n from "@/features/i18n"
import "@/src/styles/globals.css"
import type { AppProps } from "next/app"
import { useTranslation, I18nextProvider } from "react-i18next"
import AppMenu from "../layout"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="m-h-screen overflow-hidden flex flex-row">
        <AppMenu />
        <Component {...pageProps} />
      </div>
    </I18nextProvider>
  )
}
