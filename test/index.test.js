import { expect } from "chai";

describe('Set de Tests index', () => {

    before(function (done) {
        this.timeout(3000)
        setTimeout(done, 2500)
    })

    it('lo que sea', () => {
        expect('lo que sea').to.equal('lo que sea')
    })

})