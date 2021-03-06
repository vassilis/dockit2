import PropTypes from 'prop-types';
import React from 'react';
import { Box, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  header: {
    fontFamily: 'Rubik',
    fontSize: '3rem',
    fontWeight: 500,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    padding: '30px 30px 10px 0',
    borderRadius: '0 0 30px 0',
    [theme.breakpoints.down('sm')]: {
      borderRadius: 0,
      paddingLeft: 24,
    },
  },
  headerRight: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '0 0 0 30px',
    width: '100%',
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      borderRadius: 0,
      margin: 0,
      padding: 24,
    },
  },
  wrapper: {
    position: 'relative',
    '&::before': {
      content: '""',
      display: 'block',
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      top: 0,
      left: 0,
      right: '50%',
      bottom: 0,
      zIndex: -1,
    },
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.palette.secondary.main,
      position: 'absolute',
      top: 0,
      right: 0,
      left: '50%',
      bottom: 0,
      zIndex: -1,
    },
  },
  inner: {
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  logo: {
    maxWidth: '100%',
    minWidth: 326,
  },
  navItem: {
    fontSize: '1.3rem',
    marginRight: theme.spacing(3),
    textTransform: 'capitalize',
    color: theme.palette.common.white,
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  selected: {
    textDecoration: 'underline',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

function Header({ logo, currentPage }) {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Container className={classes.container}>
        <Box className={classes.inner}>
          <header className={classes.header}>
            {logo && logo.asset && (
              <Link to="/">
                <img
                  src={logo.asset.fluid.src}
                  alt={logo.alt}
                  className={classes.logo}
                />
              </Link>
            )}
          </header>
          <Box className={classes.headerRight}>
            <Button
              variant="text"
              component={Link}
              to="/pricing"
              className={`${classes.navItem} ${currentPage === 'pricing' &&
                classes.selected}`}
            >
              Pricing
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/#form"
              className={`${classes.navItem} ${classes.btn}`}
            >
              Get Demo
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

Header.propTypes = {
  logo: PropTypes.object,
};

Header.defaultProps = {
  logo: null,
};

export default Header;
