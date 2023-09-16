import { PageTemplate } from '~_templates//PageTemplate'
import { Skill } from '~_components/Pages/Skill'
import { Particle } from '~_components/Particles/Particle'

export const SkillScreen = () => {
  return (
    <PageTemplate>
      <Particle>
        <Skill />
      </Particle>
    </PageTemplate>
  )
}
