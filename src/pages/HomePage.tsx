import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import PlaceIcon from '@mui/icons-material/Place';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import heroImage from '../assets/platform-hero.png';
import { Section } from '../components/Section';
import { focusAreas, impactHighlights, profile } from '../content/profile';
import { skillGroups } from '../content/skills';

export function HomePage() {
  return (
    <>
      <Box className="hero">
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                <Stack direction="row" spacing={1} alignItems="center" color="text.secondary">
                  <PlaceIcon fontSize="small" />
                  <Typography variant="body2">{profile.location}</Typography>
                </Stack>
                <Box>
                  <Typography variant="h1" className="hero-title">
                  {profile.displayName}
                  </Typography>
                  <Typography variant="h4" component="p" className="hero-role">
                    {profile.role}
                  </Typography>
                </Box>
                <Typography variant="h6" component="p" color="text.secondary" className="hero-copy">
                  Hi, I am Gonzalo. I like building backend systems that teams can trust, understand, and keep
                  improving after they reach production.
                </Typography>
                <Typography color="text.secondary">{profile.summary}</Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                  <Button component={RouterLink} to="/experience" variant="contained" endIcon={<ArrowForwardIcon />}>
                    See experience
                  </Button>
                  <Button component={RouterLink} to="/projects" variant="outlined">
                    View projects
                  </Button>
                  <Button href="/cv_eng.txt" variant="text" startIcon={<DownloadIcon />}>
                    CV source
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className="hero-visual">
                <Box component="img" src={heroImage} alt="Abstract cloud platform architecture visual" />
                <Box className="hero-stat hero-stat-a">
                  <Typography variant="h5">$4B</Typography>
                  <Typography variant="caption">operation volume</Typography>
                </Box>
                <Box className="hero-stat hero-stat-b">
                  <Typography variant="h5">5k</Typography>
                  <Typography variant="caption">daily users</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Section
        eyebrow="Profile"
        title="Backend work with a human shape"
        intro="I like software that gives people confidence: APIs with clear contracts, services that are understandable, and production workflows that reduce friction for the team."
      >
        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Card className="profile-card">
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 820, mb: 1.5 }}>
                  What I enjoy working on
                </Typography>
                <Typography color="text.secondary" className="large-copy">
                  I enjoy the backend layer where product needs become dependable systems: understanding what the
                  service needs to do, shaping the API and data model, making tradeoffs explicit, and keeping the code
                  straightforward enough for the next engineer to work with.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Card className="profile-card">
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 820, mb: 1.5 }}>
                  A few constants
                </Typography>
                <Stack spacing={1.2}>
                  {[
                    'I prefer pragmatic backend design over clever abstractions.',
                    'I care about readable code, clear APIs, and reliable releases.',
                    'I like teams that communicate clearly and learn from production.',
                  ].map((item) => (
                    <Box className="warm-row" key={item}>
                      <span />
                      <Typography color="text.secondary">{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Section>

      <Section
        eyebrow="Focus"
        title="What I bring to backend teams"
        intro="Most of my experience sits around Python services, FastAPI, cloud-backed applications, CI/CD, data workflows, and production systems."
      >
        <Grid container spacing={2.5}>
          {focusAreas.map((area) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={area.title}>
              <Card className="focus-card">
                <CardContent>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 820, mb: 1 }}>
                    {area.title}
                  </Typography>
                  <Typography color="text.secondary">{area.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section shaded eyebrow="Impact" title="Backend work in production">
        <Grid container spacing={2}>
          {impactHighlights.map((highlight) => (
            <Grid size={{ xs: 12, md: 6 }} key={highlight}>
              <Box className="impact-row">
                <span />
                <Typography>{highlight}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section eyebrow="Next" title="Explore the rest">
        <Grid container spacing={2.5}>
          {[
            {
              title: 'Experience',
              text: 'A structured timeline of roles, systems, and technical responsibilities.',
              path: '/experience',
            },
            {
              title: 'Projects',
              text: 'Company-neutral writeups focused on architecture, backend work, and impact.',
              path: '/projects',
            },
            {
              title: 'About',
              text: 'A little more about how I work, what I enjoy, and how to contact me.',
              path: '/about',
            },
          ].map((item) => (
            <Grid size={{ xs: 12, md: 4 }} key={item.path}>
              <Card className="cta-card">
                <CardContent>
                  <Stack spacing={2}>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 820 }}>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">{item.text}</Typography>
                    <Button component={RouterLink} to={item.path} endIcon={<ArrowForwardIcon />} sx={{ alignSelf: 'flex-start' }}>
                      Open
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section shaded eyebrow="Stack" title="Technologies I work with">
        <Grid container spacing={2}>
          {skillGroups.map((group) => (
            <Grid size={{ xs: 12, md: 6 }} key={group.name}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 820, mb: 1.5 }}>
                    {group.name}
                  </Typography>
                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    {group.skills.map((skill) => (
                      <Chip key={skill} label={skill} />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>
    </>
  );
}
