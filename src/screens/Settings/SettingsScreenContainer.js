import { compose, withHandlers, withState, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import SettingsScreen from './SettingsScreenView';
import { viewerOperations } from '../../modules/viewer';
import { NavigationService } from '../../services';

const mapDispatchToProps = {
  logout: viewerOperations.logout,
};


const enhancer = compose(connect(null, mapDispatchToProps),
  withHandlers({
    handleLogout: ({ logout }) => () => {
      Alert.alert(
        'Logout',
        'Are you sure you want to logout',
        [{
          text: 'Ok',
          onPress: () => {
            logout();
            NavigationService.navigateToBrowse();
          },
        },
        {
          text: 'Cancel',
        }],
      );
    },
  }),
);

export default hoistStatics(enhancer)(SettingsScreen);
