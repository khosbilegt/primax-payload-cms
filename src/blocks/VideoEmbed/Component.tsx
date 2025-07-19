interface VideoEmbedBlockType {
  videoUrl: string
}

export const VideoEmbedBlock: React.FC<VideoEmbedBlockType> = ({ videoUrl }) => {
  return (
    <div className="h-full aspect-video">
      <iframe
        src={'https://www.youtube.com/embed/D0UnqGm_miA'}
        frameBorder="0"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  )
}
