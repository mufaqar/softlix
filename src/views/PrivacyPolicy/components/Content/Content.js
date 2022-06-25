import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
const mock = [
  {
    title: '',
    description: '',
  },
  {
    title: '2. How do we use your information?',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  },
  {
    title: '3. Will your information be shared with anyone?',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
  },
  {
    title: '4. Do we use cookies or other tracking technologies?',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat',
  },
  {
    title: '5. Is your information transferred internationally?',
    description:
      'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
  },
  {
    title: '6. How long do we keep your information?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: '7. What are your privacy rights?',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  },
  {
    title:
      '8. How can you review, update or delete the data we collect from you?',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
  },
];

const Content = () => {
  return (
    <Box>
      <Box sx={{ marginBottom: '20px' }}>
        <Typography
          variant={'h4'}
          gutterBottom
          sx={{
            fontWeight: 'medium',
          }}
        >
          Privacy Policy for Site Design Agency
        </Typography>
        <Typography
          component={'p'}
          color={'text.secondary'}
          sx={{ marginBottom: '10px' }}
        >
          At Site Design Agency, accessible from{' '}
          <a href="https://softlix.tech">https://softlix.tech</a>, one of our
          main priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by Site Design Agency and how we use it. If you have additional
          questions or require more information about our Privacy Policy, do not
          hesitate to contact us.
        </Typography>
        <Typography component={'p'} color={'text.secondary'}>
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in Site Design Agency. This policy is not
          applicable to any information collected offline or via channels other
          than this website.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '20px' }}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{
            fontWeight: 'medium',
          }}
        >
          Consent
        </Typography>
        <Typography component={'p'} color={'text.secondary'}>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '20px' }}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{
            fontWeight: 'medium',
          }}
        >
          Information we collect
        </Typography>
        <Typography
          component={'p'}
          color={'text.secondary'}
          sx={{ marginBottom: '10px' }}
        >
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information. If you
          contact us directly, we may receive additional information about you
          such as your name, email address, phone number, the contents of the
          message and/or attachments you may send us, and any other information
          you may choose to provide.
        </Typography>
        <Typography component={'p'} color={'text.secondary'}>
          When you register for an Account, we may ask for your contact
          information, including items such as name, company name, address,
          email address, and telephone number.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '20px' }}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{
            fontWeight: 'medium',
          }}
        >
          How we use your information
        </Typography>
        <Typography
          component={'p'}
          color={'text.secondary'}
          sx={{ marginBottom: '0px' }}
        >
          We use the information we collect in various ways, including to:
        </Typography>
        <List sx={{ listStyle: 'inherit', marginLeft: '20px' }}>
          <ListItem sx={{ display: 'list-item', padding: '2px' }}>
            <ListItemText> Single-line item </ListItemText>
          </ListItem>

          <ListItem sx={{ display: 'list-item', padding: '2px' }}>
            <ListItemText>
              Improve, personalize, and expand our website
            </ListItemText>
          </ListItem>

          <ListItem sx={{ display: 'list-item', padding: '2px' }}>
            <ListItemText>
              {' '}
              Understand and analyze how you use our website
            </ListItemText>
          </ListItem>

          <ListItem sx={{ display: 'list-item', padding: '2px' }}>
            <ListItemText>
              {' '}
              Develop new products, services, features, and functionality
            </ListItemText>
          </ListItem>

          <ListItem sx={{ display: 'list-item', padding: '2px' }}>
            <ListItemText>
              {' '}
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </ListItemText>
          </ListItem>

          <ListItem sx={{ display: 'list-item', padding: '2px' }}>
            <ListItemText> Send you emails</ListItemText>
          </ListItem>

          <ListItem sx={{ display: 'list-item', padding: '2px' }}>
            <ListItemText> Find and prevent fraud</ListItemText>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 'medium' }}>
          Log Files
        </Typography>
        <Typography component={'p'} color={'text.secondary'}>
          Site Design Agency follows a standard procedure of using log files.
          These files log visitors when they visit websites. All hosting
          companies do this and a part of hosting services' analytics. The
          information collected by log files include internet protocol (IP)
          addresses, browser type, Internet Service Provider (ISP), date and
          time stamp, referring/exit pages, and possibly the number of clicks.
          These are not linked to any information that is personally
          identifiable. The purpose of the information is for analyzing trends,
          administering the site, tracking users' movement on the website, and
          gathering demographic information.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 'medium' }}>
          Cookies and Web Beacons
        </Typography>
        <Typography component={'p'} color={'text.secondary'}>
          Like any other website, Site Design Agency uses 'cookies'. These
          cookies are used to store information including visitors' preferences,
          and the pages on the website that the visitor accessed or visited. The
          information is used to optimize the users' experience by customizing
          our web page content based on visitors' browser type and/or other
          information. For more general information on cookies, please read{' '}
          <a
            href="https://www.generateprivacypolicy.com/#cookies"
            target="_blank"
          >
            the Cookies article on Generate Privacy Policy website
          </a>
          .
        </Typography>
      </Box>
      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 'medium' }}>
          Advertising Partners Privacy Policies
        </Typography>
        <Typography
          component={'p'}
          color={'text.secondary'}
          sx={{ marginBottom: '5px' }}
        >
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of Site Design Agency
        </Typography>
        <Typography component={'p'} color={'text.secondary'}>
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on Site Design Agency, which are
          sent directly to users' browser. They automatically receive your IP
          address when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit. Note that
          Site Design Agency has no access to or control over these cookies that
          are used by third-party advertisers.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 'medium' }}>
          Third Party Privacy Policies
        </Typography>
        <Typography
          component={'p'}
          color={'text.secondary'}
          sx={{ marginBottom: '5px' }}
        >
          Site Design Agency's Privacy Policy does not apply to other
          advertisers or websites. Thus, we are advising you to consult the
          respective Privacy Policies of these third-party ad servers for more
          detailed information. It may include their practices and instructions
          about how to opt-out of certain options.
        </Typography>
        <Typography component={'p'} color={'text.secondary'}>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers'
          respective websites.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 'medium' }}>
          CCPA Privacy Rights (Do Not Sell My Personal Information)
        </Typography>
        <Typography
          component={'p'}
          color={'text.secondary'}
          sx={{ marginBottom: '5px' }}
        >
          Under the CCPA, among other rights, California consumers have the
          right to:
        </Typography>
        <Typography component={'p'} color={'text.secondary'}>
          Request that a business that collects a consumer's personal data
          disclose the categories and specific pieces of personal data that a
          business has collected about consumers.
        </Typography>

        <Typography component={'p'} color={'text.secondary'}>
          Request that a business delete any personal data about the consumer
          that a business has collected.
        </Typography>

        <Typography component={'p'} color={'text.secondary'}>
          Request that a business that sells a consumer's personal data, not
          sell the consumer's personal data.
        </Typography>

        <Typography component={'p'} color={'text.secondary'}>
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </Typography>
      </Box>
      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 'medium' }}>
          GDPR Data Protection Rights
        </Typography>
        <Typography
          component={'p'}
          color={'text.secondary'}
          sx={{ marginBottom: '5px' }}
        >
          We would like to make sure you are fully aware of all of your data
          protection rights. Every user is entitled to the following:
        </Typography>
        <Typography component={'p'} color={'text.secondary'}>
          The right to access – You have the right to request copies of your
          personal data. We may charge you a small fee for this service.
        </Typography>

        <Typography component={'p'} color={'text.secondary'}>
          The right to rectification – You have the right to request that we
          correct any information you believe is inaccurate. You also have the
          right to request that we complete the information you believe is
          incomplete.
        </Typography>

        <Typography component={'p'} color={'text.secondary'}>
          The right to erasure – You have the right to request that we erase
          your personal data, under certain conditions.
        </Typography>

        <Typography component={'p'} color={'text.secondary'}>
          The right to restrict processing – You have the right to request that
          we restrict the processing of your personal data, under certain
          conditions.
        </Typography>

        <Typography component={'p'} color={'text.secondary'}>
          TThe right to object to processing – You have the right to object to
          our processing of your personal data, under certain conditions.
        </Typography>

        <Typography component={'p'} color={'text.secondary'}>
          The right to data portability – You have the right to request that we
          transfer the data that we have collected to another organization, or
          directly to you, under certain conditions.
        </Typography>

        <Typography component={'p'} color={'text.secondary'}>
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 'medium' }}>
          Children's Information
        </Typography>
        <Typography
          component={'p'}
          color={'text.secondary'}
          sx={{ marginBottom: '5px' }}
        >
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </Typography>
        <Typography component={'p'} color={'text.secondary'}>
          Site Design Agency does not knowingly collect any Personal
          Identifiable Information from children under the age of 13. If you
          think that your child provided this kind of information on our
          website, we strongly encourage you to contact us immediately and we
          will do our best efforts to promptly remove such information from our
          records.
        </Typography>
      </Box>
    </Box>
  );
};

export default Content;
