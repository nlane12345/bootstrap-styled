/**
 * H2 Component
 *
 *
 */
import styled from 'styled-components';
import theme from 'theme';
import { typography } from '../../styled/mixins/typography';
var defaultProps = { theme: theme };

var H2 = styled.h2.withConfig({
  displayName: 'H2__H2',
  componentId: 'H2__H2-uj0wqi'
})(['', ''], function (props) {
  return '\n\n    font-size: ' + props.theme['$font-size-h2'] + ';\n    ' + typography(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n\n    &.lead {\n      font-size: ' + props.theme['$lead-font-size'] + ';\n      font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});

H2.defaultProps = defaultProps;

export default H2;