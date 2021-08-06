import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Avatar from '@material-ui/core/Avatar';
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
        <div style={{width: '80%',margin: 'auto',paddingTop: '20px',paddingBottom: '20px',}}>
          <div style={{paddingTop: '30px',paddingBottom: '30px',}}>
            <Button variant="contained">Connect Wallet</Button>
          </div>
          <div className="title">
            <img src="images/logo.png" className="logo" alt="logo" />
            <Typography component="p">
              COCKTAIL LOUNGE
            </Typography>
          </div>
          <Typography variant="h6" style={{marginTop: '15px',marginBottom: '20px',}}>
            Current Reward Currency:
          </Typography>
          <div style={{marginBottom: '50px',}}>
            <div style={{display: 'flex',justifyContent: 'space-between',margin: 'auto',width: '400px',}}>
              <div>
                <Button variant="contained" style={{width: '280px',}} color="default" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
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
                  <MenuItem onClick={handleClose}>
                    <Avatar alt="avatar" src="images/default-image.png" />
                    <Typography variant="inherit" className="menu-span1">BNB</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Avatar alt="avatar" src="images/default-image.png" />
                    <Typography variant="inherit" className="menu-text-1">BTC</Typography>
                    <Typography variant="inherit" className="menu-text-2">Pegged</Typography>
                  </MenuItem>
                </Menu>
              </div>
              <Button variant="contained" style={{width: '100px',}}>Claim</Button>
            </div>
          </div> 
          <div className="card-div">
            <Card className="blue_box_large">
              <CardContent style={{display: 'flex',alignItems: 'center',}}>
                <img alt="" src="images/default-image.png" />
                <Grid container direction="column" justifyContent="space-around" className="card-content">
                  <Grid item xs={12}>
                    <Typography component="p" className="card-text-1">
                      Payout Loading
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography component="p" className="card-text-2">
                      Processing - remaining
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography component="p" className="card-text-2">
                      Pending : 0.0198 BNB
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card className="blue_box">
              <CardContent style={{display: 'flex',alignItems: 'center',}}>
                <img alt="avatar" src="images/default-image.png" />
                <Grid container direction="column" justifyContent="space-around" spacing={1} className="card-content">
                  <Grid item xs={12}>
                    <Typography component="p" className="card-text-1">
                      Your Cocktail Holdings
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography component="p" className="card-text-2">
                      - Cocktails
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card className="blue_box">
              <CardContent style={{display: 'flex',alignItems: 'center',}}>
                <img alt="avatar" src="images/default-image.png" />
                <Grid container direction="column" justifyContent="space-around" spacing={1} className="card-content">
                  <Grid item xs={12}>
                    <Typography component="p" className="card-text-1">
                      Total BNB paid
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography component="p" className="card-text-2">
                      0.624 BNB - $200.81
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card className="blue_box">
              <CardContent style={{display: 'flex',alignItems: 'center',}}>
                <img alt="avatar" src="images/default-image.png" />
                <Grid container direction="column" justifyContent="space-around" spacing={1} className="card-content">
                  <Grid item xs={12}>
                    <Typography component="p" className="card-text-1">
                      Last Payout Received
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography component="p" className="card-text-2">
                      $6.47
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card className="blue_box">
              <CardContent style={{display: 'flex',alignItems: 'center',}}>
                <img alt="avatar" src="images/default-image.png" />
                <Grid container direction="column" justifyContent="space-around" spacing={1} className="card-content">
                  <Grid item xs={12}>
                    <Typography component="p" className="card-text-1">
                      Last Payout Time
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography component="p" className="card-text-2">
                      3 hours ago
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </div>
          <Link href="#" onClick={preventDefault} color="inherit" variant="body1">
            Disclaimer
          </Link>
        </div>
      </Container>
    </div>
  );
}
