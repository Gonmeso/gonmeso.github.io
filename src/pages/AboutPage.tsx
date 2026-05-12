import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { Section } from '../components/Section';
import { profile } from '../content/profile';

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

      <Section shaded eyebrow="Contact" title="Get in touch">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
          <Button href={`mailto:${profile.email}`} variant="contained" startIcon={<MailOutlineIcon />}>
            Email
          </Button>
          <Button href={profile.github} target="_blank" rel="noreferrer" variant="outlined" startIcon={<GitHubIcon />}>
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
