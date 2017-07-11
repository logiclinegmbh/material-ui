/* eslint-env mocha */

import React from 'react';
import PropTypes from 'prop-types';
import {mount} from 'enzyme';
import {assert} from 'chai';
import getMuiTheme from '../styles/getMuiTheme';
import CalendarActionButtons from './CalendarActionButtons';
import EnhancedButton from '../internal/EnhancedButton';

describe('<CalendarActionButtons />', () => {
  const muiTheme = getMuiTheme();
  const mountWithContext = (node) => mount(node, {
    context: {muiTheme},
    childContextTypes: {muiTheme: PropTypes.object},
  });

  describe('actionButtonStyle', () => {
    it('should be passed to underlying button', () => {
      const actionButtonStyle = {
        hoverColor: '#abcdef',
        rippleColor: '#fedcba',
      };

      const wrapper = mountWithContext(
        <CalendarActionButtons
          actionButtonStyle={actionButtonStyle}
          okLabel="OK"
          cancelLabel="CANCEL"
        />
      );

      assert.strictEqual(wrapper.find(EnhancedButton).at(0).props().focusRippleColor, '#fedcba');
      assert.strictEqual(wrapper.find(EnhancedButton).at(1).props().focusRippleColor, '#fedcba');
    });
  });
});
