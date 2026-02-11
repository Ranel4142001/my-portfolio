// features/skills/components/SkillsSection.tsx
import { SkillsHeader } from './SkillsHeader';
import { SkillsTabs } from './SkillsTabs';
import { SkillsGrid } from './SkillsGrid';
import { SkillsExtraTags } from './SkillsExtraTags';
import { useSkills } from '../hooks/useSkills';

const SkillsSection = () => {
  const { activeCategory, setActiveCategory, filteredSkills } = useSkills();

  return (
    <section id="skills" className="section-padding relative bg-secondary/30">
      <div className="container-custom">
        <SkillsHeader />
        <SkillsTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <SkillsGrid filteredSkills={filteredSkills} />
        <SkillsExtraTags />
      </div>
    </section>
  );
};

export default SkillsSection;
