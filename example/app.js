import ReactDOM from 'react-dom';
import ReactTree from '../lib/react-tree';
import { PROJECT_TREE } from './project-tree';

class ExampleApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };

    this.handleOnChanged = this.handleOnChanged.bind(this);
  }
  handleOnChanged(changedItems) {
    this.setState({
      items: changedItems.map(item => item.text).join(', ')
    });
  }

  render() {
    return (
      <div>
        <ReactTree tree={PROJECT_TREE} onChanged={this.handleOnChanged}/>
        <div>Selected items: {this.state.items}</div>
      </div>
    );
  }
}

ReactDOM.render(<ExampleApp />, document.getElementById('app'));
