import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { Box, Button, Chip, Container, Divider, Grid, Stack, Typography, alpha } from '@mui/material';
import { projects } from '../content/projects';

const sections = [
  { key: 'built', title: 'What I built' },
  { key: 'architecture', title: 'Architecture' },
  { key: 'impact', title: 'Impact' },
] as const;

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <Container maxWidth="md" className="page-container">
        <Stack spacing={2}>
          <Typography variant="h2">Project not found</Typography>
          <Button component={RouterLink} to="/projects" startIcon={<ArrowBackIcon />} sx={{ alignSelf: 'flex-start' }}>
            Back to projects
          </Button>
        </Stack>
      </Container>
    );
  }

  return (
    <Box className="project-detail" sx={{ '--project-accent': project.accentColor }}>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Button component={RouterLink} to="/projects" startIcon={<ArrowBackIcon />} sx={{ alignSelf: 'flex-start' }}>
            Back to projects
          </Button>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" alignItems="center">
                  <Chip
                    label={project.jobTag}
                    sx={{ bgcolor: project.accentColor, color: '#ffffff', borderColor: project.accentColor }}
                  />
                  <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 850 }}>
                    {project.eyebrow}
                  </Typography>
                </Stack>
                <Typography variant="h1" className="detail-title">
                  {project.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {project.summary}
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                className="detail-aside"
                sx={{
                  borderTop: `4px solid ${project.accentColor}`,
                  backgroundImage: `linear-gradient(135deg, ${alpha(project.accentColor, 0.1)} 0%, transparent 48%)`,
                }}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: 850, mb: 1.5 }}>
                  Technologies
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {project.technologies.map((tech) => (
                    <Chip key={tech} label={tech} />
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>

          <Divider />

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h4" component="h2">
                Problem
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography color="text.secondary" className="large-copy">
                {project.problem}
              </Typography>
            </Grid>
          </Grid>

          {sections.map((section) => (
            <Grid container spacing={4} key={section.key}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant="h4" component="h2">
                  {section.title}
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <Box component="ul" className="detail-list">
                  {project[section.key].map((item) => (
                    <Typography component="li" key={item} color="text.secondary">
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
