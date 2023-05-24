import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import patientStudies from './patientStudies'
// ==============================|| MENU ITEMS ||============================== //
const isDevEnv = process.env.NODE_ENV === 'development'

const menuItems = {
  items: [
    patientStudies,
    ...(isDevEnv ? [dashboard, pages, utilities, other] : [])
  ]
};

export default menuItems;
