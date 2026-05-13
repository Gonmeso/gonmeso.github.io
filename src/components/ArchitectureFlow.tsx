import { Box, Typography } from '@mui/material';
import type { Project } from '../content/projects';

type ArchitectureFlowProps = {
  project: Project;
};

export function ArchitectureFlow({ project }: ArchitectureFlowProps) {
  const stages = [
    {
      label: 'Workflow',
      value: project.systemType,
    },
    {
      label: 'Core services',
      value: project.technologies.slice(0, 3).join(', '),
    },
    {
      label: 'Platform path',
      value: project.architecture.slice(0, 2).join(' '),
    },
    {
      label: 'Operational signal',
      value: project.scale,
    },
  ];

  return (
    <Box className="architecture-flow" aria-label={`${project.title} architecture shape`}>
      {stages.map((stage, index) => (
        <Box className="architecture-stage" key={stage.label}>
          <Typography variant="caption" color="text.secondary">
            {stage.label}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 720 }}>
            {stage.value}
          </Typography>
          {index < stages.length - 1 ? <span className="architecture-connector" aria-hidden="true" /> : null}
        </Box>
      ))}
    </Box>
  );
}
