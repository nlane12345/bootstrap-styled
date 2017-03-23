import styled from 'styled-components';
import React, { PropTypes } from 'react';
import cn from 'classnames';
import themeBs from 'theme';
import { makeGridColumns } from '../../styled/mixins/grid-framework';
import { mapToCssModules } from '../../styled/utilities/tools';

const colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const columnProps = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    push: stringOrNumberProp,
    pull: stringOrNumberProp,
    offset: stringOrNumberProp,
  }),
]);

const defaultProps = {
  theme: themeBs,
  tag: 'div',
  widths: colWidths,
};

export const getColumnSizeClass = (isXs, colWidth, colSize) => {
  if (colSize === true || colSize === '') {
    return isXs ? '' : `col-${colWidth}`;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : `col-${colWidth}-auto`;
  }

  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
};

class Col extends React.Component {    // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    xs: columnProps,
    sm: columnProps,
    md: columnProps,
    lg: columnProps,
    xl: columnProps,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    widths: PropTypes.array,
    theme: PropTypes.object,
  }

  render() {
    const {
      className,
      cssModule,
      widths,
      tag: Tag,
      theme,  // eslint-disable-line
      ...attributes
    } = this.props;
    const colClasses = [];

    widths.forEach((colWidth, i) => {
      let columnProp = this.props[colWidth];

      if (!i && columnProp === undefined) {
        columnProp = true;
      }

      delete attributes[colWidth];

      if (!columnProp) {
        return;
      }

      const isXs = !i;
      let colClass;

      if (typeof columnProp === 'object') {
        const colSizeInterfix = isXs ? '-' : `-${colWidth}-`;
        colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);

        colClasses.push(mapToCssModules(cn({
          [colClass]: columnProp.size || columnProp.size === '',
          [`push${colSizeInterfix}${columnProp.push}`]: columnProp.push,
          [`pull${colSizeInterfix}${columnProp.pull}`]: columnProp.pull,
          [`offset${colSizeInterfix}${columnProp.offset}`]: columnProp.offset,
        })), cssModule);
      } else {
        colClass = getColumnSizeClass(isXs, colWidth, columnProp);
        colClasses.push(colClass);
      }
    });

    const classes = mapToCssModules(cn(
      className,
      colClasses
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

// eslint-disable-next-line no-class-assign
Col = styled(Col)`
  ${(props) => `
    ${makeGridColumns(
      props.theme['$enable-grid-classes'],
      props.theme['$grid-columns'],
      props.theme['$grid-gutter-widths'],
      props.theme['$grid-breakpoints']
    )}
  `}
`;

Col.defaultProps = defaultProps;

export default Col;

