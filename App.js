import React from 'react';
import { connect } from 'react-redux';
import { createRootNavigator } from './router';
import SecurityAppAuth from './src/services/SecurityAppAuth';
import { updateIsCustomUrl, updateInitialUrlData } from './src/actions/commonAction';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
    };
  }

  componentWillMount() {
    SecurityAppAuth.currentToken()
      .then((res) => {
        this.props.updateInitialUrlData().then(() => {
          this.setState({ signedIn: !!res, checkedSignIn: true });
        });
      });
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;
    if (!checkedSignIn) {
      return null;
    }
    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateIsCustomUrl: isCustom => dispatch(updateIsCustomUrl(isCustom)),
    updateInitialUrlData: () => dispatch(updateInitialUrlData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
