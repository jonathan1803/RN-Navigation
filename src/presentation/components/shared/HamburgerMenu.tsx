import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Pressable, Text} from 'react-native';
import {IonIcons} from './IonIcons';
import {globalColors} from '../../theme/theme';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  return useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{marginLeft: 10}}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcons
            name="menu-outline"
            size={25}
            color={globalColors.primary}
          />
        </Pressable>
      ),
    });
  }, []);

  return <></>;
};
