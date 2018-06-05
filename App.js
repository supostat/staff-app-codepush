import React from 'react';
import { connect } from 'react-redux';
import { createRootNavigator } from './router';
import SecurityAppAuth from './src/services/SecurityAppAuth';
import { updateIsCustomUrl, updateInitialUrlData } from './src/actions/commonAction';
import Progress from './src/components/Progress';

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
    const { isDownloading, progress } = this.props;
    const { checkedSignIn, signedIn } = this.state;
    if (isDownloading) {
      return <Progress progress={progress} />;
    }
    if (!checkedSignIn) {
      return null;
    }
    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}

function mapStateToProps(state) {
  const { isDownloading, receivedBytes, totalBytes } = state.codePushReducer;
  const progress = receivedBytes && totalBytes ? receivedBytes / totalBytes : null;
  return {
    isDownloading,
    progress,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateIsCustomUrl: isCustom => dispatch(updateIsCustomUrl(isCustom)),
    updateInitialUrlData: () => dispatch(updateInitialUrlData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
