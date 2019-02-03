import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import axios from "axios";

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', 
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor:"purple"
  },
});

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book_title: "",
      bookAuthor: "",
      releaseDate: "",
      genres:"",
      summary:"",
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  Book = e => {
    e.preventDefault();
    const book_title = this.state.emailid;
    const bookAuthor = this.state.password;
    const releaseDate=this.state.releaseDate;
    const genres=this.state.genres;
    const summary=this.state.summary;

    const user = {
      book_title,
      bookAuthor,
      releaseDate,
      genres,
      summary,
    };
    console.log(user);
    axios
     .post("http://192.168.43.210:3030/post_book", user)
     .then(res=>{
         console.log(res);
         this.setState({
             message:res.user
         });
     })
     .catch(err=>{
         console.log(err)
     })
  };
    render(){
  const { classes } = this.props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add Book Form
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="book_title" onChange={this.onChange}>Book Title</InputLabel>
            <Input id="email" name="book_title" type ="text" autoComplete="book_title" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="bookAuthor" >Book Author</InputLabel>
            <Input name="bookAuthor" type="text" id="password" autoComplete="bookAuthor" onChange={this.onChange} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="releaseDate">Release Date</InputLabel>
            <Input name="releaseDate" type="text" id="password" autoComplete="releaseDate" onChange={this.onChange} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="genres">Genres</InputLabel>
            <Input name="genres" type="text" id="password" autoComplete="genres"  onChange={this.onChange}/>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="summary">Summary</InputLabel>
            <Input name="summary" type="text" id="password" autoComplete="summary"  onChange={this.onChange}/>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.Book}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </main>
  );
}
}

AddBook.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddBook);