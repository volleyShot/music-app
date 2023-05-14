import { Button } from "@/components/ui/button"
import { LanguageSelect } from "@/features/language"
import { t } from "i18next"
import { ListVideo, PlayCircle, SearchIcon } from "lucide-react"
import Link from "next/link"

const AppMenu = () => {
  return (
    <div className="music-menu w-[200px] bg-background border-r border-solid h-screen relative min-w-[200px] flex-shrink-0">
      <div className="px-4 py-2">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Music App
        </h2>
        <div className="menu">
          <Button className="w-full flex justify-start">
            <Link href="/" className="w-full flex justify-start">
              <PlayCircle className="mr-2 h-4 w-4" /> {t("Today Song")}
            </Link>
          </Button>
          <Button
            className="w-full flex justify-start hover:bg-primary hover:text-primary-foreground my-2"
            variant="ghost"
          >
            <Link href="/search" className="w-full flex justify-start">
              <SearchIcon className="mr-2 h-4 w-4" />
              {t("Search")}
            </Link>
          </Button>
          <Button
            className="w-full flex justify-start hover:bg-primary hover:text-primary-foreground my-2"
            variant="ghost"
          >
            <Link href="/video" className="w-full flex justify-start">
              <ListVideo className="mr-2 h-4 w-4" />
              {t("Video List")}
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 w-full px-4">
        <LanguageSelect />
      </div>
    </div>
  )
}

export default AppMenu
