import React, {ReactNode, FC} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
  ViewStyle,
  StyleSheet,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {s} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';

interface LayoutProps {
  children?: ReactNode;
  style?: ViewStyle;
  title?: string;
  safeAreaViewStyleTop?: ViewStyle;
  safeAreaViewStyleBottom?: ViewStyle;
  onGoBack?: () => void;
}

const Layout: FC<LayoutProps> = ({
  children,
  style,
  title,
  safeAreaViewStyleTop,
  safeAreaViewStyleBottom,
  onGoBack,
}) => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor="#fafafa" barStyle="dark-content" />
      <SafeAreaView style={safeAreaViewStyleTop} />
      <KeyboardAvoidingView
        style={styles.safeView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={[styles.container, style]}>
          {title && (
            <View style={styles.header}>
              <Pressable onPress={onGoBack ?? navigation.goBack}>
                <Icon name="angle-left" size={26} color="#000" />
              </Pressable>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
              </View>
            </View>
          )}
          {children}
        </View>
      </KeyboardAvoidingView>
      <SafeAreaView style={safeAreaViewStyleBottom} />
    </>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#F2F1F6',
  },
  container: {
    paddingHorizontal: s(10),
    paddingTop: s(20),
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: s(24),
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: s(10),
    borderBottomColor: '#E2E2E2',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
  },
  title: {
    color: '#000',
    fontFamily: 'Sora',
    fontSize: s(16),
    fontWeight: '600',
  },
});

export default Layout;
