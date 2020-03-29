import React from 'react';
import './App.css';
import Author from './components/Author';
//import Authors from './components/Authors';

interface IAuthor {
  id: string;
  name: string;
}
interface Props {}
interface State {
  authors: Array<IAuthor>;
  showAuthors: boolean;
}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log('[App.tsx] -- constructor', props, this.state);
  }

  state: State = {
    authors: [{ id: '1', name: 'Rany ElHousieny' }, { id: '2', name: 'Omnia Omar' }, { id: '3', name: 'Khalid ElHousieny' }],
    showAuthors: true,
  };

  deleteAuthorHandler = (index: number) => {
    const authors = [...this.state.authors];
    authors.splice(index, 1);
    this.setState({
      authors: authors,
    });
  };
  render() {
    console.log('[App.tsx] -- render', this.props, this.state);
    let authors = null;

    if (this.state.showAuthors) {
      console.log('[App.tsx] -- showAuthors = ', this.state.showAuthors);
      authors = (
        <div>
          {this.state.authors.map((author, index) => (
            <Author authorId={author.id} authorName={author.name} click={() => this.deleteAuthorHandler(index)} />
          ))}
        </div>
      );
    }
    // Dynamic style
    const classes: Array<string> = [];
    if (this.state.authors.length === 2) {
      classes.push('blue');
    }
    if (this.state.authors.length < 2) {
      classes.push('red');
    }
    if (this.state.authors.length < 2) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <p className={classes.join(' ')}>List of Authors</p>
        {authors}
      </div>
    );
  }
}

export default App;
