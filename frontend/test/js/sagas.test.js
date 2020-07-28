import regeneratorRuntime from "regenerator-runtime";

import rootSaga from "../../src/js/sagas";

describe('root saga', () => {
  it('should register sagas', () => {
      expect(rootSaga().next().value.payload.length).toBe(1);
  });
});
