import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const mock = [
  {
    title: 'Sales VP',
    position: 5,
    url: 'https://paper.dropbox.com/doc/Sales-VP-Job-Description-jDUTnSMrFYWsiV7AhyG36',
  },
  {
    title: 'Project Manager',
    position: 5,
    url: 'https://paper.dropbox.com/doc/Sales-VP-Job-Description-jDUTnSMrFYWsiV7AhyG36',
  },
  {
    title: 'Business Development Manager',
    position: 5,
    url: 'https://paper.dropbox.com/doc/Business-Development-Manager-Job-Description--BnMSI2G4RBwotCHmaGDGjTm7AQ-HRpgKKbjHzpcBSzT3j49f',
  },
  {
    title: 'Business Development Executive',
    position: 10,
    url: 'https://paper.dropbox.com/doc/Business-Development-Executive-Job-Description--BnNi09b4uOz46vFB9aTZFAbkAQ-0Y5sSooWGLabtNFPRrUpEhttps://paper.dropbox.com/doc/Business-Development-Executive-Job-Description--BnNi09b4uOz46vFB9aTZFAbkAQ-0Y5sSooWGLabtNFPRrUpE',
  },
  {
    title: 'UI/ UX Designer',
    position: 50,
    url: 'https://paper.dropbox.com/doc/UIUX-Designer-job-description--BnMlpfn9l9MIimoz1F4pgI65AQ-MijNLeGJ65mMtrwna6OS7',
  },
  {
    title: 'Python Developers',
    position: 50,
    url: 'https://paper.dropbox.com/doc/Python-Developer-job-description--BnMP280uNo_U6lFt91DAw2LpAQ-nAKBDkAyBFYq2CJZM3Rsq',
  },
  {
    title: 'Email Marketer',
    position: 50,
    url: 'https://paper.dropbox.com/doc/Email-Marketing-Specialist-Job-Description--BnOptAAsi3EOHUk6EKcj_XbDAQ-siyMkxJWLG7xpOMTo37tR',
  },
  {
    title: 'PPC Experts',
    position: 50,
    url: 'https://paper.dropbox.com/doc/PPC-Pay-Per-Click-Manager-job-description--BnMobILZs1~G0LGU5G1UotbuAQ-hJKw0DsBqD3KDUuijZOQj',
  },
  {
    title: 'Content Writers',
    position: 100,
    url: 'https://paper.dropbox.com/doc/Content-Writer-JD--BnOrfcw_tI3~jLxTLtZ03CckAQ-THpgDKQ7wzADK4VSEFCyc',
  },
  {
    title: 'Software Developers',
    position: 100,
    url: 'https://paper.dropbox.com/doc/Software-Developer-Job-Description--BnNJawycO_nhDVEyyDT2cZvkAQ-zI2LLsXnXizztfrlGVZ0w',
  },
  {
    title: 'Website Designer',
    position: 200,
    url: 'https://paper.dropbox.com/doc/Web-Designer-Job-Description--BnMIy6dmQ2od78316Q79NnqLAQ-U2FD5csyDpUPEgVoRAyx6',
  },
  {
    title: 'Web Developers',
    position: 500,
    url: 'https://paper.dropbox.com/doc/Web-Developer-Job-Description--BnMETaSzbXlcvQStHGebNpH5AQ-xvyPnQEsCMVWheAzd3NED',
  },
  {
    title: 'Full Stack Developers',
    position: 500,
    url: 'https://paper.dropbox.com/doc/Full-Stack-Developer-job-description--BnMwNkCinnGVyOiwkJ7xsqB6AQ-1JEYvtEGC5FPNVJHM1YK8',
  },
  {
    title: 'Flutter Developer',
    position: 500,
    url: 'https://paper.dropbox.com/doc/Flutter-Mobile-App-Developer-Job-description--BnMjUmOvFcgwv23c5AtEnpMFAQ-mr82BRC6Wq8ThdU0V3T4Jhttps://paper.dropbox.com/doc/Flutter-Mobile-App-Developer-Job-description--BnMjUmOvFcgwv23c5AtEnpMFAQ-mr82BRC6Wq8ThdU0V3T4J',
  },
  {
    title: 'Mobile App Developer',
    position: 500,
    url: 'https://paper.dropbox.com/doc/Mobile-App-Developer-Job-Description--BnO2te6J_qZcfJS1Bkl7H0aTAQ-cpCh4ZJg8eIq270kV972e',
  },
  {
    title: 'Digital Marketer',
    position: 5,
    url: 'https://paper.dropbox.com/doc/Digital-Marketing-Manager-Job-Description--BnO3au1liVcj5tErNwuvkiFnAQ-vqqYjOhGBye2z8VlcGJq0',
  },
  {
    title: 'SEO Experts',
    position: 500,
    url: 'https://paper.dropbox.com/doc/Search-Engine-Optimization-SEO-Specialist-job-description--BnNT_UlJuiJ4SUehUHHV_PrpAQ-F9FvGqiWwNXK3GMGe4ROd',
  },
  {
    title: 'IT Consultants',
    position: 500,
    url: 'https://paper.dropbox.com/doc/IT-Consultant-Job-Description--BnNVPFypcGijhckS39wibmeGAQ-x2MMIApM3Qlt2SQ43PeDf',
  },
  {
    title: 'Management Consultants',
    position: 500,
    url: 'https://paper.dropbox.com/doc/Management-Consultant-Job-Description--BnOdwMbuReF6~ZAlNb_QWlb4AQ-uWanztgTya4FO37a1WQvs',
  },
];

const Jobs = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          align={'center'}
          color={'text.secondary'}
          sx={{ textTransform: 'uppercase' }}
          variant={'subtitle2'}
          fontWeight={600}
        >
          Open positions
        </Typography>
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          Current job openings
        </Typography>
      </Box>

      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', sm: 'row' }}
        flex={'1 1 100%'}
        justifyContent={{ sm: 'space-between' }}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        marginY={4}
      >
        <Box marginBottom={{ xs: 1, sm: 0 }}>
          <Typography variant={'h6'} fontWeight={700}>
            Hiring Goal 2022: 5000 Employees
          </Typography>
          <Typography color={'text.secondary'}>
            User experience and design are top priorities at Softlix.
          </Typography>
        </Box>
        <Box
          paddingY={1 / 2}
          paddingX={1}
          bgcolor={'secondary.main'}
          borderRadius={2}
          marginRight={1}
        >
          <Typography
            variant={'caption'}
            fontWeight={700}
            sx={{ color: 'common.black' }}
          >
            {mock.length} openings
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        sx={{
          background: theme.palette.background.paper,
          borderRadius: 2,
        }}
      >
        {mock.map((item, i) => (
          <Grid
            item
            xs={12}
            key={i}
            sx={{
              borderBottom: `1px solid ${theme.palette.divider}`,
              '&:last-child': {
                borderBottom: 0,
              },
            }}
          >
            <Box padding={2} display={'flex'} alignItems={'center'}>
              <Box
                display={'flex'}
                flexDirection={{ xs: 'column', sm: 'row' }}
                flex={'1 1 100%'}
                justifyContent={{ sm: 'space-between' }}
                alignItems={{ sm: 'center' }}
              >
                <Box marginBottom={{ xs: 1, sm: 0 }}>
                  <Typography variant={'subtitle1'} fontWeight={700}>
                    {item.title}
                  </Typography>
                  <Typography color={'text.secondary'}>
                    SOFTLIX™ Hiring
                  </Typography>
                </Box>
                <Typography color={'text.secondary'}>
                  Total Positions : {item.position}
                </Typography>
              </Box>
              <Box marginLeft={2}>
                <a href={item.url} target="_blank">
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    endIcon={
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width={12}
                        height={12}
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </Box>
                    }
                  >
                    Apply
                  </Button>
                </a>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Jobs;
