import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAssets, loadProductsAndTokens } from '../../thunks';
import ImportPrivateKey from '../views/ImportPrivateKey';
import ButtonGroup from '../components/ButtonGroup';
import BigCenter from '../components/BigCenter';

class ImportPrivateKeyScreen extends Component {
  render() {
    return (
      <BigCenter>
        <ImportPrivateKey
          onFinish={async () => {
            try {
              await this.props.dispatch(loadProductsAndTokens());
              await this.props.dispatch(loadAssets());
              this.props.navigation.navigate({ routeName: 'Main' });
            } catch (err) {
              setError(err);
            }
          }}
        />
        <ButtonGroup
          onPress={index => {
            switch (index) {
              case 0:
                this.props.navigation.navigate({ routeName: 'Unlock' });
                break;

              case 1:
                this.props.navigation.navigate({
                  routeName: 'ImportPrivateKey'
                });
                break;

              case 2:
                this.props.navigation.navigate({ routeName: 'GenerateWallet' });
                break;
            }
          }}
          selectedIndex={1}
          buttons={['Unlock', 'Import', 'New']}
        />
      </BigCenter>
    );
  }
}

export default connect(() => ({}), dispatch => ({ dispatch }))(
  ImportPrivateKeyScreen
);