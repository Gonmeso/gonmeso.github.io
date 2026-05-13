import { Box, Card, CardContent, Chip, Grid, Stack, Typography } from '@mui/material';
import { Section } from '../components/Section';
import { aiPrinciples, aiUsageExamples, aiWorkingHabits } from '../content/ai';

export function AiPage() {
  return (
    <>
      <Section
        eyebrow="AI"
        title="How I use AI"
        intro="I think of LLMs as great enablers: excellent tools for development loops, exploration, and review support, but not a substitute for owning the architecture or the final code."
      >
        <Grid container spacing={2.5}>
          {aiPrinciples.map((principle) => (
            <Grid size={{ xs: 12, md: 6 }} key={principle.title}>
              <Card className="ai-card">
                <CardContent>
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 820, mb: 1.2 }}>
                    {principle.title}
                  </Typography>
                  <Typography color="text.secondary">{principle.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section
        shaded
        eyebrow="Boundaries"
        title="The amount of AI depends on the duty"
        intro="I do not use the same level of trust everywhere. The more critical the code path, the more I move AI toward assistance, review, and risk discovery instead of direct implementation."
      >
        <Grid container spacing={2.5}>
          {aiUsageExamples.map((example) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={example.context}>
              <Card className="ai-card ai-usage-card">
                <CardContent>
                  <Stack spacing={1.5}>
                    <Chip label={example.usage} className="ai-usage-chip" />
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 820 }}>
                      {example.context}
                    </Typography>
                    <Typography color="text.secondary">{example.text}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section
        eyebrow="Practice"
        title="More architecting, less blind code generation"
        intro="My take is that good architects will get more out of AI because they can give the model better context, better constraints, and better review standards."
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Card className="ai-card">
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 820, mb: 1.5 }}>
                  How I try to use it
                </Typography>
                <Stack spacing={1.2}>
                  {aiWorkingHabits.map((habit) => (
                    <Box className="warm-row" key={habit}>
                      <span />
                      <Typography color="text.secondary">{habit}</Typography>
                    </Box>
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
