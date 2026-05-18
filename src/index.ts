/**
 * @amlplugins/google-cloud-run
 *
 * Thin namespaced re-export of the native @google-cloud/run SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Cloud Run.
 */

import * as _sdk from "@google-cloud/run";
export * from "@google-cloud/run";
export { _sdk as sdk };
export default _sdk;
