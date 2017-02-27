/**
 * H1 Component
 *
 *
 */
import styled from 'styled-components';
import theme from 'theme';
import { typography } from '../../styled/mixins/typography';

var defaultProps = { theme: theme };

// eslint-disable-next-line no-class-assign
var H1 = styled.h1.withConfig({
  displayName: 'H1__H1',
  componentId: 'H1__H1-s985iy'
})(['', ''], function (props) {
  return '\n\n    font-size: ' + props.theme['$font-size-h1'] + ';\n    ' + typography(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n\n    &.lead {\n      font-size: ' + props.theme['$lead-font-size'] + ';\n      font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});

H1.defaultProps = defaultProps;

export default H1;