import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export const Song = ({title, artist, album, imagePath }: {title: string, artist: string, album: string, imagePath: string}) => {
    return (
        <Card>
        <CardContent>
          <CardHeader>
            <CardTitle>{artist}:{title}</CardTitle>
          </CardHeader>
          <Image src={imagePath} width={300} height={300} alt="cover"/>
          <CardDescription>
            <p>Artist: {artist}</p>
            <p>Title: {title}</p>
            <p>Album: {album}</p>
          </CardDescription>
        </CardContent>
      </Card>
    )
} 