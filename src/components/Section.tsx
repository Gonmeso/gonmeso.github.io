import { ReactNode } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';

type SectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  shaded?: boolean;
};

export function Section({ eyebrow, title, intro, children, shaded = false }: SectionProps) {
  return (
    <Box component="section" className={shaded ? 'section section-shaded' : 'section'}>
      <Container maxWidth="xl">
        {(eyebrow || title || intro) && (
          <Stack spacing={1.2} className="section-heading">
            {eyebrow && (
              <Typography variant="overline" color="secondary" sx={{ fontWeight: 850 }}>
                {eyebrow}
              </Typography>
            )}
            {title && (
              <Typography variant="h2" className="section-title">
                {title}
              </Typography>
            )}
            {intro && (
              <Typography color="text.secondary" className="section-intro">
                {intro}
              </Typography>
            )}
          </Stack>
        )}
        {children}
      </Container>
    </Box>
  );
}
