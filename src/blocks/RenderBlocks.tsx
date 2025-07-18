import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { StepsBlock } from '@/blocks/StepsBlock/Component'
import { Step } from '@/blocks/StepsBlock/Step/Component'
import { ListCardBlock } from './ListCard/Component'
import { CardBoxBlock } from './CardBox/Component'
import { ContentBlock } from './Content/Component'
import { TextBlock } from './Text/Component'
import { ButtonBlock } from './Button/Component'
import { FeatureCardBlock } from './FeatureCard/Component'
import { ListBlock } from './List/Component'
import { StatisticBlock } from './Statistic/Component'
import { GradientCardBlock } from './GradientCard/Component'
import { SpacerBlock } from './Spacer/Component'

const blockComponents = {
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  stepsBlock: StepsBlock,
  step: Step,
  listCard: ListCardBlock,
  cardBox: CardBoxBlock,
  content: ContentBlock,
  text: TextBlock,
  button: ButtonBlock,
  featureCard: FeatureCardBlock,
  list: ListBlock,
  statistic: StatisticBlock,
  gradientCard: GradientCardBlock,
  spacer: SpacerBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
