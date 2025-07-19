'use client'

interface CarouselBlockType {
  mediaList: {
    id: string
    media: {
      url: string
      alt?: string
      sizes: {
        thumbnail: string
        square: string
        small: string
        medium: string
        large: string
        xlarge: string
        og: string
      }
    }
  }[]
}

export const CarouselBlock: React.FC<
  {
    id?: string
  } & CarouselBlockType
> = (props) => {
  const { mediaList } = props

  if (!mediaList || mediaList.length === 0) {
    return <div className="text-center py-8">No sponsors to display</div>
  }

  return (
    <div className="w-full overflow-hidden">
      <div className="relative border-y">
        <div className="flex animate-marquee">
          {/* First set of logos */}
          {mediaList.map((mediaItem, index) => (
            <div
              key={`first-${mediaItem.id}`}
              className="flex-shrink-0 flex items-center justify-center px-8 py-6"
              style={{ minWidth: '200px' }}
            >
              <img
                src={mediaItem.media.url}
                alt={mediaItem.media.alt || 'Sponsor Logo'}
                className="max-h-[110px] w-auto object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {mediaList.map((mediaItem, index) => (
            <div
              key={`second-${mediaItem.id}`}
              className="flex-shrink-0 flex items-center justify-center px-8 py-6"
              style={{ minWidth: '200px' }}
            >
              <img
                src={mediaItem.media.url}
                alt={mediaItem.media.alt || 'Sponsor Logo'}
                className="max-h-[110px] w-auto object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </div>
          ))}
          {/* Third set for extra smooth transition */}
          {mediaList.map((mediaItem, index) => (
            <div
              key={`third-${mediaItem.id}`}
              className="flex-shrink-0 flex items-center justify-center px-8 py-6"
              style={{ minWidth: '200px' }}
            >
              <img
                src={mediaItem.media.url}
                alt={mediaItem.media.alt || 'Sponsor Logo'}
                className="max-h-[110px] w-auto object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }

        .animate-marquee {
          animation: marquee ${mediaList.length * 6}s linear infinite;
        }
      `}</style>
    </div>
  )
}
