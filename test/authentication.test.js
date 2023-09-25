import { expect } from "chai";
import app from '../app.js';
import request from "supertest";

describe('Set de Tests a /auth', () => {

    before(function (done) {
        this.timeout(3000)
        setTimeout(done, 2500)
    })

    describe('POST /signin', () => {

        const cases = [
            { bodyProperty:'response',email: 'lucas@mh.com.ar', password: 'hola1234', endpoint: '/auth/signin', it: 'Deberia de retornarme la informacion del usuario con status 200', statusEsperado: 200 },
            { bodyProperty:'message',email: 'igna@mh.com.ar', password: 'hola123', endpoint: '/auth/signin', it: 'Deberia retornar status 400', statusEsperado: 400 },
            { bodyProperty:'response',email: 'eric@mh.com.ar', password: 'hola1234', endpoint: '/auth/signin', it: 'Deberia de retornarme la informacion del usuario con status 200', statusEsperado: 200 },
            // { bodyProperty:'',email: 'jose@mh.com.ar', password: 'hola123', endpoint: '/auth/signi', it: 'Deberia retornar status 400', statusEsperado: 404 },
        ]

        cases.forEach(test => {
            it(test.it, async () => {
                const respuesta = await request(app)
                    .post(test.endpoint)
                    .send({
                        email: test.email,
                        password: test.password
                    })

                expect(respuesta.status).to.be.equal(test.statusEsperado)
                expect(respuesta.body).to.have.own.property()
            })
        })
        // it('Deberia de retornarme la informacion del usuario con status 200', async () => {
        //     const respuesta = await request(app)
        //         .post('/auth/signin')
        //         .send({
        //             email: 'lucas@mh.com.ar',
        //             password: 'hola1234',
        //         })
        //     expect(respuesta.status).to.equal(200)
        //     expect(respuesta.body).to.have.own.property('response')
        //     expect(respuesta.body.response).to.have.own.property('online').to.be.true

        // })

        it('Deberia responder status 400, credenciales incorrectas', async () => {
            const respuesta = await request(app)
                .post('/auth/signin')
                .send({
                    email: 'lucas@mh.com.ar',
                    password: 'hola123',
                })
            expect(respuesta.status).to.equal(400)
            expect(respuesta.body.message).to.be.string
            expect(respuesta.body.message).to.be.equal('Invalid credentials', 'Esperaba que el mensaje fuera "Invalid credentials"')

        })


    })





})
