import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTranslation } from "react-i18next"

export function LanguageSelect() {
  const { i18n } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = React.useState("zh")
  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language)
    i18n.changeLanguage(language)
  }
  return (
    <Select onValueChange={handleLanguageChange} value={currentLanguage}>
      <SelectTrigger className="border-none">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="zh">简体中文</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
