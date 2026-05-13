export const aiPrinciples = [
  {
    title: 'AI is an enabler',
    text: 'I see LLMs as exceptional tools for expanding what a developer can try, compare, and validate. They are not a replacement for understanding the system.',
  },
  {
    title: 'Usage depends on risk',
    text: 'For one-off scripts, exploration, and local development loops, I use AI heavily. For sensitive application paths, I use it more carefully and keep stronger review boundaries.',
  },
  {
    title: 'Architecture matters more',
    text: 'The value is shifting toward defining the right context, constraints, tests, and review criteria. Writing code is only one part of the loop.',
  },
  {
    title: 'Human judgment stays central',
    text: 'When code moves money, affects security, or changes core product behavior, generated code needs careful review, tests, and controlled rollout.',
  },
];

export const aiUsageExamples = [
  {
    context: 'One-off scripts and exploration',
    usage: 'High',
    text: 'Great for fast scripts, migrations, data checks, throwaway tooling, and comparing implementation options.',
  },
  {
    context: 'Normal development loops',
    usage: 'Medium to high',
    text: 'Useful for scaffolding, tests, refactors, docs, debugging, and getting a second implementation perspective.',
  },
  {
    context: 'Sensitive application logic',
    usage: 'Medium',
    text: 'Good for starting points and alternatives, but the final code needs tighter review, domain checks, and deliberate ownership.',
  },
  {
    context: 'Money-moving or critical paths',
    usage: 'Low to assisted',
    text: 'The model can help reason, enumerate risks, and write tests, but changes should be controlled, reviewed, and validated with extra care.',
  },
];

export const aiWorkingHabits = [
  'I try to provide strong context before asking for code: system behavior, constraints, edge cases, and what should not change.',
  'I prefer using AI to explore options before implementation, especially when architecture or tradeoffs are unclear.',
  'I treat model output as a draft that needs ownership, not as code that becomes correct because it compiles.',
  'I expect stronger engineers and architects to get more value from AI because they can guide it with better context, patterns, and review criteria.',
];
