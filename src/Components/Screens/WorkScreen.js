import { PageTemplate } from '~_templates//PageTemplate'
import { Work } from '~_components/Pages/Work'
import { Particle } from '~_components/Particles/Particle'

export const WorkScreen = () => {
  return (
    <PageTemplate>
      <Particle>
        <Work />
      </Particle>
    </PageTemplate>
  )
}
