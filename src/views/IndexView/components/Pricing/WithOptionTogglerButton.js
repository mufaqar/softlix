import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from '@mui/material/Link';
import Container from 'components/Container';

const mock = [
  {
    title: 'Basic',
    subtitle:
      'We provide you Basic app for both Android and IOS with fully working functionality',
    price: { monthly: '$5000', annual: '$5000' },
    features: [
      'Delivery days 30 Days',
      'Revisions unlimited',
      'Functional All',
      'Mobile operating system',
      'Upload to app store',
      'App Icon',
      'Splash screen',
      'Ad network integration',
      'Include source code',
    ],
    isHighlighted: false,
  },
  {
    title: 'Standard',
    subtitle: 'Connecting App with Backend Server, With Free 1 month Support',
    price: { monthly: '$8000', annual: '$8000' },
    features: [
      'Delivery days 45 Days',
      'Revisions unlimited',
      'Functional All',
      'Mobile operating system',
      'Upload to app store',
      'App Icon',
      'Splash screen',
      'Ad network integration',
      'Include source code',
    ],
    isHighlighted: true,
  },
  {
    title: 'Premium',
    subtitle:
      'Fully Customised App, Depends on your project requirement, With Free 2 month Support ',
    price: { monthly: '$12000', annual: '$12000' },
    features: [
      'Delivery days 60 Days',
      'Revisions unlimited',
      'Functional All',
      'Mobile operating system',
      'Upload to app store',
      'App Icon',
      'Splash screen',
      'Ad network integration',
      'Include source code',
    ],
    isHighlighted: false,
  },
];
const mock2 = [
  // {
  //   title: 'STAR PACKAGE',
  //   subtitle:
  //     'The fundamentals to get your brand new company legitimate and up and running.',
  //   price: { monthly: '$1190', annual: '$1190' },
  //   features: [
  //     'Delivery days 14 Days',
  //     'Revisions 1',
  //     'No.of pages or screens 1',
  //     'Responsive Design ',
  //     'Branded Website with custom header design (5 pages)',
  //     'Logo design',
  //     'Social Media Online Presence Image Package',
  //     'Lead Capture System Setup with squeeze page, thank you page and downloadable gift (provided by client)',
  //     'copy review (client provides all copy)',
  //   ],
  //   isHighlighted: false,
  // },
  {
    title: 'SUPERSTAR PACKAGE',
    subtitle:
      'Perfect for already running companies looking to redesign their existing website',
    price: { monthly: '$2190', annual: '$2190' },
    features: [
      'Delivery days 30 Days',
      'Revisions 2',
      'No.of pages or screens 4',
      'Responsive Design ',
      'Convert to HTML/CSS',
      'Source File',
      'Branded Website with custom header design (5 pages)',
      'Logo design',
      'Social Media Online Presence Image Package',
      'Lead Capture System Setup with squeeze page, thank you page and downloadable gift (provided by client)',
      'copy review (client provides all copy)',
      'Sales letter page for product',
      'product creation',
      'shopping card setup (1 shopping cart purchased by client)',
      'Podcast setup',
      'Facebook Ads advanced targetting (client pays for ads)',
      'Funnel system with one downsell and one upsell',
    ],
    isHighlighted: true,
  },
  {
    title: 'ROCKSTAR PACKAGE',
    subtitle:
      'An e-com store and site curated and hosted through your own website, showcasing up to 10 products',
    price: { monthly: '$2790', annual: '$2790' },
    features: [
      'Delivery days 45s Days',
      'Revisions 3',
      'No.of pages or screens 7',
      'Responsive Design ',
      'Prototype',
      'Content Upload',
      'Convert to HTML/CSS',
      'Source File',
      'Branded Website with custom header design (5 pages)',
      'Social Media Online Presence Image Package',
      'Lead Capture System Setup with squeeze page, thank you page and downloadable gift (provided by client)',
      'copy review (client provides all copy)',
      'Sales letter page for product',
      'product creation setup (client to provide product)',
      'shopping card setup (1 shopping cart purchased by client)',
    ],
    isHighlighted: false,
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const WithOptionTogglerButton = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [pricingOption, setPricingOption] = useState('annual');

  const handleClick = (event, newPricingOption) => {
    setPricingOption(newPricingOption);
  };

  const renderToggler = () => (
    <Box display={'flex'} justifyContent={'center'} marginBottom={4}>
      <ToggleButtonGroup value={pricingOption} exclusive onChange={handleClick}>
        <ToggleButton
          value="annual"
          size={isMd ? 'large' : 'small'}
          sx={{
            backgroundColor:
              pricingOption === 'annual'
                ? `${theme.palette.primary.light} !important`
                : 'transparent',
            border: `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              color:
                pricingOption === 'annual' ? 'common.white' : 'text.primary',
            }}
          >
            Annual
          </Typography>
        </ToggleButton>
        <ToggleButton
          value="monthly"
          size={isMd ? 'large' : 'small'}
          sx={{
            backgroundColor:
              pricingOption === 'monthly'
                ? `${theme.palette.primary.light} !important`
                : 'transparent',
            border: `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              color:
                pricingOption !== 'annual' ? 'common.white' : 'text.primary',
            }}
          >
            Monthly
          </Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.dark} 100%)`,
        }}
      >
        <Container position={'relative'} zIndex={3}>
          <Box>
            <Box marginBottom={4}>
              <Typography
                variant="h3"
                gutterBottom
                align={'center'}
                sx={{
                  fontWeight: 900,
                }}
              >
                Pricing
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                align={'center'}
              >
                We are founded by a leading academic and researcher in the field
                of Industrial Systems Engineering.
                <br />
                For entrepreneurs, startups and freelancers. If you didn’t find
                what you needed, these could help!
              </Typography>
            </Box>
            <Box sx={{ width: '100%' }}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                  display: 'flex',
                  width: '100%',
                  maxWidth: '500px',
                  margin: '0 auto',
                }}
              >
                <Tabs
                  sx={{
                    display: 'flex',
                    width: '100%',
                    '& .MuiTabs-flexContainer': {
                      width: '100%',
                      justifyContent: 'space-around',
                    },
                  }}
                  variant="scrollable"
                  scrollButtons="auto"
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    sx={{ fontSsize: '16px', fontWeight: '600' }}
                    label="Website Design & Development"
                    {...a11yProps(0)}
                  />
                  <Tab
                    sx={{ fontSsize: '16px', fontWeight: '600' }}
                    label="App development"
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={1}>
                <Grid container spacing={4}>
                  {mock.map((item, i) => (
                    <Grid item xs={12} md={4} key={i}>
                      <Box
                        component={Card}
                        height={1}
                        display={'flex'}
                        flexDirection={'column'}
                        variant={'outlined'}
                      >
                        <CardContent
                          sx={{
                            padding: 4,
                          }}
                        >
                          <Box marginBottom={2}>
                            <Typography
                              variant={'h4'}
                              fontWeight={600}
                              gutterBottom
                            >
                              {item.title}
                            </Typography>
                            <Typography color={'text.secondary'}>
                              {item.subtitle}
                            </Typography>
                          </Box>
                          <Box
                            display={'flex'}
                            alignItems={'baseline'}
                            marginBottom={2}
                          >
                            <Typography variant={'h3'} fontWeight={700}>
                              {pricingOption === 'annual'
                                ? item.price.annual
                                : item.price.monthly}
                            </Typography>
                            <Typography
                              variant={'subtitle1'}
                              color={'text.secondary'}
                              fontWeight={700}
                            >
                              {pricingOption === 'annual' ? '' : ''}
                            </Typography>
                          </Box>
                          <Grid container spacing={1}>
                            {item.features.map((feature, j) => (
                              <Grid item xs={12} key={j}>
                                <Box
                                  component={ListItem}
                                  disableGutters
                                  width={'auto'}
                                  padding={0}
                                >
                                  <Box
                                    component={ListItemAvatar}
                                    minWidth={'auto !important'}
                                    marginRight={2}
                                  >
                                    <Box
                                      component={Avatar}
                                      bgcolor={theme.palette.primary.main}
                                      width={20}
                                      height={20}
                                    >
                                      <svg
                                        width={12}
                                        height={12}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </Box>
                                  </Box>
                                  <ListItemText primary={feature} />
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </CardContent>
                        <Box flexGrow={1} />
                        <CardActions
                          sx={{ justifyContent: 'flex-end', padding: 4 }}
                        >
                          <Link underline="none" component="a" href="/hire-us">
                            {' '}
                            <Button size={'large'} variant={'contained'}>
                              Talk To Sales
                            </Button>{' '}
                          </Link>
                        </CardActions>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={0}>
                <Grid
                  container
                  spacing={2}
                  sx={{ justifyContent: 'space-evenly' }}
                >
                  {mock2.map((item, i) => (
                    <Grid item xs={12} md={4} key={i}>
                      <Box
                        component={Card}
                        height={1}
                        display={'flex'}
                        flexDirection={'column'}
                        variant={'outlined'}
                      >
                        <CardContent
                          sx={{
                            padding: 4,
                          }}
                        >
                          <Box marginBottom={2}>
                            <Typography
                              variant={'h5'}
                              // fontSize={'1.7rem'}
                              fontWeight={600}
                              gutterBottom
                              // sx={{ fontSize : '1.7rem'}}
                            >
                              {item.title}
                            </Typography>
                            <Typography color={'text.secondary'}>
                              {item.subtitle}
                            </Typography>
                          </Box>
                          <Box
                            display={'flex'}
                            alignItems={'baseline'}
                            marginBottom={2}
                          >
                            <Typography variant={'h3'} fontWeight={700}>
                              {pricingOption === 'annual'
                                ? item.price.annual
                                : item.price.monthly}
                            </Typography>
                            <Typography
                              variant={'subtitle1'}
                              color={'text.secondary'}
                              fontWeight={700}
                            >
                              {pricingOption === 'annual' ? '' : ''}
                            </Typography>
                          </Box>
                          <Grid container spacing={1}>
                            {item.features.map((feature, j) => (
                              <Grid item xs={12} key={j}>
                                <Box
                                  component={ListItem}
                                  disableGutters
                                  width={'auto'}
                                  padding={0}
                                >
                                  <Box
                                    component={ListItemAvatar}
                                    minWidth={'auto !important'}
                                    marginRight={2}
                                  >
                                    <Box
                                      component={Avatar}
                                      bgcolor={theme.palette.primary.main}
                                      width={20}
                                      height={20}
                                    >
                                      <svg
                                        width={12}
                                        height={12}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </Box>
                                  </Box>
                                  <ListItemText primary={feature} />
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        </CardContent>
                        <Box flexGrow={1} />
                        <CardActions
                          sx={{ justifyContent: 'flex-end', padding: 4 }}
                        >
                          <Link underline="none" component="a" href="/hire-us">
                            {' '}
                            <Button size={'large'} variant={'contained'}>
                              Talk To Sales
                            </Button>{' '}
                          </Link>
                        </CardActions>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default WithOptionTogglerButton;
