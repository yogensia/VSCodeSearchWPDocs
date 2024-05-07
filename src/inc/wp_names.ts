/*

MIT License

Copyright(c) 2018 — 2024 Yogensia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files(the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

'use strict';

import functions from './functions.json';
import hooks from './hooks.json';

/**
 * Check if given string is a known function name.
 *
 * @param functionName String Function to check for.
 */
export function isFunction(functionName: string) {
    if (functions.includes(functionName)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Check if given string is a known Hook name.
 *
 * @param hookName String Hook to check for.
 */
export function isHook(hookName: string) {
    if (hooks.includes(hookName)) {
        return true;
    } else {
        return false;
    }
}
