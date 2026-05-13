import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Card, CardActionArea, CardContent, Chip, Stack, Typography, alpha } from '@mui/material';
import type { Project } from '../content/projects';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const metadata = [
    { label: 'Role', value: project.role },
    { label: 'System', value: project.systemType },
    { label: 'Scale', value: project.scale },
  ];

  return (
    <Card
      className="project-card"
      sx={{
        '--project-accent': project.accentColor,
        borderTop: `4px solid ${project.accentColor}`,
        backgroundImage: `linear-gradient(135deg, ${alpha(project.accentColor, 0.09)} 0%, transparent 38%)`,
      }}
    >
      <CardActionArea component={RouterLink} to={`/projects/${project.slug}`} className="project-card-click-target">
        <CardContent sx={{ p: 3, height: '100%' }}>
          <Stack spacing={2} sx={{ height: '100%' }}>
            <Stack direction="row" spacing={1.5} justifyContent="space-between" alignItems="flex-start">
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
              <Chip size="small" label={project.period} className="project-date-tag" />
            </Stack>
            <Box>
              <Typography variant="h5" component="h3" sx={{ fontWeight: 800, mb: 1 }}>
                {project.title}
              </Typography>
              <Typography color="text.secondary">{project.summary}</Typography>
            </Box>
            <Box className="project-meta">
              {metadata.map((item) => (
                <Box key={item.label}>
                  <Typography variant="caption" color="text.secondary">
                    {item.label}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 720 }}>
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {project.technologies.slice(0, 5).map((tech) => (
                <Chip key={tech} size="small" label={tech} variant="outlined" />
              ))}
            </Stack>
            <Box sx={{ flexGrow: 1 }} />
            <Box className="project-card-action">
              <Typography variant="button">View project</Typography>
              <ArrowForwardIcon fontSize="small" />
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
