import { Card, CardContent, Chip, Grid, Stack, Typography } from '@mui/material';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { Section } from '../components/Section';
import { certifications, education, experiences } from '../content/experience';
import { languages, strengths } from '../content/skills';

export function ExperiencePage() {
  return (
    <>
      <Section
        eyebrow="Experience"
        title="Professional timeline"
        intro="A structured resume view of the roles, systems, and platform work behind the project writeups."
      >
        <ExperienceTimeline experiences={experiences} />
      </Section>

      <Section shaded eyebrow="Background" title="Education, certifications, and languages">
        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 820, mb: 1.5 }}>
                  Education
                </Typography>
                <Stack spacing={1.5}>
                  {education.map((item) => (
                    <Stack key={item.title} spacing={0.3}>
                      <Typography sx={{ fontWeight: 760 }}>{item.title}</Typography>
                      <Typography color="text.secondary">{item.place}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.period}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 820, mb: 1.5 }}>
                  Certifications
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {certifications.map((item) => (
                    <Chip key={item} label={item} />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 820, mb: 1.5 }}>
                  Strengths & languages
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2 }}>
                  {strengths.map((item) => (
                    <Chip key={item} label={item} />
                  ))}
                </Stack>
                <Stack spacing={0.7}>
                  {languages.map((item) => (
                    <Typography key={item} color="text.secondary">
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Section>
    </>
  );
}
