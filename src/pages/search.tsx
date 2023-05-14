import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SearchIcon, XCircle, ListMusic } from "lucide-react"
const Search = () => {
  return (
    <div className="search-page w-full px-4 py-6 lg:px-8 overflow-hidden h-full">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Search</h2>
          <p className="text-sm text-muted-foreground">
            Every song is recommend to you
          </p>
        </div>
      </div>
      <div className="mx-auto flex flex-row items-center px-4 mt-5">
        <SearchIcon className="h-4 w-4 cursor-pointer" />
        <Input
          className="flex-1 rounded-md focus:outline-0 border-none border-b"
          defaultValue=""
        />
        {/* <XCircle className="h-4 w-4 cursor-pointer" /> */}
      </div>
      <Separator />

      <div className="search-list mt-6  h-full">
        {new Array(20).fill(0).map((_item, index) => (
          <div
            className="list flex flex-row items-center border-b justify-between py-3 px-4 hover:bg-primary hover:text-primary-foreground rounded-md"
            key={index}
          >
            <ListMusic className="h-6 w-6" />
            <div>雪</div>
            <div>capper</div>
            <div>1:04:53</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search
