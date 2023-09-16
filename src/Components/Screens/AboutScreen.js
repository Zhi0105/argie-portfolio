import { PageTemplate } from '~_templates//PageTemplate'
import { About } from '~_components/Pages/About'
import { Particle } from '~_components/Particles/Particle'

export const AboutScreen = () => {
  return (
    <PageTemplate>
      <Particle>
        <About />
      </Particle>
    </PageTemplate>
  )
}
