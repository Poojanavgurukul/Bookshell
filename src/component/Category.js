import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom';


const styles = theme => ({
  backgroundColor:{
    backgroundColor:"purple"
},
textMargin:{
    margin:theme.spacing.unit*2
},
  card: {
    maxWidth: 345,
    marginTop:theme.spacing.unit*10,
    margin:theme.spacing.unit*2
  },
  gridbox:{
    display:"grid",
    gridTemplateColumns:"25% 25% 25% 25%",
},button: {
  margin: theme.spacing.unit,
  backgroundColor: "purple",
  postion: "fixed"
},
textColor:{
  color:"black",
  fontWeight:"bold"
}
});

class PersistentDrawerLeft extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        bookDatas: []
    }
}
componentDidMount() {
  fetch('http://192.168.43.210:3030/all_books')
  .then(res => res.json())
  .then(json => {
      console.log(json)
      this.setState({
      bookDatas: json
      });
  })
}
  render() {
    const { classes, } = this.props;
    const { bookDatas} = this.state
    return (
      <div >
        <CssBaseline />
        <AppBar className={classes.backgroundColor}>
          <Toolbar>
              <Link to ="/">
            <Typography variant="h6" color="inherit" noWrap className={classes.textMargin}>
            Home
            </Typography>
            </Link>
            <Typography variant="h6" color="inherit" noWrap className={classes.textMargin}>
            All Books
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.gridbox}>
                {bookDatas? bookDatas.map((bookData => (
                    <Card className={classes.card} key={bookData.id}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" className={classes.textColor}>
                                    Book:{bookData.book_title}
                                </Typography>
                                <Typography component="h6" variant="h6">
                                  {bookData.bookAuthor}
                                    </Typography>
                                    <Typography component="p"> 
                                   {bookData.releaseDate}
                                    </Typography>
                                    <Typography component="p">
                                   {bookData.genres}
                                    </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to={{pathname:"/summaryall",
                                        state:{
                                          bookData:bookData
                                        }    
                                    }}>>
                                <Button variant="contained" color="secondary" className={classes.button} >
                                    Read
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                )
                )):null}
                </div>
                <Button variant="contained" color="secondary" className={classes.button}>
                  More
            </Button>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
