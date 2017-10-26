/*******************************************************************************
 * Copyright 2016 Adobe Systems Incorporated
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/

/**
 * Tests for the core text component
 */
;(function (h, $) {

    // shortcuts
    var c = window.CQ.CoreComponentsIT.commons;
    var text = window.CQ.CoreComponentsIT.Text.v1;

    /**
     * v1 specifics
     */
    var tcExecuteBeforeTest = text.tcExecuteBeforeTest(c.rtText);
    var tcExecuteAfterTest = text.tcExecuteAfterTest();
    var selectors = {
        editor: '.cmp-text.aem-GridColumn p',
        rendered: '.cmp-text.aem-GridColumn p'
    };

    /**
     * The main test suite for Text Component
     */
    new h.TestSuite('Text v1', {path: '/apps/core/wcm/tests/test-suites/Text/v1/Text.js',
        execBefore:c.tcExecuteBeforeTestSuite,
        execInNewWindow : false})

        .addTestCase(text.tcSetTextValueUsingInlineEditor(selectors, tcExecuteBeforeTest, tcExecuteAfterTest));
}(hobs, jQuery));
