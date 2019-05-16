import * as React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import shadow from './styles/shadow';
// import { withTheme } from '../core/theming';
import type { Theme } from './types';
import colors from './styles/exportColors';

type Props = React.ElementConfig<typeof View> & {
  /**
   * Content of the `Surface`.
   */
  children: React.Node,
  style?: any,
  /**
   * @optional
   */
  theme: Theme,
};

class Surface extends React.Component<Props> {
  render() {
    const { style, theme, ...rest } = this.props;
    const flattenedStyles = StyleSheet.flatten(style) || {};
    const { elevation } = flattenedStyles;

    return (
      <Animated.View
        {...rest}
        style={[
          { backgroundColor: colors.surface },
          elevation && shadow(elevation),
          style,
        ]}
      />
    );
  }
}

// export default withTheme(Surface);
export default Surface;