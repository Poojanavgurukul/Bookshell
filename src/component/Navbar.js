import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popup from 'reactjs-popup';
import LoginIn from './Loginpage';
import SignIn from './SignUp';
import { Link } from 'react-router-dom';

const styles = {
    grow: {
        flexGrow: 1,
        fontFamily: 'Righteous',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    backgroundColor: {
        backgroundColor: "purple",
    }
};

class ButtonAppBar extends React.Component {
    constructor() {
        super()
        this.state = { open: false }
        this.state = { open1: false }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.openM = this.openM.bind(this)
        this.close = this.close.bind(this)
    }
    openModal() {
        this.setState({ open: true })
    }
    closeModal() {
        this.setState({ open: false })
    }
    openM() {
        this.setState({ open1: true })
    }
    close() {
        this.setState({ open1: false })
    }
    render() {
        const { classes } = this.props;
        return (
            <div >
                <AppBar position="static" className={classes.backgroundColor}>
                    <Toolbar className={classes.backgroundColor}>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Book Shell
                        </Typography>
                        <Popup
                            open={this.state.open}
                            closeOnDocumentClick
                            onClose={this.closeModal}
                        >
                            <div>
                                <a onClick={this.closeModal}>
                                </a>
                                <div>
                                    <LoginIn />
                                </div>
                            </div>
                        </Popup>
                        <Popup
                            open={this.state.open1}
                            closeOnDocumentClick
                            onClose={this.close}
                        >
                            <div>
                                <a onClick={this.close}>
                                </a>
                                <div>
                                    <SignIn />
                                </div>
                            </div>
                        </Popup>
                        <Button color="inherit" onClick={this.openModal}>LogIn</Button>
                        <Button color="inherit" onClick={this.openM}>SignUp</Button>
                        <Link to="/allbooks"><Button color="inherit">All Books</Button></Link>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);