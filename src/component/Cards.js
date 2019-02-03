import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddBook from './Addbookform'
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import FullDescription from './FullDescription';
const styles = theme => ({
    card: {
        maxWidth: 345,
        marginTop: theme.spacing.unit * 2,
        margin:theme.spacing.unit*5
    },
    button: {
        margin: theme.spacing.unit,
        backgroundColor: "purple",
        marginTop: theme.spacing.unit *2,
        postion: "fixed"
    },
    input: {
        display: 'none',
    },
    gridbox:{
        display:"grid",
        gridTemplateColumns:"25% 25% 25% 25%",
        background:"url('https://cdn.lifehack.org/wp-content/uploads/2015/06/13947832357_bbc8aa1400_k.jpg')",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
    },
    textColor:{
        color:"black",
        fontWeight:"bold"
    }
});

class MediaCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
        this.state = { opens: false }
        this.opens = this.opens.bind(this)
        this.closes = this.closes.bind(this)
        this.state = { opened: false }
        this.opened = this.opens.bind(this)
        this.closed = this.closed.bind(this)
    }
    opens() {
        this.setState({ opens: true })
    }
    closes() {
        this.setState({ opens: false })
    }
    opened() {
        this.setState({ opens: true })
    }
    closed() {
        this.setState({ opens: false })
    }
    componentDidMount() {
        fetch('http://192.168.43.210:3030/home')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            this.setState({
            items: json
            });
        })
    }
    render() {
        const { classes } = this.props;
        const { items } = this.state
        return (
            <div>
            <div className={classes.gridbox}>
                {items? items.map((item => (
                    <Card className={classes.card} key={item.id}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" className={classes.textColor}>
                                   Book: {item.book_title}
                                </Typography>
                                <Typography component="h6" variant="h6">
                                   {item.bookAuthor}
                                    </Typography>
                                    <Typography component="p"> 
                                   {item.releaseDate}
                                    </Typography>
                                    <Typography component="p">
                                   {item.genres}
                                    </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Popup
                    open={this.state.opened}
                    closeOnDocumentClick
                    onClose={this.closed}
                >
                    <div>
                        <a onClick={this.closed}>
                        </a>
                        <div>
                            <FullDescription />
                        </div>
                    </div>
                </Popup>
                            <Link to={{pathname:"/summary",
                                        state:{
                                            item:item
                                        }    
                                    }}>
                                <Button variant="contained" color="secondary" className={classes.button} >
                    Read
            </Button>
                            </Link>
                        </CardActions>
                    </Card>
                )
                )):null}
                <Popup
                    open={this.state.opens}
                    closeOnDocumentClick
                    onClose={this.closes}
                >
                    <div>
                        <a onClick={this.closes}>
                        </a>
                        <div>
                            <AddBook />
                        </div>
                    </div>
                </Popup>
            </div>
            <Button variant="contained" color="secondary" className={classes.button} onClick={this.opens}>
                    Add Book
            </Button>
            </div>
        );
    }
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);

