import { PageTemplate } from '~_templates//PageTemplate'
import { Contact } from '~_components/Pages/Contact'
import { Particle } from '~_components/Particles/Particle'

export const ContactScreen = () => {
  return (
    <PageTemplate>
      <Particle>
        <Contact />
      </Particle>
    </PageTemplate>
  )
}
