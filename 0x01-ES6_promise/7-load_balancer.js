/**
 *
 * @param {*} chinaDownload
 * @param {*} USDownload
 * @returns
 −−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−+
| name               | description                                     |                 |
+−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−+
| Promise.allSettled | does not short-circuit                          | Added in ES2020 |
| Promise.all        | short-circuits when an input value is rejected  | Added in ES2015 |
| Promise.race       | short-circuits when an input value is settled   | Added in ES2015 |
| Promise.any        | short-circuits when an input value is fulfilled | this proposal   |
+−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−+
 */
function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
export default loadBalancer;
