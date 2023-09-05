import { PageTemplate } from '~_templates//PageTemplate'
import { LandingPage } from '~_components/Pages/LandingPage'
import { Particle } from '~_components/Particles/Particle'

export const LandingPageScreen = () => {
  return (
    <PageTemplate>
      <Particle />
      <LandingPage />
    </PageTemplate>
  )
}
