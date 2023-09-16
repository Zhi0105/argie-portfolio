import { PageTemplate } from '~_templates//PageTemplate'
import { Particle } from '~_components/Particles/Particle'
import { Home } from '~_components/Pages/Home'
export const HomeScreen = () => {
  return (
    <PageTemplate>
      <Particle>
        <Home />
      </Particle>
    </PageTemplate>
  )
}
