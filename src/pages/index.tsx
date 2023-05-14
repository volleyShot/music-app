import { Skeleton } from "@/components/ui/skeleton"

const HomePage = () => {
  return (
    <div className="music-app flex-1 h-screen">
      <div className="h-full px-4 py-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Today Playlist
            </h2>
            <p className="text-sm text-muted-foreground">
              Every song is recommend to you
            </p>
          </div>
        </div>
        <div className="shrink-0 bg-border h-[1px] w-full my-4"></div>
        <div className="flex flex-row w-full flex-wrap">
          <div className="space-y-3 w-[250px] mr-4 mb-4">
            <Skeleton className="w-[250px] h-[340px] rounded-md" />
            <div className="space-y-1 text-sm">
              <h3 className="font-medium leading-none">React Rendezvous</h3>
              <p className="text-xs text-muted-foreground">Ethan Byte</p>
            </div>
          </div>
          <div className="space-y-3 w-[250px] mr-4 mb-4">
            <Skeleton className="w-[250px] h-[340px] rounded-md" />
            <div className="space-y-1 text-sm">
              <h3 className="font-medium leading-none">React Rendezvous</h3>
              <p className="text-xs text-muted-foreground">Ethan Byte</p>
            </div>
          </div>
          <div className="space-y-3 w-[250px] mr-4 mb-4">
            <Skeleton className="w-[250px] h-[340px] rounded-md" />
            <div className="space-y-1 text-sm">
              <h3 className="font-medium leading-none">React Rendezvous</h3>
              <p className="text-xs text-muted-foreground">Ethan Byte</p>
            </div>
          </div>
          <div className="space-y-3 w-[250px] mr-4 mb-4">
            <Skeleton className="w-[250px] h-[340px] rounded-md" />
            <div className="space-y-1 text-sm">
              <h3 className="font-medium leading-none">React Rendezvous</h3>
              <p className="text-xs text-muted-foreground">Ethan Byte</p>
            </div>
          </div>
          <div className="space-y-3 w-[250px] mr-4 mb-4">
            <Skeleton className="w-[250px] h-[340px] rounded-md" />
            <div className="space-y-1 text-sm">
              <h3 className="font-medium leading-none">React Rendezvous</h3>
              <p className="text-xs text-muted-foreground">Ethan Byte</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
