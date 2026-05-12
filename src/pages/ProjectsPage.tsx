import { Grid } from '@mui/material';
import { ProjectCard } from '../components/ProjectCard';
import { Section } from '../components/Section';
import { projects } from '../content/projects';

export function ProjectsPage() {
  return (
    <Section
      eyebrow="Projects"
      title="Project writeups"
      intro="Company-neutral summaries of architecture work, platform work, migrations, and ML infrastructure projects."
    >
      <Grid container spacing={2.5}>
        {projects.map((project) => (
          <Grid size={{ xs: 12, md: 6 }} key={project.slug}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
