import '@/src/_lib/global-style.css';
import { Outlet } from 'react-router';
import { Grid } from '../_lib/components/_common/grid';

export default function RootLayout() {
  return (
    <Grid>
      <Outlet />
    </Grid>
  );
}
