import { ReactNode, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { profile } from '../content/profile';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'About', path: '/about' },
];

type SiteShellProps = {
  children: ReactNode;
  mode: 'light' | 'dark';
  onToggleMode: () => void;
};

export function SiteShell({ children, mode, onToggleMode }: SiteShellProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navigation = (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} sx={{ alignItems: { md: 'center' } }}>
      {navItems.map((item) => {
        const active = item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path);
        return (
          <Button
            key={item.path}
            component={RouterLink}
            to={item.path}
            color={active ? 'secondary' : 'inherit'}
            onClick={() => setOpen(false)}
            sx={{ justifyContent: 'flex-start' }}
          >
            {item.label}
          </Button>
        );
      })}
    </Stack>
  );

  return (
    <>
      <AppBar position="sticky" color="inherit" elevation={0} className="site-header">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 72, gap: 2 }}>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>{navigation}</Box>

            <Box sx={{ flexGrow: 1 }} />

            <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Tooltip title={mode === 'light' ? 'Use dark mode' : 'Use light mode'}>
                <IconButton onClick={onToggleMode} aria-label="Toggle color mode">
                  {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
              </Tooltip>
              <Tooltip title="GitHub">
                <IconButton component={Link} href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <IconButton component={Link} href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Email">
                <IconButton component={Link} href={`mailto:${profile.email}`} aria-label="Email">
                  <MailOutlineIcon />
                </IconButton>
              </Tooltip>
            </Stack>

            <IconButton
              aria-label="Open navigation"
              onClick={() => setOpen(true)}
              sx={{ display: { xs: 'inline-flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
            <Typography variant="subtitle1" fontWeight={800}>
              Navigation
            </Typography>
            <IconButton aria-label="Close navigation" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          {navigation}
          <Button
            onClick={onToggleMode}
            startIcon={mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            sx={{ mt: 2, justifyContent: 'flex-start' }}
            fullWidth
          >
            {mode === 'light' ? 'Dark mode' : 'Light mode'}
          </Button>
        </Box>
      </Drawer>

      <Box component="main">{children}</Box>

      <Box component="footer" className="site-footer">
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" alignItems={{ sm: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              {profile.displayName} · {profile.location}
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link href={profile.github} target="_blank" rel="noreferrer" underline="hover">
                GitHub
              </Link>
              <Link href={profile.linkedin} target="_blank" rel="noreferrer" underline="hover">
                LinkedIn
              </Link>
              <Link href={`mailto:${profile.email}`} underline="hover">
                Email
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
