import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
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
import { projects } from '../content/projects';

const credibilitySignals = ['Backend systems', 'Cloud platforms', 'MLOps', 'Production ownership'];
const featuredProjects = projects.slice(0, 3);

export function HomePage() {
  return (
    <>
      <Box className="hero">
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 4, md: 5, xl: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={3}>
                <Stack direction="row" spacing={1} alignItems="center" color="text.secondary">
                  <PlaceIcon fontSize="small" />
                  <Typography variant="body2">{profile.location}</Typography>
                </Stack>
                <Box>
                  <Typography variant="h1" className="hero-title">
                    Gonzalo
                  </Typography>
                  <Typography component="p" className="hero-name-line">
                    Mellizo-Soto Diaz
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
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" className="credibility-strip">
                  {credibilitySignals.map((signal) => (
                    <Chip key={signal} label={signal} />
                  ))}
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} useFlexGap flexWrap="wrap" className="hero-actions">
                  <Button component={RouterLink} to="/experience" variant="contained" endIcon={<ArrowForwardIcon />}>
                    Experience
                  </Button>
                  <Button component={RouterLink} to="/projects" variant="outlined">
                    Projects
                  </Button>
                  <Button component={RouterLink} to="/ai" variant="outlined" startIcon={<AutoAwesomeIcon />}>
                    How I use AI
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box className="hero-visual">
                <Box component="img" src={heroImage} alt="Abstract cloud platform architecture visual" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Section
        eyebrow="Backend"
        title="How I think about backend systems"
        intro="I like writing backends that solve real problems for users while staying maintainable for the team. For me, good backend work is clear, practical, and easy to keep changing as the product learns."
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

      <Section
        eyebrow="Profile"
        title="Backend work with a human shape"
        intro="I like technical work that leaves room for curiosity: understanding the problem first, choosing the right tool, and building something the team can keep improving."
      >
        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Card className="profile-card">
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 820, mb: 1.5 }}>
                  What keeps me interested
                </Typography>
                <Typography color="text.secondary" className="large-copy">
                  I enjoy solving problems across different areas, from backend systems and cloud infrastructure to ML
                  workflows. Learning is fundamental for me: I like understanding new tools, testing where they fit, and
                  applying them when they genuinely make the solution better.
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
                    'I try to use the best tool for the job, even when that means a different language or service.',
                    'I prefer to think through the problem and tradeoffs before jumping into implementation.',
                    'I find teamwork enriching because different viewpoints usually make the solution clearer.',
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
        shaded
        eyebrow="AI"
        title="How I use AI"
        intro="I use LLMs as strong development tools: great for exploration, scripts, tests, refactors, and second opinions. The more sensitive the system is, the more careful the review and control need to be."
      >
        <Grid container spacing={2.5} alignItems="stretch">
          <Grid size={{ xs: 12, md: 7 }}>
            <Card className="ai-card">
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 820, mb: 1.5 }}>
                  More context, better results
                </Typography>
                <Typography color="text.secondary" className="large-copy">
                  My take is that AI rewards good architecture habits. Clear context, constraints, tests, and review
                  criteria matter more than just asking for code. I expect strong engineers to use it well because they
                  can guide the model and still own the final decision.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Card className="ai-card">
              <CardContent>
                <Stack spacing={1.5}>
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 820 }}>
                    Where I draw the line
                  </Typography>
                  <Typography color="text.secondary">
                    One-off scripts can be highly AI-assisted. Core application logic needs careful review. Code that
                    moves money needs stronger control.
                  </Typography>
                  <Button component={RouterLink} to="/ai" endIcon={<ArrowForwardIcon />} sx={{ alignSelf: 'flex-start' }}>
                    How I use AI
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
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

      <Section
        eyebrow="Selected proof"
        title="Projects with technical shape"
        intro="A short path into the deeper writeups: what the system was, what role I played, and why it mattered."
      >
        <Grid container spacing={2.5}>
          {featuredProjects.map((project) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={project.slug}>
              <Card
                className="proof-card"
                sx={{ '--project-accent': project.accentColor, borderTop: `4px solid ${project.accentColor}` }}
              >
                <CardContent>
                  <Stack spacing={1.5}>
                    <Stack direction="row" spacing={1.5} justifyContent="space-between" alignItems="flex-start">
                      <Chip
                        size="small"
                        label={project.jobTag}
                        sx={{ alignSelf: 'flex-start', bgcolor: project.accentColor, color: '#ffffff' }}
                      />
                      <Chip size="small" label={project.period} className="project-date-tag" />
                    </Stack>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 820 }}>
                      {project.title}
                    </Typography>
                    <Typography color="text.secondary">{project.systemType}</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 760 }}>
                      {project.role}
                    </Typography>
                    <Button
                      component={RouterLink}
                      to={`/projects/${project.slug}`}
                      endIcon={<ArrowForwardIcon />}
                      sx={{ alignSelf: 'flex-start' }}
                    >
                      Read writeup
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section eyebrow="Next" title="Explore the site">
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
              title: 'How I use AI',
              text: 'A practical view of LLMs in development loops, architecture work, and review boundaries.',
              path: '/ai',
            },
            {
              title: 'About',
              text: 'A little more about how I work, what I enjoy, and how to contact me.',
              path: '/about',
            },
          ].map((item) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={item.path}>
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
    </>
  );
}
