import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Card, CardContent, Chip, Stack, Typography, alpha } from '@mui/material';
import type { Project } from '../content/projects';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className="project-card"
      sx={{
        borderTop: `4px solid ${project.accentColor}`,
        backgroundImage: `linear-gradient(135deg, ${alpha(project.accentColor, 0.09)} 0%, transparent 38%)`,
      }}
    >
      <CardContent sx={{ p: 3, height: '100%' }}>
        <Stack spacing={2} sx={{ height: '100%' }}>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" alignItems="center">
            <Chip
              size="small"
              label={project.jobTag}
              sx={{
                bgcolor: project.accentColor,
                color: '#ffffff',
                borderColor: project.accentColor,
              }}
            />
            <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 850 }}>
              {project.eyebrow}
            </Typography>
          </Stack>
          <Box>
            <Typography variant="h5" component="h3" sx={{ fontWeight: 800, mb: 1 }}>
              {project.title}
            </Typography>
            <Typography color="text.secondary">{project.summary}</Typography>
          </Box>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {project.technologies.slice(0, 5).map((tech) => (
              <Chip key={tech} size="small" label={tech} variant="outlined" />
            ))}
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            component={RouterLink}
            to={`/projects/${project.slug}`}
            endIcon={<ArrowForwardIcon />}
            sx={{ alignSelf: 'flex-start' }}
          >
            View project
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
