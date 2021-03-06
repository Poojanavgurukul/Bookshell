import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ButtonAppBar from './Navbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
const styles = theme => ({
    card: {
        maxWidth: 500,
        marginTop: theme.spacing.unit * 2,
        marginLeft:theme.spacing.unit*45
    },button: {
        margin: theme.spacing.unit,
        backgroundColor: "purple",
        marginTop: theme.spacing.unit *2,
        postion: "fixed"
    },
});

function MediaFullCard(props) {
    const { classes ,location} = props;
    const {item}=location.state
    return (
        <div>
            <ButtonAppBar />
            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <Typography component="p">
                           {item.summary}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" color="secondary" className={classes.button} >
                        Done
                    </Button>
                    <Link to="/">
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Back
                    </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
}

MediaFullCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaFullCard);

