import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { Section } from '../components/Section';
import { profile } from '../content/profile';

const collaborationPractices = [
  {
    title: 'Clarify the operating model',
    text: 'I try to make ownership, failure paths, and release expectations explicit before the implementation grows around assumptions.',
  },
  {
    title: 'Make tradeoffs visible',
    text: 'When a backend decision has product, data, or infrastructure consequences, I prefer writing down the tradeoff and choosing deliberately.',
  },
  {
    title: 'Keep APIs boring to consume',
    text: 'I value contracts that are easy for other engineers to understand, test, and integrate without needing private context.',
  },
  {
    title: 'Learn from production',
    text: 'I like teams that use incidents, metrics, and operational friction as feedback for making the next release easier.',
  },
];

export function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title="How I work"
        intro="I like roles where architecture, reliability, infrastructure, and developer experience meet."
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2}>
              <Typography color="text.secondary" className="large-copy">
                {profile.about}
              </Typography>
              <Typography color="text.secondary" className="large-copy">
                I am especially interested in backend and platform work where clear communication, pragmatic decisions,
                and learning from running systems matter. My strongest work usually sits between service architecture,
                infrastructure, delivery automation, and the product needs those systems support.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 820, mb: 2 }}>
                  Interests
                </Typography>
                <Stack spacing={1.2}>
                  {profile.interests.map((interest) => (
                    <Typography key={interest} color="text.secondary">
                      {interest}
                    </Typography>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Section>

      <Section
        shaded
        eyebrow="Team fit"
        title="How I work with technical teams"
        intro="The best backend work usually happens through clear communication: what the system should guarantee, who depends on it, and how the team will operate it."
      >
        <Grid container spacing={2.5}>
          {collaborationPractices.map((practice) => (
            <Grid size={{ xs: 12, md: 6 }} key={practice.title}>
              <Card className="work-card">
                <CardContent>
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 820, mb: 1.2 }}>
                    {practice.title}
                  </Typography>
                  <Typography color="text.secondary">{practice.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section eyebrow="Contact" title="Get in touch">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
          <Button href={profile.github} target="_blank" rel="noreferrer" variant="contained" startIcon={<GitHubIcon />}>
            GitHub
          </Button>
          <Button href={profile.linkedin} target="_blank" rel="noreferrer" variant="outlined" startIcon={<LinkedInIcon />}>
            LinkedIn
          </Button>
        </Stack>
      </Section>
    </>
  );
}
