import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';

import '../style/home.css';

const useStyles = makeStyles((theme) => ({}));

export default function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const preventDefault = (event) => event.preventDefault();

  const classes = useStyles();

  return (
    <div className="main">
      <Container maxWidth="md">
        <div style={{paddingTop: '50px',paddingBottom: '40px',}}>
          <Button variant="contained">Connect Wallet</Button>
        </div>
        <div className="title">
          <img src="images/logo.png" className="logo" alt="logo" />
          <Typography variant="h3" component="p" gutterBottom>
            COCKTAIL LOUNGE
          </Typography>
        </div>
        <Typography variant="body2" gutterBottom>
          Current Reward Currency:
        </Typography>
        <div>
          <div>
            <Button variant="contained" color="default" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              Switch Reward Currency
              <ArrowDropDownIcon />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>BNB</MenuItem>
            </Menu>
          </div>
          <Button variant="contained">Claim</Button>
        </div>
        <div>
          <Card className="blue_box_large">
            <CardContent>
              <Typography variant="body2" component="p">
                Payout Loading
              </Typography>
              <Typography variant="body2" component="p">
                Processing - remaining
              </Typography>
              <Typography variant="body2" component="p">
                Pending : 0.0198 BNB
              </Typography>
            </CardContent>
          </Card>
          <Card className="blue_box">
            <CardContent>
              <Typography variant="body2" component="p">
                Your Cocktail Holdings
              </Typography>
              <Typography variant="body2" component="p">
                - Cocktails
              </Typography>
            </CardContent>
          </Card>
        </div>
        <Link href="#" onClick={preventDefault} color="inherit">
          Disclaimer
        </Link>
      </Container>
    </div>
  );
}
