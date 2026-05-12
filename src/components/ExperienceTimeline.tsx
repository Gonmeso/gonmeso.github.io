import { Box, Chip, Stack, Typography } from '@mui/material';
import type { Experience } from '../content/experience';

type ExperienceTimelineProps = {
  experiences: Experience[];
};

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <Stack spacing={3}>
      {experiences.map((experience) => (
        <Box key={`${experience.company}-${experience.period}`} className="timeline-item">
          <Stack spacing={1}>
            <Typography variant="overline" color="secondary" sx={{ fontWeight: 850 }}>
              {experience.period} · {experience.location}
            </Typography>
            <Typography variant="h5" component="h3" sx={{ fontWeight: 820 }}>
              {experience.role}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 700 }}>
              {experience.company}
            </Typography>
            <Typography color="text.secondary">{experience.summary}</Typography>
            <Box component="ul" className="clean-list">
              {experience.highlights.map((highlight) => (
                <Typography component="li" key={highlight} color="text.secondary">
                  {highlight}
                </Typography>
              ))}
            </Box>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {experience.technologies.map((tech) => (
                <Chip key={tech} label={tech} size="small" />
              ))}
            </Stack>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}
